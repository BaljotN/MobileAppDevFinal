import { StyleSheet, Text, View, FlatList, TouchableOpacity, FlatList, TouchableOpacity, TextInput, Pressable, SafeAreaView } from "react-native";
import React, { useState }, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const FlashCardPage = () => {
  return (
    <MainLayout>
      {
          showPopup ? (<PopUp/>):(null)
        }
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
  createButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  popUp: {
    position: 'absolute',
    top: '20%',                // Position it vertically in the center
    left: '10%',               // Position it horizontally in the center
    transform: [{              // Apply a transform to adjust for exact centering
      translateX: -'50%',      // 
      translateY: -'50%'       
    }],
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 50,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  titleInput:{
    borderColor:"#01111",
    padding: 10,
    borderWidth:1,
    borderRadius:10
  },
  descriptionInput: {
    borderColor:"#01111",
    padding: 10,
    borderWidth:1,
    borderRadius:10
  },
  addFlashCard:{
    backgroundColor: "#536afc",
    padding:5,
    color: "#fff",
    textAlign: "center",
    borderRadius:10,
    fontSize:20,
    marginTop:5
  }

});
