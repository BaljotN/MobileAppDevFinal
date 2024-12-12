import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MainLayout from "../layouts/MainLayout";

// Keep navigation as a full prop
const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={[styles.text]}>Welcome To StudyDen</Text>
        <Text style={[styles.text]}>The All in one study application</Text>

        <Button
          style={[styles.text]}
          title="Go to ToDoList"
          onPress={() => navigation.navigate("HomeScreen")}
        />
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
});

export default AboutScreen;
