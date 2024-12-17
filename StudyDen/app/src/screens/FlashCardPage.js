import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
 
const FlashCardPage = () => {
  const [flashcards, setFlashcards] = useState([
    {
      "id": "1",
      "title": "Javascript Flashcards",
      "description": "A collection of flashcards to help you learn JavaScript concepts, syntax, and best practices."
    },
    {
      "id": "2",
      "title": "Database and Programming Flashcards",
      "description": "Flashcards focused on key concepts related to databases, SQL queries, and general programming practices."
    },
    {
      "id": "3",
      "title": "OOP-3 Flashcards",
      "description": "Flashcards covering important Object-Oriented Programming concepts like inheritance, polymorphism, and encapsulation."
    }
  ]);


  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showDetail, setShowDetail]  = useState(false);
  const [flashCardTitle, setFlashCardTitle] = useState("");
  const [flashCardDescription, setFlashCardDescription] = useState("");

  const showingFlashCardDetails =(id)=>{
    
    if(setSelectedItemId == id){
      setSelectedItemId(null)
    }else{
      setSelectedItemId(id)
    }
  }
    const [showPopup, setShowPopUp] = useState(false)

    const onTitleChange = (text) =>{
      setFlashCardTitle(text)
    }

    const onDescriptionChange =(text) =>{
      setFlashCardDescription(text)
    }

    const onAdd = ()=>{
      let newData = {
        "id": `${flashcards.length + 1 }`,
        "title": `${flashCardTitle}`,
        "description":`${flashCardDescription}`
      }

      setFlashcards(prevFlashCards =>[...prevFlashCards, newData]);
      setFlashCardTitle("");
      setFlashCardDescription("");
      setShowPopUp(false)
    }

  const PopUp = () =>(
    <SafeAreaProvider  style={styles.popUp}>
      <SafeAreaView>
      <View>
      <Text style={{fontSize:20, fontWeight:"600"}}>FlashCard Title:</Text>
      <TextInput
          style={styles.titleInput}
          onChangeText={setFlashCardTitle}
          placeholder="Enter Flashcard Title"
          value={flashCardTitle}
        />
      <Text style={{fontSize:20, fontWeight:"600"}}>FlashCard Description:</Text>
      <TextInput
          multiline={true}
          style={styles.titleInput}
          onChangeText={onDescriptionChange}
          placeholder="Enter Flashcard Description"
          value={flashCardDescription}
        />
        <Pressable onPress={onAdd} style={styles.addFlashCard}>
          Add
        </Pressable>
    </View>
      </SafeAreaView>
      </SafeAreaProvider>
    
  )
 
  const renderItem = ({ item }) =>
    (
    <TouchableOpacity onPress={() => showingFlashCardDetails(item.id)} style={styles.flashcardItem}>
      <View style={styles.flashcardIconContainer}>
      </View>
      <Text style={styles.flashcardTitle}>{item.title}</Text>
      {selectedItemId == item.id  ? (
      <Text style={styles.flashCardDescription}>{item.description}</Text>
    ) : null}
    </TouchableOpacity>
  );

  const changePopUpVisibility = ()=>{
    if(showPopup == false){
      setShowPopUp(true)
    }else{
      setShowPopUp(false)
    }
  }
 
  return (
    <MainLayout>
      {
          showPopup ? (<PopUp/>):(null)
        }
      <View style={styles.container}>
        <FlatList
          data={flashcards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flashcardList}
        />
        
       
        <TouchableOpacity onPress={()=> changePopUpVisibility()} style={styles.createButton}>
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
    flexDirection: "column",
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
    fontWeight: "600",
    fontSize: 20,
  },
  flashCardDescription:{
    fontSize:16,
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
 