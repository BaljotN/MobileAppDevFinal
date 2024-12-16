import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Ionicons } from "@expo/vector-icons";
 
const FlashCardPage = () => {
  const [flashcards, setFlashcards] = useState([
    {
      id: "1",
      title: "Javascript Flashcards",
      icon: "ios-code-slash-outline",
    },
    {
      id: "2",
      title: "Database and Programming Flashcards",
      icon: "ios-database-outline",
    },
    {
      id: "3",
      title: "OOP-3 Flashcards",
      icon: "ios-construct-outline",
    },
  ]);
 
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.flashcardItem}>
      <View style={styles.flashcardIconContainer}>
        <Ionicons name={item.icon} size={24} color="black" />
      </View>
      <Text style={styles.flashcardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
 
  return (
    <MainLayout>
      <View style={styles.container}>
        <FlatList
          data={flashcards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flashcardList}
        />
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Flashcards</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};
 
export default FlashCardPage;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flashcardList: {
    flexGrow: 1,
  },
  flashcardItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  flashcardIconContainer: {
    marginRight: 15,
  },
  flashcardTitle: {
    fontSize: 16,
  },
  createButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});