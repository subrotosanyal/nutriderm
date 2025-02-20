import { View, Text, ScrollView, Image, StyleSheet, Pressable, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '@/components/Logo';
import { useTheme } from '@/constants/theme';
import { products } from '@/data/products';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Logo size={70} />
        <View style={styles.headerRight}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color={colors.text} />
          </Pressable>
        </View>
      </View>

      <Text style={[styles.welcome, { color: colors.text }]}>
        Welcome to Nutriderm
      </Text>

      <View style={styles.featuredContainer}>
        <Image
          source={require('@/assets/images/splash-image.png') }
          style={styles.featuredImage}
        />
        <View style={[styles.featuredContent, { backgroundColor: colors.card }]}>
          <Text style={[styles.featuredTitle, { color: colors.text }]}>
            Transform Your Health
          </Text>
          <Text style={[styles.featuredSubtitle, { color: colors.text }]}>
            Discover our innovative patches for optimal nutrition
          </Text>
          {Platform.OS === 'web' ? (
            <Link href="/shop" style={[styles.button, { backgroundColor: colors.primary }]}>
              <Text style={styles.buttonText}>Shop Now</Text>
            </Link>
          ) : (
            <Link href="/shop" asChild>
              <Pressable style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={styles.buttonText}>Shop Now</Text>
              </Pressable>
            </Link>
          )}
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Popular Products
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
        {products.map((product) => (
          <Pressable
            key={product.id}
            style={[styles.productCard, { backgroundColor: colors.card }]}>
            <Image source={{ uri: product.image.uri }} style={styles.productImage} />
            <Text style={[styles.productName, { color: colors.text }]}>
              {product.name}
            </Text>
            <Text style={[styles.productPrice, { color: colors.primary }]}>
              €{product.price}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featuredContainer: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredSubtitle: {
    fontSize: 16,
    marginBottom: 16,
    opacity: 0.8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  productsScroll: {
    paddingLeft: 20,
  },
  productCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 160,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    padding: 12,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});