import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

const Search = ({ endEditing }) => {
  const [input, setInput] = useState("");
  const handleediting = () => {
    if (!input) {
    } else {
      endEditing(input);
      setInput("");
    }
  };
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />

      <TextInput
        placeholder="Search food "
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleediting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 6,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
  },
  elevation,
});

export default Search;
