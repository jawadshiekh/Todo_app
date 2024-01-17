import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Item({ item, deleteTodo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="delete" size={24} color="#FF884B" style={{ marginHorizontal: 10 }} onPress={() => deleteTodo(item.key)} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#FF884B",
    borderStyle: "dashed",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF884B",
  },
  description: {},
});
