import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoListScreen from "../screens/TodoListScreen.zustand";
import TodoDetailsScreen from "../screens/TodoDetailsScreen.zustand";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Button } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function TodoStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Liste"
				component={TodoListScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Détails"
				component={TodoDetailsScreen}
			/>
		</Stack.Navigator>
	);
}

export default function AppDrawer() {
	const { logout } = useContext(AuthContext);

	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Todos"
				component={TodoStack}
				options={{
					headerRight: () => (
						<Button title="Déconnexion" onPress={logout} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
