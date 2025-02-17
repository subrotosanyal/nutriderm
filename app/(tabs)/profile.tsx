import { View, Text, ScrollView, StyleSheet, Pressable, Image, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, useThemeStore } from '@/constants/theme';
import { mockSubscriptions, products } from '@/data/products';

export default function ProfileScreen() {
  const { colors, isDark } = useTheme();
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const activeSubscriptions = mockSubscriptions.filter(
    (sub) => sub.status === 'active'
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.content, isDesktop && styles.desktopContent]}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
          <View style={styles.headerButtons}>
            <Pressable
              style={styles.iconButton}
              onPress={toggleTheme}>
              <Ionicons
                name={isDark ? 'sunny-outline' : 'moon-outline'}
                size={24}
                color={colors.text}
              />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color={colors.text} />
            </Pressable>
          </View>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
            }}
            style={styles.profileImage}
          />
          <Text style={[styles.name, { color: colors.text }]}>Sarah Johnson</Text>
          <Text style={[styles.email, { color: colors.text }]}>
            sarah.j@example.com
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>12</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Active Patches
            </Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>3</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Test Results
            </Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>5</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Consultations
            </Text>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Active Subscriptions
          </Text>
          <View style={styles.subscriptionsList}>
            {activeSubscriptions.map((subscription) => {
              const product = products.find((p) => p.id === subscription.productId);
              if (!product) return null;

              return (
                <View
                  key={subscription.id}
                  style={[styles.subscriptionCard, { borderColor: colors.border }]}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.subscriptionImage}
                  />
                  <View style={styles.subscriptionInfo}>
                    <Text style={[styles.subscriptionName, { color: colors.text }]}>
                      {product.name}
                    </Text>
                    <Text
                      style={[styles.subscriptionDetails, { color: colors.text }]}>
                      Next delivery: {subscription.nextDelivery}
                    </Text>
                    <Text
                      style={[
                        styles.subscriptionInterval,
                        { color: colors.primary },
                      ]}>
                      {subscription.interval} delivery
                    </Text>
                  </View>
                  <Pressable
                    style={[
                      styles.manageButton,
                      { backgroundColor: colors.primary },
                    ]}>
                    <Text style={styles.manageButtonText}>Manage</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.menuSection}>
          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons name="person-outline" size={24} color={colors.primary} />
            <Text style={[styles.menuItemText, { color: colors.text }]}>
              Personal Information
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>

          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons
              name="document-text-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={[styles.menuItemText, { color: colors.text }]}>
              Test Results
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>

          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons name="calendar-outline" size={24} color={colors.primary} />
            <Text style={[styles.menuItemText, { color: colors.text }]}>
              Appointments
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>

          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={[styles.menuItemText, { color: colors.text }]}>
              Notifications
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>

          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons name="shield-outline" size={24} color={colors.primary} />
            <Text style={[styles.menuItemText, { color: colors.text }]}>
              Privacy & Security
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.text} />
          </Pressable>

          <Pressable style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <Ionicons name="log-out-outline" size={24} color={colors.error} />
            <Text style={[styles.menuItemText, { color: colors.error }]}>
              Log Out
            </Text>
            <Ionicons name="chevron-forward" size={24} color={colors.error} />
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
  content: {
    flex: 1,
  },
  desktopContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    opacity: 0.8,
  },
  statsRow: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statItem: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
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
  subscriptionsList: {
    gap: 16,
  },
  subscriptionCard: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    gap: 12,
  },
  subscriptionImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  subscriptionInfo: {
    flex: 1,
  },
  subscriptionName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subscriptionDetails: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  subscriptionInterval: {
    fontSize: 14,
    fontWeight: '600',
  },
  manageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  manageButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  menuSection: {
    padding: 20,
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
});