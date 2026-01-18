import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Card, Avatar, ProgressBar, Button } from '../components';

const { width } = Dimensions.get('window');

export const HomeScreen: React.FC = () => {
  const emotionTags = ['Depression', 'Anxiety', 'Family', 'Loneliness', 'Relationship'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
          <TouchableOpacity style={styles.storeButton}>
            <View style={styles.storeIcon} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <Card style={styles.profileCard}>
          <View style={styles.profileContent}>
            <Avatar size={60} name="Username" />
            <View style={styles.profileInfo}>
              <View style={styles.profileHeader}>
                <Text style={styles.username}>Username</Text>
                <TouchableOpacity style={styles.editButton}>
                  <View style={styles.editIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.level}>LV.01</Text>
              <View style={styles.expContainer}>
                <Text style={styles.expText}>EXP 0/20</Text>
                <View style={styles.coinContainer}>
                  <Text style={styles.coinText}>100</Text>
                </View>
              </View>
              <ProgressBar progress={0} style={styles.progressBar} />
            </View>
          </View>
        </Card>

        {/* 21-Day Master Plan */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>21-day Master Plan</Text>
            <TouchableOpacity style={styles.phaseButton}>
              <Text style={styles.phaseText}>Phase 1 of 4</Text>
              <View style={styles.chevronIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.planScroll}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <Card key={day} style={styles.dayCard} padding="sm">
                <Text style={styles.dayPhase}>Phase1: Awareness</Text>
                <Text style={styles.dayNumber}>{day === 1 ? 'TODAY' : `DAY ${day}`}</Text>
                <View style={styles.dayFooter}>
                  <Text style={styles.daySessions}>3 sessions</Text>
                  <Text style={styles.dayExp}>EXP 100</Text>
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Wisdom Quote */}
        <Card style={styles.quoteCard}>
          <View style={styles.quoteHeader}>
            <Text style={styles.quoteLabel}>Wisdom quote</Text>
          </View>
          <View style={styles.quoteContent}>
            <View style={styles.quoteIcon} />
            <Text style={styles.quoteText}>
              "You can't stop the waves, but you can learn how to surf." John Kabat-Zinn
            </Text>
          </View>
        </Card>

        {/* Assessment */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Assessment</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>All →</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.emotionScroll}
          >
            {emotionTags.map((tag) => (
              <View key={tag} style={styles.emotionTag}>
                <Text style={styles.emotionTagText}>{tag}</Text>
              </View>
            ))}
          </ScrollView>
          <Card style={styles.assessmentCard}>
            <Text style={styles.assessmentTitle}>PHQ-9</Text>
            <Text style={styles.assessmentDescription}>
              Self-assess your emotional and mental well-being.
            </Text>
          </Card>
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
  content: {
    paddingBottom: theme.spacing['2xl'],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.base,
    paddingTop: theme.spacing.base,
    paddingBottom: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  storeButton: {
    width: 35,
    height: 35,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeIcon: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.text,
    borderRadius: 4,
  },
  profileCard: {
    marginHorizontal: theme.spacing.base,
    marginBottom: theme.spacing.lg,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: theme.spacing.base,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  username: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginRight: theme.spacing.sm,
  },
  editButton: {
    width: 20,
    height: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.textSecondary,
    borderRadius: 4,
  },
  level: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  expText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginRight: theme.spacing.base,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
  },
  progressBar: {
    marginTop: theme.spacing.xs,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.base,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
  },
  phaseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.base,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.md,
  },
  phaseText: {
    ...theme.typography.bodySmall,
    color: theme.colors.text,
    marginRight: theme.spacing.xs,
  },
  chevronIcon: {
    width: 13,
    height: 13,
    backgroundColor: theme.colors.textSecondary,
  },
  planScroll: {
    paddingLeft: theme.spacing.base,
  },
  dayCard: {
    width: 134,
    marginRight: theme.spacing.sm,
    minHeight: 134,
  },
  dayPhase: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  dayNumber: {
    ...theme.typography.h1,
    fontSize: 48,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  dayFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daySessions: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  dayExp: {
    ...theme.typography.caption,
    color: theme.colors.expColor,
    fontWeight: '600',
  },
  quoteCard: {
    marginHorizontal: theme.spacing.base,
    marginBottom: theme.spacing.lg,
    minHeight: 140,
  },
  quoteHeader: {
    marginBottom: theme.spacing.sm,
  },
  quoteLabel: {
    ...theme.typography.label,
    color: theme.colors.textSecondary,
  },
  quoteContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  quoteIcon: {
    width: 58,
    height: 50,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.base,
  },
  quoteText: {
    ...theme.typography.quote,
    flex: 1,
    color: theme.colors.text,
  },
  seeAllText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
  emotionScroll: {
    paddingLeft: theme.spacing.base,
    marginBottom: theme.spacing.md,
  },
  emotionTag: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.full,
    marginRight: theme.spacing.sm,
  },
  emotionTagText: {
    ...theme.typography.caption,
    color: theme.colors.text,
  },
  assessmentCard: {
    marginHorizontal: theme.spacing.base,
    minHeight: 134,
  },
  assessmentTitle: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  assessmentDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
});
