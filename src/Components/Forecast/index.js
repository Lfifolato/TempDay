import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Conditions } from "../../utils/Conditions";

const Forecast = ({ data }) => {
  let icon = Conditions(data.condition);

  return (
    <View style={styles.Container}>
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons name={icon.name} color={icon.color} size={25} />
      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.max}°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  date: {
    fontSize: 14,
  },
  temp: {
    alignItems: "center",
  },
});

export default Forecast;
