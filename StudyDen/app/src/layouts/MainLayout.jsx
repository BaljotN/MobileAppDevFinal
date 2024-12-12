import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationFooter from "../components/NavigationFooter";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <NavigationFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

export default MainLayout;
