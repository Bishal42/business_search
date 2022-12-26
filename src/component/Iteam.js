import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

const Iteam = ({ name, imageURL, active, Click }) => {
  return (
    <TouchableOpacity onPress={Click} style={{ height: 100 }}>
      <View
        style={[
          styles.container,
          styles.elevation,
          active
            ? { backgroundColor: "#E8B740" }
            : { backgroundColor: "#ffff" },
        ]}
      >
        <View style={styles.imgContainer}>
          <Image source={imageURL} style={styles.images} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 70,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,

    marginRight: 20,
  },
  elevation,
  text: {
    color: "#000000",
    fontWeight: "bold",
  },

  images: {
    width: 45,
    height: 45,
  },
  imgContainer: {
    width: 55,
    height: 55,
    backgroundColor: "#ffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Iteam;
