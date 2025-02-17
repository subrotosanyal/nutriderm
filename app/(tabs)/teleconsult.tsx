import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/constants/theme';
import { doctors } from '@/data/doctors';

export default function TeleconsultScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Teleconsult</Text>
      </View>

      <View style={[styles.searchBar, { backgroundColor: colors.card }]}>
        <Ionicons name="search" size={20} color={colors.text} />
        <Text style={[styles.searchPlaceholder, { color: colors.text }]}>
          Search for doctors...
        </Text>
      </View>

      <View style={styles.doctorsList}>
        {doctors.map((doctor) => (
          <Pressable
            key={doctor.id}
            style={[styles.doctorCard, { backgroundColor: colors.card }]}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={[styles.doctorName, { color: colors.text }]}>
                {doctor.name}
              </Text>
              <Text style={[styles.doctorSpecialty, { color: colors.text }]}>
                {doctor.specialty}
              </Text>
              <Text style={[styles.doctorExperience, { color: colors.text }]}>
                {doctor.experience} experience
              </Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={[styles.rating, { color: colors.text }]}>
                  {doctor.rating}
                </Text>
              </View>
              <Pressable
                style={[
                  styles.consultButton,
                  {
                    backgroundColor: doctor.available ? colors.primary : colors.card,
                    borderColor: colors.primary,
                    borderWidth: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.consultButtonText,
                    { color: doctor.available ? '#FFFFFF' : colors.primary },
                  ]}>
                  {doctor.available ? 'Book Consultation' : 'Not Available'}
                </Text>
              </Pressable>
            </View>
          </Pressable>
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    borderRadius: 12,
  },
  searchPlaceholder: {
    marginLeft: 8,
    opacity: 0.6,
  },
  doctorsList: {
    padding: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
  },
  doctorInfo: {
    flex: 1,
    padding: 16,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  doctorExperience: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    marginLeft: 4,
    fontWeight: '600',
  },
  consultButton: {
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  consultButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});