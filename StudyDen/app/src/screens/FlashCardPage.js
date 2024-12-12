import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const FlashCardPage = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>This is the flash card page</Text>
      </View>
    </MainLayout>
  );
};

export default FlashCardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
