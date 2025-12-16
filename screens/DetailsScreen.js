import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={50} color="#4A90E2" />
      <Text style={styles.title}>Détails</Text>
      <Text style={styles.text}>
        Cet écran affiche des informations détaillées sur le contenu sélectionné.
        Il est conçu pour la lecture et la compréhension.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    marginVertical: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
