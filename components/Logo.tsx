import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/constants/theme';

export function Logo({ size = 40 }: { size?: number }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/*<Ionicons name="leaf" size={size * 0.6} color={colors.primary} />*/}
      <Image
        source={require('@/assets/images/Nutriderm_Logo.png') } style={{
        width: size * 1,
        height: size * 1,
        resizeMode: 'cover',
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    
  },
});