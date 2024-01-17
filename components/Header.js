import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF884B",
    padding: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
