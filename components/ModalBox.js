import { Text, Modal, View, Button, TextInput, Alert, Keyboard } from "react-native";
import { useState } from "react";

export default function ModalBox({ modalToggle, setModalToggle, todo, setTodo }) {
  const [fromData, setFromData] = useState({
    title: null,
    description: null,
  });

  return (
    <Modal animationType="slide" transparent={true} visible={modalToggle} onRequestClose={() => {}}>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderStyle: "dashed",
          paddingVertical: 40,
          padding: 10,
          marginTop: 250,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Create Todo:</Text>
        <TextInput
          placeholder="e.g. Shopping"
          value={fromData.title}
          onChangeText={(text) => setFromData({ ...fromData, title: text })}
          style={{ borderBottomColor: "gray", borderBottomWidth: 1, padding: 10, marginBottom: 10 }}
        />

        <TextInput
          placeholder="Description..."
          value={fromData.description}
          onChangeText={(text) => setFromData({ ...fromData, description: text })}
          multiline
          style={{ borderBottomColor: "gray", borderBottomWidth: 1, padding: 10, marginBottom: 10 }}
        />

        <Button
          title="Add"
          color="#FF884B"
          onPress={() => {
            Keyboard.dismiss();
            if (fromData.title.length < 3) {
              Alert.alert("Oops", "Minimum 3 chars in title", [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
              return;
            }

            setTodo([...todo, { title: fromData.title, description: fromData.description, key: new Date() }]);
            setFromData({ title: null, description: null });
            setModalToggle(false);
          }}
        />
      </View>
    </Modal>
  );
}
