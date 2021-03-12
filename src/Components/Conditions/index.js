import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Conditions = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Conditions}>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Text>7 Km/h</Text>
      </View>

      <View style={styles.Conditions}>
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={23}
          color="#1ed6ff"
        />
        <Text>5:11 Am</Text>
      </View>

      <View style={styles.Conditions}>
        <MaterialCommunityIcons
          name="weather-sunset-down"
          size={23}
          color="#1ed6ff"
        />
        <Text>18:11 Pm</Text>
      </View>

      <View style={styles.Conditions}>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Text>65</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-around",
    borderRadius: 8,
  },
  Conditions: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Conditions;
