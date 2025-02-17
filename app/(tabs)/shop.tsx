import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/constants/theme';
import { products, Product } from '@/data/products';
import { useState } from 'react';

function ProductCard({ product, onSubscribe }: { product: Product; onSubscribe: () => void }) {
  const { colors } = useTheme();
  const [purchaseType, setPurchaseType] = useState<'oneTime' | 'subscription'>('oneTime');
  console.log('Product Image URI:', product.image.uri);
  return (
    <View style={[styles.productCard, { backgroundColor: colors.card }]}>
      <Image source={{ uri: product.image.uri }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: colors.text }]}>
          {product.name}
        </Text>
        <Text style={[styles.productDescription, { color: colors.text }]}>
          {product.description}
        </Text>
        
        <View style={styles.purchaseTypeContainer}>
          <Pressable
            style={[
              styles.purchaseTypeButton,
              { 
                backgroundColor: purchaseType === 'oneTime' ? colors.primary : colors.card,
                borderColor: colors.primary,
              },
            ]}
            onPress={() => setPurchaseType('oneTime')}>
            <Text
              style={[
                styles.purchaseTypeText,
                { color: purchaseType === 'oneTime' ? '#FFFFFF' : colors.primary },
              ]}>
              One-time €{product.price}
            </Text>
          </Pressable>
          {product.subscriptionPrice && (
            <Pressable
              style={[
                styles.purchaseTypeButton,
                {
                  backgroundColor: purchaseType === 'subscription' ? colors.primary : colors.card,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => setPurchaseType('subscription')}>
              <Text
                style={[
                  styles.purchaseTypeText,
                  { color: purchaseType === 'subscription' ? '#FFFFFF' : colors.primary },
                ]}>
                Subscribe €{product.subscriptionPrice}/mo
              </Text>
            </Pressable>
          )}
        </View>

        <Pressable
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={() => {
            if (purchaseType === 'subscription') {
              onSubscribe();
            }
          }}>
          <Text style={styles.addButtonText}>
            {purchaseType === 'subscription' ? 'Subscribe Now' : 'Add to Cart'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function ShopScreen() {
  const { colors } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'patches' | 'testing'>('all');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  const handleSubscribe = () => {
    // TODO: Implement subscription flow
    console.log('Subscribe clicked');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Shop</Text>
        <Pressable style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color={colors.text} />
        </Pressable>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={[
              styles.categoryChip,
              { backgroundColor: selectedCategory === 'all' ? colors.primary : colors.card },
            ]}
            onPress={() => setSelectedCategory('all')}>
            <Text
              style={[
                styles.categoryText,
                { color: selectedCategory === 'all' ? '#FFFFFF' : colors.text },
              ]}>
              All Products
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.categoryChip,
              { backgroundColor: selectedCategory === 'patches' ? colors.primary : colors.card },
            ]}
            onPress={() => setSelectedCategory('patches')}>
            <Text
              style={[
                styles.categoryText,
                { color: selectedCategory === 'patches' ? '#FFFFFF' : colors.text },
              ]}>
              Patches
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.categoryChip,
              { backgroundColor: selectedCategory === 'testing' ? colors.primary : colors.card },
            ]}
            onPress={() => setSelectedCategory('testing')}>
            <Text
              style={[
                styles.categoryText,
                { color: selectedCategory === 'testing' ? '#FFFFFF' : colors.text },
              ]}>
              Test Kits
            </Text>
          </Pressable>
        </ScrollView>
      </View>

      <View style={[styles.productsGrid, { maxWidth: 1200, alignSelf: 'center' }]}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSubscribe={handleSubscribe}
          />
        ))}
      </View>
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
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 8,
  },
  categories: {
    paddingHorizontal: 20,
    marginBottom: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontWeight: '600',
  },
  productsGrid: {
    padding: 20,
    width: '100%',
  },
  productCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  purchaseTypeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  purchaseTypeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  purchaseTypeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  addButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});