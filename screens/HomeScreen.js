import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={60} color="#fff" />
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Page d'accueil de l'application</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>Voir les détails</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#e6e6e6',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
