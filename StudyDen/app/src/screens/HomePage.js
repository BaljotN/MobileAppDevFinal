import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MainLayout from "../layouts/MainLayout";

// Keep navigation as a full prop
const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>Welcome To StudyDen</Text>
        <Text>The All in one study application</Text>
        
        <Button
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
});

export default AboutScreen;
