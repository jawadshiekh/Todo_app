import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function AddButton({ setModalToggle }) {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.iconBox}>
          <Entypo name="plus" size={24} color="white" onPress={() => setModalToggle(true)} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    backgroundColor: "#FF884B",
    maxWidth: 57,
    padding: 16,
    borderRadius: 1000,
  },
  icon: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
