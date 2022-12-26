import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Iteam from "./Iteam";

const Category = ({ catogary, setTerm, term }) => {
  return (
    <SafeAreaView style={{ height: 140 }}>
      <FlatList
        data={catogary}
        renderItem={({ item }) => {
          return (
            <Iteam
              name={item.name}
              imageURL={item.imageURL}
              active={item.name === term}
              Click={() => {
                setTerm(item.name);
              }}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Category;
