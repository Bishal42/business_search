import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Category from "./src/component/Category";
import Header from "./src/component/Header";
import Iteam from "./src/component/Iteam";
import Search from "./src/component/Search";

export default function App() {
  const [term, setTerm] = useState("");

  const catogryItem = [
    {
      name: "Burger",
      imageURL: require("./assets/images/burger.png"),
    },
    {
      name: "Pasta",
      imageURL: require("./assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageURL: require("./assets/images/pizza.png"),
    },
    {
      name: "Smoothi",
      imageURL: require("./assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageURL: require("./assets/images/steak.png"),
    },
    {
      name: "Cake",
      imageURL: require("./assets/images/cake.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search endEditing={setTerm} />
      <Category catogary={catogryItem} setTerm={setTerm} term={term} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
