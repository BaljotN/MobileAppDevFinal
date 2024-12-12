import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NavigationFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerNav}>
        <Pressable>
          <Entypo name="home" size={30} color="black" />
        </Pressable>
        <Pressable>
          <Entypo name="calendar" size={24} color="black" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="library-books" size={24} color="black" />
        </Pressable>
        <Pressable>
          <Entypo name="stopwatch" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationFooter;

const styles = StyleSheet.create({
  footerContainer: {
    position: "relative",
    bottom: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
  },
  footerNav: {
    backgroundColor: "#DBDBDB",
    width: 300,
    height: 60,
    flexDirection: "row",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
