import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Category from "./src/component/Category";
import Header from "./src/component/Header";
import Iteam from "./src/component/Iteam";
import Resturent from "./src/component/Resturent";
import Search from "./src/component/Search";

export default function App() {
  const [term, setTerm] = useState("Pizza");

  const catogryItem = [
    {
      name: "burger",
      imageURL: require("./assets/images/burger.png"),
    },
    {
      name: "pasta",
      imageURL: require("./assets/images/pasta.png"),
    },
    {
      name: "pizza",
      imageURL: require("./assets/images/pizza.png"),
    },
    {
      name: "smoothi",
      imageURL: require("./assets/images/smoothies.png"),
    },
    {
      name: "steak",
      imageURL: require("./assets/images/steak.png"),
    },
    {
      name: "cake",
      imageURL: require("./assets/images/cake.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search endEditing={setTerm} />
      <Category catogary={catogryItem} setTerm={setTerm} term={term} />
      <Resturent term={term} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
