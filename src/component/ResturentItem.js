import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { elevation } from "../common/styles";

const ResturentItem = (resturent) => {
  return (
    <View style={[styles.card, styles.elevation]}>
      <Image
        source={{ uri: resturent.resturent.image_url }}
        style={styles.image}
      />
      <View>
        <Text style={styles.nametext}>{resturent.resturent.name}</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.textrating}>{resturent.resturent.rating}</Text>
          <Text>{resturent.resturent.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: "#F1F1E1",
    marginVertical: 10,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  elevation,
  image: {
    height: 75,
    width: 75,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  textcontainer: {
    flexDirection: "row",
  },
  nametext: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
  },
  textrating: {
    marginHorizontal: 5,
  },
});

export default ResturentItem;
