import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import MainLayout from "../layouts/MainLayout";

// Keep navigation as a full prop
const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={[styles.text]}>Welcome To StudyDen</Text>
        <Text style={[styles.text]}>The All in one study application</Text>

        <Pressable
          style={[styles.text, styles.goToDoList]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={[styles.text, styles.pressableText]}>
            Go To To Do List
          </Text>
        </Pressable>
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

export default AboutScreen;
