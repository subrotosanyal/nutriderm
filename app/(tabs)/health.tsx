import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/constants/theme';

export default function HealthScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Health Dashboard</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: colors.card }]}>
          <Ionicons name="fitness" size={24} color={colors.primary} />
          <Text style={[styles.statValue, { color: colors.text }]}>85%</Text>
          <Text style={[styles.statLabel, { color: colors.text }]}>Overall Health</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: colors.card }]}>
          <Ionicons name="water" size={24} color={colors.primary} />
          <Text style={[styles.statValue, { color: colors.text }]}>70%</Text>
          <Text style={[styles.statLabel, { color: colors.text }]}>Hydration</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Active Patches
        </Text>
        <View style={styles.patchesList}>
          <View style={styles.patchItem}>
            <View style={[styles.patchIcon, { backgroundColor: colors.primary }]}>
              <Ionicons name="sunny" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.patchInfo}>
              <Text style={[styles.patchName, { color: colors.text }]}>Vitamin D Patch</Text>
              <Text style={[styles.patchTime, { color: colors.text }]}>Applied 2h ago</Text>
            </View>
            <Text style={[styles.patchStatus, { color: colors.success }]}>Active</Text>
          </View>
          <View style={styles.patchItem}>
            <View style={[styles.patchIcon, { backgroundColor: colors.primary }]}>
              <Ionicons name="flash" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.patchInfo}>
              <Text style={[styles.patchName, { color: colors.text }]}>Iron Boost Patch</Text>
              <Text style={[styles.patchTime, { color: colors.text }]}>Applied 5h ago</Text>
            </View>
            <Text style={[styles.patchStatus, { color: colors.success }]}>Active</Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Nutritional Status
        </Text>
        <View style={styles.nutrientList}>
          <View style={styles.nutrientItem}>
            <View style={styles.nutrientHeader}>
              <Text style={[styles.nutrientName, { color: colors.text }]}>Vitamin D</Text>
              <Text style={[styles.nutrientValue, { color: colors.primary }]}>60%</Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { backgroundColor: colors.primary, width: '60%' }]}
              />
            </View>
            <Text style={[styles.nutrientTip, { color: colors.text }]}>
              Try to get 10 minutes of morning sun! ☀️
            </Text>
          </View>
          <View style={styles.nutrientItem}>
            <View style={styles.nutrientHeader}>
              <Text style={[styles.nutrientName, { color: colors.text }]}>Vitamin B12</Text>
              <Text style={[styles.nutrientValue, { color: colors.primary }]}>80%</Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { backgroundColor: colors.primary, width: '80%' }]}
              />
            </View>
            <Text style={[styles.nutrientTip, { color: colors.text }]}>
              Great levels! Keep it up! 🎉
            </Text>
          </View>
          <View style={styles.nutrientItem}>
            <View style={styles.nutrientHeader}>
              <Text style={[styles.nutrientName, { color: colors.text }]}>Iron</Text>
              <Text style={[styles.nutrientValue, { color: colors.primary }]}>45%</Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { backgroundColor: colors.primary, width: '45%' }]}
              />
            </View>
            <Text style={[styles.nutrientTip, { color: colors.text }]}>
              Time for an Iron Hero patch! 💪
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Weekly Trends
        </Text>
        <View style={styles.trendsList}>
          <View style={styles.trendItem}>
            <Ionicons name="trending-up" size={24} color={colors.success} />
            <View style={styles.trendInfo}>
              <Text style={[styles.trendTitle, { color: colors.text }]}>
                Energy Levels Improving
              </Text>
              <Text style={[styles.trendDesc, { color: colors.text }]}>
                15% increase this week
              </Text>
            </View>
          </View>
          <View style={styles.trendItem}>
            <Ionicons name="trending-down" size={24} color={colors.error} />
            <View style={styles.trendInfo}>
              <Text style={[styles.trendTitle, { color: colors.text }]}>
                Stress Levels
              </Text>
              <Text style={[styles.trendDesc, { color: colors.text }]}>
                Consider our Zen Master patch
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Recommended Supplements
        </Text>
        <View style={styles.recommendationsList}>
          <Pressable style={[styles.recommendationCard, { borderColor: colors.border }]}>
            <Ionicons name="flash" size={24} color={colors.primary} />
            <View style={styles.recommendationInfo}>
              <Text style={[styles.recommendationTitle, { color: colors.text }]}>
                Iron Hero Patch
              </Text>
              <Text style={[styles.recommendationDesc, { color: colors.text }]}>
                Power up like a superhero! 💪
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>
          <Pressable style={[styles.recommendationCard, { borderColor: colors.border }]}>
            <Ionicons name="sunny" size={24} color={colors.primary} />
            <View style={styles.recommendationInfo}>
              <Text style={[styles.recommendationTitle, { color: colors.text }]}>
                Sunshine D3 Patch
              </Text>
              <Text style={[styles.recommendationDesc, { color: colors.text }]}>
                Bring the beach to you! 🏖️
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>
          <Pressable style={[styles.recommendationCard, { borderColor: colors.border }]}>
            <Ionicons name="nutrition" size={24} color={colors.primary} />
            <View style={styles.recommendationInfo}>
              <Text style={[styles.recommendationTitle, { color: colors.text }]}>
                Citrus Burst C Patch
              </Text>
              <Text style={[styles.recommendationDesc, { color: colors.text }]}>
                Fresh orange energy! 🍊
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    opacity: 0.8,
  },
  section: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  patchesList: {
    gap: 16,
  },
  patchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  patchIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  patchInfo: {
    flex: 1,
  },
  patchName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  patchTime: {
    fontSize: 14,
    opacity: 0.8,
  },
  patchStatus: {
    fontSize: 14,
    fontWeight: '600',
  },
  nutrientList: {
    gap: 24,
  },
  nutrientItem: {
    gap: 8,
  },
  nutrientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nutrientName: {
    fontSize: 16,
    fontWeight: '600',
  },
  nutrientValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  nutrientTip: {
    fontSize: 14,
    opacity: 0.8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  trendsList: {
    gap: 16,
  },
  trendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  trendInfo: {
    flex: 1,
  },
  trendTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  trendDesc: {
    fontSize: 14,
    opacity: 0.8,
  },
  recommendationsList: {
    gap: 16,
  },
  recommendationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  recommendationInfo: {
    flex: 1,
    marginLeft: 12,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  recommendationDesc: {
    fontSize: 14,
    opacity: 0.8,
  },
});