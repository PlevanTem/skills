import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Card, Avatar, Button } from '../components';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "I'm always here to listen, understand, and support you through life's ups and downs. I can offer personalized emotional guidance, recommend coping strategies, and provide resources tailored to your unique needs. Together, let's make every conversation a step towards a healthier, happier you.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const emotionTags = ['Counsel', 'Relax', 'Anxiety', 'Confidence', 'Loneliness', 'Relationship'];

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText.trim(),
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <View style={styles.backIcon} />
          </TouchableOpacity>
          <Avatar size={35} name="Sage" />
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Sage</Text>
            <Text style={styles.headerSubtitle}>Your mental health mentor</Text>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Message */}
          <Card style={styles.welcomeCard} noShadow>
            <Text style={styles.welcomeText}>
              My child, I'm happy to help you find emotional wisdom. Directly text me or choose below:
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.emotionScroll}
            >
              {emotionTags.map((tag) => (
                <TouchableOpacity key={tag} style={styles.emotionTag}>
                  <Text style={styles.emotionTagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Card>

          {/* Messages */}
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageContainer,
                message.isUser ? styles.messageUser : styles.messageBot,
              ]}
            >
              <View
                style={[
                  styles.messageBubble,
                  message.isUser ? styles.bubbleUser : styles.bubbleBot,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    message.isUser ? styles.textUser : styles.textBot,
                  ]}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachmentButton}>
            <View style={styles.attachmentIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={theme.colors.textTertiary}
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <View style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.base,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  backIcon: {
    width: 8,
    height: 16,
    backgroundColor: theme.colors.text,
  },
  headerInfo: {
    flex: 1,
    marginLeft: theme.spacing.sm,
  },
  headerTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
  },
  headerSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  menuButton: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 25,
    height: 25,
    backgroundColor: theme.colors.textSecondary,
    borderRadius: theme.borderRadius.sm,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: theme.spacing.base,
  },
  welcomeCard: {
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  welcomeText: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  emotionScroll: {
    gap: theme.spacing.sm,
  },
  emotionTag: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.full,
    marginRight: theme.spacing.sm,
  },
  emotionTagText: {
    ...theme.typography.caption,
    color: theme.colors.text,
  },
  messageContainer: {
    marginBottom: theme.spacing.md,
  },
  messageUser: {
    alignItems: 'flex-end',
  },
  messageBot: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  bubbleUser: {
    backgroundColor: theme.colors.chatBubbleUser,
  },
  bubbleBot: {
    backgroundColor: theme.colors.chatBubbleBot,
  },
  messageText: {
    ...theme.typography.body,
  },
  textUser: {
    color: theme.colors.chatTextUser,
  },
  textBot: {
    color: theme.colors.chatTextBot,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.base,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  attachmentButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  attachmentIcon: {
    width: 34,
    height: 34,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.md,
  },
  input: {
    flex: 1,
    ...theme.typography.body,
    color: theme.colors.text,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.base,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.lg,
    maxHeight: 100,
  },
  sendButton: {
    width: 34,
    height: 34,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.sm,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendIcon: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.textInverse,
    borderRadius: 4,
  },
});
