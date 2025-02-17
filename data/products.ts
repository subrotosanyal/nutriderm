import {
  vitaminD,
  vitaminC,
  nutrientTestKit,
  energyBoost,
  zenMasterB12,
  omega3,
  ironHero,
  sleepyMelatonin,
} from '@/assets/images/patches/images';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  category: 'patches' | 'testing';
  benefits: string[];
  subscriptionPrice?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sunshine D3 Patch',
    description: 'Get your daily dose of sunshine, without the sunburn! 🌞',
    price: 29.99,
    subscriptionPrice: 24.99,
    image: vitaminD,
    category: 'patches',
    benefits: ['24-hour release', 'Beach-free tan lines', 'Waterproof'],
  },
  {
    id: '2',
    name: 'Iron Hero Patch',
    description: 'Power up like a superhero with our iron-boosting patch! 💪',
    price: 24.99,
    subscriptionPrice: 19.99,
    image: ironHero,
    category: 'patches',
    benefits: ['Enhanced absorption', 'Superhero strength', 'Long-lasting'],
  },
  {
    id: '3',
    name: 'Citrus Burst C Patch',
    description: 'Orange you glad it\'s not another pill? 🍊',
    price: 19.99,
    subscriptionPrice: 14.99,
    image: vitaminC,
    category: 'patches',
    benefits: ['Fresh citrus scent', 'Immune boost', 'All-day energy'],
  },
  {
    id: '4',
    name: 'Zen Master B12 Patch',
    description: 'Find your inner peace with B12 boost 🧘‍♀️',
    price: 22.99,
    subscriptionPrice: 17.99,
    image: zenMasterB12,
    category: 'patches',
    benefits: ['Mental clarity', 'Energy boost', 'Stress relief'],
  },
  {
    id: '5',
    name: 'Berry Omega-3 Patch',
    description: 'Fish-free omega-3s for brain power! 🫐',
    price: 27.99,
    subscriptionPrice: 22.99,
    image: omega3,
    category: 'patches',
    benefits: ['Brain boost', 'Heart health', 'Berry fresh'],
  },
  {
    id: '6',
    name: 'Sleepy Melatonin Patch',
    description: 'Count sheep in style with our dreamy patch 😴',
    price: 18.99,
    subscriptionPrice: 13.99,
    image: sleepyMelatonin,
    category: 'patches',
    benefits: ['Better sleep', 'Sweet dreams', 'Wake refreshed'],
  },
  {
    id: '7',
    name: 'Nutrient Test Kit Pro',
    description: 'Know your body inside out! 🔬',
    price: 99.99,
    subscriptionPrice: 89.99,
    image: nutrientTestKit,
    category: 'testing',
    benefits: ['Complete analysis', 'App integration', 'Professional grade'],
  },
  {
    id: '8',
    name: 'Green Energy Patch',
    description: 'Power up with nature\'s superfoods! 🌿',
    price: 25.99,
    subscriptionPrice: 20.99,
    image: energyBoost,
    category: 'patches',
    benefits: ['Natural energy', 'Superfood blend', 'All-day vitality'],
  },
];

export interface Subscription {
  id: string;
  productId: string;
  startDate: string;
  nextDelivery: string;
  status: 'active' | 'paused' | 'cancelled';
  interval: 'monthly' | 'quarterly';
}

export const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    productId: '1',
    startDate: '2024-01-15',
    nextDelivery: '2024-02-15',
    status: 'active',
    interval: 'monthly',
  },
  {
    id: '2',
    productId: '2',
    startDate: '2024-01-01',
    nextDelivery: '2024-04-01',
    status: 'active',
    interval: 'quarterly',
  },
];