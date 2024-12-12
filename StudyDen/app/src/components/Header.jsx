import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Pressable style={styles.headerTitle}>
        <Image
          style={styles.appLogo}
          source={require("../../../assets/icon.png")}
        />
        <Text style={styles.headerText}>Study Den</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  appLogo: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
});
