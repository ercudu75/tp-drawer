import { View, Text, Button, StyleSheet } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreen({ route, navigation }) {
	const { id, title } = route.params;
	const removeTodo = useTodoStore((state) => state.removeTodo);

	const handleDelete = () => {
		removeTodo(id);
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Button
				title="Supprimer cette tâche"
				color="red"
				onPress={handleDelete}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});
