import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import MainLayout from "../layouts/MainLayout";

// Keep navigation as a full prop
const HomePage = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={[styles.text]}>Welcome To StudyDen Application</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "400",
    fontSize: 16,
  },
  goToDoList: {
    backgroundColor: "#4552e4",
    width: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  pressableText: {
    color: "white",
  },
});

export default HomePage;
