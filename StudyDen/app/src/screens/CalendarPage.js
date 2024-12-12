import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const CalendarPage = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>This is the calendar page</Text>
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
    textAlign: "center", // Center the text horizontally
  },
});

export default CalendarPage;
