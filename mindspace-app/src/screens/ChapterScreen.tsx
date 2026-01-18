import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Card, Button } from '../components';

interface ChapterItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  exp: number;
  locked: boolean;
  type: 'story' | 'practice';
}

export const ChapterScreen: React.FC = () => {
  const chapterItems: ChapterItem[] = [
    {
      id: '1.1',
      title: 'Situation Selection',
      description: 'Realize your inner ability to select a better situation.',
      duration: '5 min',
      exp: 3,
      locked: false,
      type: 'story',
    },
    {
      id: '1.2',
      title: 'Situation Modification',
      description: 'Use your power to change towards a comfortable environment.',
      duration: '3 min',
      exp: 0,
      locked: true,
      type: 'story',
    },
    {
      id: '1.3',
      title: 'ABC model',
      description: 'Train a rational mind',
      duration: '5 min',
      exp: 0,
      locked: true,
      type: 'practice',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Background Header */}
        <View style={styles.headerBackground}>
          <View style={styles.headerOverlay}>
            <TouchableOpacity style={styles.backButton}>
              <View style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.chapterNumber}>Chapter 1</Text>
            <Text style={styles.chapterTitle}>Forest of Situation Selection</Text>
          </View>
        </ImageBackground>

        {/* Chapter Info */}
        <View style={styles.content}>
          <Card style={styles.infoCard} noShadow>
            <Text style={styles.infoText}>
              Learn to identify situations that may trigger negative emotions and learn how to make beneficial actions for positive emotions.
            </Text>
          </Card>

          {/* Chapter Items */}
          <View style={styles.itemsContainer}>
            {chapterItems.map((item, index) => (
              <View key={item.id} style={styles.section}>
                <Text style={styles.sectionLabel}>
                  {item.id} {item.type === 'story' ? 'Story' : 'Practice'}
                </Text>
                <Card style={styles.itemCard}>
                  <View style={styles.itemContent}>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      <Text style={styles.itemDescription}>{item.description}</Text>
                      <View style={styles.itemMeta}>
                        <Text style={styles.itemDuration}>{item.duration}</Text>
                        <View style={styles.itemExp}>
                          <Text style={styles.itemExpText}>EXP. {item.exp}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.itemImage}>
                      <Text style={styles.itemImagePlaceholder}>📖</Text>
                    </View>
                  </View>
                  {item.locked && (
                    <View style={styles.lockOverlay}>
                      <Text style={styles.lockIcon}>🔒</Text>
                    </View>
                  )}
                </Card>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: 288,
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-end',
    padding: theme.spacing.base,
  },
  headerOverlay: {
    padding: theme.spacing.base,
    paddingBottom: theme.spacing.xl,
  },
  backButton: {
    width: 35,
    height: 35,
    marginBottom: theme.spacing.base,
  },
  backIcon: {
    width: 8,
    height: 16,
    backgroundColor: theme.colors.textInverse,
  },
  chapterNumber: {
    ...theme.typography.h1,
    color: theme.colors.textInverse,
    marginBottom: theme.spacing.xs,
  },
  chapterTitle: {
    ...theme.typography.display,
    fontSize: 28,
    color: theme.colors.textInverse,
  },
  content: {
    padding: theme.spacing.base,
  },
  infoCard: {
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.background,
  },
  infoText: {
    ...theme.typography.body,
    color: theme.colors.text,
    lineHeight: 24,
  },
  itemsContainer: {
    gap: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionLabel: {
    ...theme.typography.label,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  itemCard: {
    position: 'relative',
  },
  itemContent: {
    flexDirection: 'row',
  },
  itemInfo: {
    flex: 1,
    marginRight: theme.spacing.base,
  },
  itemTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  itemDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    lineHeight: 20,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.base,
  },
  itemDuration: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  itemExp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemExpText: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  itemImage: {
    width: 83,
    height: 84,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImagePlaceholder: {
    fontSize: 40,
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.card,
  },
  lockIcon: {
    fontSize: 48,
  },
});
