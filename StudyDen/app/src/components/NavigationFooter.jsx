import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NavigationFooter = () => {
  return (
    <View style={styles.bgIcon}>
      <Text>NavigationFooter</Text>
    </View>
  );
};

export default NavigationFooter;

const styles = StyleSheet.create({
  bgIcon: {
    backgroundColor: "#DBDBDB",
  },
});
