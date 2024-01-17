import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import AddButton from "./components/AddButton";
import Item from "./components/Item";
import ModalBox from "./components/ModalBox";

export default function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [todo, setTodo] = useState([
    {
      key: 1,
      title: "lorem ipsum 1",
      description: "Lorem ipsum dolor sit amet consectetur elit, sit amet.",
    },
    {
      key: 2,
      title: "lorem ipsum 2",
      description: "Lorem ipsum dolor sit  adipisicing elit. Fuga, ad?",
    },
    {
      key: 3,
      title: "lorem ipsum 3",
      description: "Lorem ipsum dolor sit amet consectetur, sit amet consectetur. Fuga, ad?",
    },
  ]);

  const deleteTodo = (key) => {
    setTodo(todo.filter((i) => i.key !== key));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FF884B", flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Header />
          <ScrollView>
            <View>
              <FlatList data={todo} keyExtractor={(item) => item.key} renderItem={({ item }) => <Item item={item} deleteTodo={deleteTodo} />} />
            </View>
          </ScrollView>
        </View>

        <View style={{ position: "absolute", right: 10, bottom: 10 }}>
          <AddButton setModalToggle={setModalToggle} />
        </View>

        <View>
          <ModalBox modalToggle={modalToggle} setModalToggle={setModalToggle} todo={todo} setTodo={setTodo} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
