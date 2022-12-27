import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
//import { elevation } from "../common/styles";
import UseResturent from "../hooks/useResturent";
import ResturentItem from "./ResturentItem";

const Resturent = (term) => {
  const [{ data, loading, error }, searchResturent] = UseResturent();
  let resName;
  useEffect(() => {
    searchResturent(term);
  }, [term]);
  if (loading) return <ActivityIndicator size="large" />;

  if (error)
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );

  return (
    <View style={[styles.container, styles.elevation]}>
      <Text style={styles.header}> Top Resturent</Text>

      <FlatList
        data={data}
        keyExtractor={(resturent) => {
          resturent.id;
        }}
        renderItem={({ item }) => {
          return <ResturentItem resturent={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },

  header: {
    fontWeight: "bold",
  },
  card: {},
});

export default Resturent;
