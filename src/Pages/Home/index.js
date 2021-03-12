import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Menu from "../../Components/Menu/index";
import Header from "../../Components/Header/index";
import Conditions from "../../Components/Conditions/index";
import Forecast from "../../Components/Forecast/index";

const myList = [
  {
    date: "11/03",
    weekday: "Qui",
    max: 26,
    min: 17,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "12/03",
    weekday: "Sex",
    max: 27,
    min: 17,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "13/03",
    weekday: "Sáb",
    max: 26,
    min: 17,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "14/03",
    weekday: "Dom",
    max: 26,
    min: 18,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "15/03",
    weekday: "Seg",
    max: 27,
    min: 16,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
  {
    date: "16/03",
    weekday: "Ter",
    max: 27,
    min: 17,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
  {
    date: "17/03",
    weekday: "Qua",
    max: 27,
    min: 18,
    description: "Tempo nublado",
    condition: "cloud",
  },
  {
    date: "18/03",
    weekday: "Qui",
    max: 27,
    min: 19,
    description: "Tempo nublado",
    condition: "cloud",
  },
  {
    date: "19/03",
    weekday: "Sex",
    max: 26,
    min: 19,
    description: "Tempestades isoladas",
    condition: "storm",
  },
  {
    date: "20/03",
    weekday: "Sáb",
    max: 26,
    min: 19,
    description: "Tempestades",
    condition: "storm",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.list}
        data={myList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "7%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Home;
