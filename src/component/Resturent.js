import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { elevation } from "../common/styles";
import UseResturent from "../hooks/useResturent";

const Resturent = () => {
  const [{ data, loading, error }, searchResturent] = UseResturent();

  return (
    <View style={[styles.container, styles.elevation]}>
      <Text style={styles.header}> Top Resturent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  elevation,
  header: {
    fontWeight: "bold",
  },
});

export default Resturent;
