import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const NavigationFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerNav}>
        <Pressable onPress={() => navigation.navigate("AboutScreen")}>
          <Entypo name="home" size={30} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <FontAwesome5 name="tasks" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("CalendarScreen")}>
          <Entypo name="calendar" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("FlashCardScreen")}>
          <MaterialIcons name="library-books" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("TimerScreen")}>
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
