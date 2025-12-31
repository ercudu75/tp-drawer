import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ title, back }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#2f80ed",
      }}
    >
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#fff", fontSize: 18, marginRight: 10 }}>⬅</Text>
        </TouchableOpacity>
      )}
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );
}
