import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore";
import AppBar from "../components/AppBar";

export default function TodoListScreen({ navigation }) {
	const { todos, addTodo } = useTodoStore();

	useEffect(() => {
		if (todos.length === 0) {
			addTodo({ id: 1, title: "Faire les courses" });
			addTodo({ id: 2, title: "Sortir le chien" });
			addTodo({ id: 3, title: "Coder une app RN" });
		}
	}, [todos.length, addTodo]);

	return (
		<View style={styles.container}>
			<AppBar title="Mes tâches" />
			<FlatList
				data={todos}
				keyExtractor={(i) => i.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.todoItem}
						onPress={() => navigation.navigate("Détails", item)}
					>
						<Text style={styles.todoText}>{item.title}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	todoItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	todoText: {
		fontSize: 18,
	},
});
