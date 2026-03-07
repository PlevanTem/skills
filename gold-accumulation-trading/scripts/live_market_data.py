import urllib.request
import json
import time
import os

# --- 网络代理配置 (Clash) ---
# 解决 403 Forbidden 和境外失连问题
PROXY_URL = "http://127.0.0.1:7890" # 请核对您的 Clash 代理端口是否为 7890
os.environ['http_proxy'] = PROXY_URL
os.environ['https_proxy'] = PROXY_URL
# ---------------------------

def fetch_spot_gold():
    """使用 CNBC API 获取真正的外盘现货黄金 (London Spot Gold XAU=) 秒级报价"""
    url = "https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=XAU="
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        res = urllib.request.urlopen(req, timeout=10).read().decode()
        data = json.loads(res)
        
        quote = data['FormattedQuoteResult']['FormattedQuote'][0]
        # 解析如 "5,125.71" 带有逗号的字符串
        price_str = quote.get('last', '0').replace(',', '')
        price = float(price_str)
        # CNBC 返回的时间字符串，如 "2026-03-03T19:19:00.000-0500"
        market_time_raw = quote.get('last_time', '')
        return price, market_time_raw
    except Exception as e:
        print(f"Fetch Yahoo Gold error: {e}")
        return None

def fetch_cny_rate():
    """获取 USDCNY 的即期大概汇率"""
    url = 'https://api.frankfurter.app/latest?from=USD&to=CNY'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5).read().decode()
        data = json.loads(res)
        return float(data['rates']['CNY'])
    except Exception:
        # Fallback 到系统近期常用的一个汇基底，如果有问题可以手动修改
        return 7.15

if __name__ == '__main__':
    print("=" * 45)
    print("🤖 黄金行情全链路采集 (基于常规金融市场源)")
    print(f"⏰ 取价时间: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}")
    print("-" * 45)
    
    gold_data = fetch_spot_gold()
    xauusd = gold_data[0] if gold_data else None
    market_time_str = gold_data[1] if gold_data else "未知"
    
    fx_rate = fetch_cny_rate()
    
    if xauusd and fx_rate:
        print(f"📍 [1] 国际黄金 (纯正伦敦现货金 XAU/USD): ${xauusd:.2f} /盎司")
        print(f"   └─ 💹 数据源原始精确更新时刻: {market_time_str} (带时区精度至秒)")
        print(f"📍 [附] 即期汇率 (USD/CNY): {fx_rate:.4f}\n")
        
        # 换算克价 (1盎司 = 31.1035克)
        base_cny_gram = (xauusd * fx_rate) / 31.1035
        print(f"--- 理论无汇损无溢价基础基座: {base_cny_gram:.2f} 元/克 ---")
        
        # 对于银行积存金，最近发现由于“汇率、延期和银行利润率点差”，
        # 与纯物理换算之间有固定经验参数差额。
        # 昨天晚上22:00用户校准约有 10-11 元/克的折价。
        discount = -10.5 
        zheshang_bid = base_cny_gram + discount
        minsheng_bid = zheshang_bid + 0.35 
        
        print(f"🏦 [2] 浙商积存金(推估现买价): ≈ {zheshang_bid:.2f} 元/克")
        print(f"🏦 [3] 民生积存金(推估现买价): ≈ {minsheng_bid:.2f} 元/克")
    else:
        print("❌ 网络获取核心金融数据失败。")
        
    print("=" * 45)
    print("💡 结论记录：为追求绝对精确，底层源已从包含期现基差的交易所期货切换至 CNBC 直取的 伦敦现货黄金(XAU=) 秒级盘口。")
    print("由于黄金产品特性，如果盘面与您APP看到的金额有任何人民币层面的偏离，您可通过微调本脚本的汇率点差及折价参数(Discount)完成对齐！")
