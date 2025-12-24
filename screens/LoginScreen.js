import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
	const [username, setUsername] = useState("");
	const { login } = useContext(AuthContext);

	const handleLogin = () => {
		if (username.trim()) {
			login(username);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Connexion</Text>
			<TextInput
				style={styles.input}
				placeholder="Nom d'utilisateur"
				value={username}
				onChangeText={setUsername}
			/>
			<Button title="Se connecter" onPress={handleLogin} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 20,
		borderRadius: 5,
	},
});
