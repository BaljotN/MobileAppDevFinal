import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const TimerPage = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>This is a timer page</Text>
      </View>
    </MainLayout>
  );
};

export default TimerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
