import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <LinearGradient style={styles.Header} colors={["#4ed6ff", "#97c1ff"]}>
      <Text style={styles.data}>11/02/2021</Text>

      <Text style={styles.city}>São Paulo</Text>

      <Ionicons name="cloud" color="#fff" size={150} />

      <Text style={styles.temp}>30°</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  data: {
    color: "#fff",
    fontSize: 17,
    paddingBottom: 10,
  },
  city: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  temp: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
  },
});

export default Header;
