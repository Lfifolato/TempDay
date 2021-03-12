import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const nav = useNavigation();

  return (
    <TouchableOpacity onPress={() => nav.openDrawer()} style={styles.Container}>
      <Feather name="menu" size={36} color={"#373737"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left: 10,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});

export default Menu;