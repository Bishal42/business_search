import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Grab your</Text>
      <Text style={styles.header}>Delicous meal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 15,
  },
  Text: {
    fontSize: 25,
  },
  header: {
    fontSize: 40,
  },
});

export default Header;
