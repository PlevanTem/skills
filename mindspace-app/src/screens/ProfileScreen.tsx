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
import { Card, Avatar, Badge } from '../components';

export const ProfileScreen: React.FC = () => {
  const stats = [
    { label: 'Longest streak', value: '02', icon: '🔥' },
    { label: 'EXP.', value: '30', icon: '⚡' },
    { label: 'Passed stories', value: '5', icon: '📚' },
    { label: 'Coin', value: '18', icon: '🪙' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Emotion Explorer',
      description: 'Complete a story in Chapter 1',
      progress: 1,
      total: 1,
      icon: '🏆',
    },
    {
      id: 2,
      title: 'Mindfulness Master',
      description: 'Meditate in 5 continuous days',
      progress: 0,
      total: 10,
      icon: '🧘',
    },
    {
      id: 3,
      title: 'Valued Voyager',
      description: 'Complete cue detection',
      progress: 0,
      total: 1,
      icon: '🎯',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Profile Info Card */}
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Avatar size={50} name="Username" />
            <View style={styles.profileInfo}>
              <Text style={styles.username}>Username</Text>
              <Badge label="Emotion newbie" variant="default" />
            </View>
          </View>
        </Card>

        {/* Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statistics</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Card key={index} style={styles.statCard} padding="md">
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>{stat.icon}</Text>
                </View>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
              </Card>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.tabs}>
              <TouchableOpacity style={styles.tabActive}>
                <Text style={styles.tabTextActive}>Collection</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Title</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.achievementsList}>
            {achievements.map((achievement) => {
              const progressPercent = (achievement.progress / achievement.total) * 100;
              return (
                <Card key={achievement.id} style={styles.achievementCard}>
                  <View style={styles.achievementContent}>
                    <View style={styles.achievementIcon}>
                      <Text style={styles.achievementIconText}>{achievement.icon}</Text>
                    </View>
                    <View style={styles.achievementInfo}>
                      <Text style={styles.achievementTitle}>{achievement.title}</Text>
                      <Text style={styles.achievementDescription}>
                        {achievement.description}
                      </Text>
                      <View style={styles.achievementProgress}>
                        <View style={styles.progressBarContainer}>
                          <View
                            style={[
                              styles.progressBarFill,
                              { width: `${progressPercent}%` },
                            ]}
                          />
                        </View>
                        <Text style={styles.progressText}>
                          {achievement.progress}/{achievement.total}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              );
            })}
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
  content: {
    paddingBottom: theme.spacing['2xl'],
  },
  header: {
    paddingHorizontal: theme.spacing.base,
    paddingTop: theme.spacing.base,
    paddingBottom: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  profileCard: {
    marginHorizontal: theme.spacing.base,
    marginBottom: theme.spacing.lg,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: theme.spacing.base,
  },
  username: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: theme.spacing.base,
    gap: theme.spacing.sm,
  },
  statCard: {
    width: '47%',
    minHeight: 70,
  },
  statIcon: {
    marginBottom: theme.spacing.xs,
  },
  statIconText: {
    fontSize: 20,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  statValue: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  tabs: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  tab: {
    paddingBottom: theme.spacing.xs,
  },
  tabActive: {
    paddingBottom: theme.spacing.xs,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  tabText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  tabTextActive: {
    ...theme.typography.bodySmall,
    color: theme.colors.text,
    fontWeight: '600',
  },
  achievementsList: {
    paddingHorizontal: theme.spacing.base,
  },
  achievementCard: {
    marginBottom: theme.spacing.md,
  },
  achievementContent: {
    flexDirection: 'row',
  },
  achievementIcon: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.base,
  },
  achievementIconText: {
    fontSize: 40,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    ...theme.typography.h4,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  achievementDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  achievementProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  progressBarContainer: {
    flex: 1,
    height: 13,
    backgroundColor: theme.colors.progressBar,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
  },
  progressText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
});
