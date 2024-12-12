import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationFooter from "../components/NavigationFooter";

const Footer = () => {
  return (
    <View>
      <Text>Study Den</Text>
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <NavigationFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
