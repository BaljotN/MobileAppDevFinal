import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { name: "Work on Assignment 3 for OOP3", completed: false },
    { name: "Study for final exams", completed: false },
    { name: "Finish Web Dev Final", completed: false },
  ]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { name: taskText, completed: false }]);
    }
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("AboutScreen")}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
