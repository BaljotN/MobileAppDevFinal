import { StyleSheet, Text, View, Alert, TextInput, Button, FlatList } from "react-native";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Calendar } from "react-native-calendars";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [task, setTask] = useState("");
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const onDayPress = (day) => {
    setSelectedDate(formatDate(day.dateString));
    setIsPromptVisible(true);
  };

  const handleAddTask = () => {
    if (task) {
      const newTask = { date: selectedDate, task };
      setTasks([...tasks, newTask]);
      setTask("");
      setIsPromptVisible(false);
    }
  };

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${months[parseInt(month, 10) - 1]}-${day}-${year.slice(-2)}`;
    return formattedDate;
  }
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Your Personal Task Calendar</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, marked: true },
          }}
          style={styles.calendar}
          renderArrow={(direction) => (
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>
                {direction === 'left' ? '←' : '→'}
              </Text>
            </View>
          )}
          theme={{
            backgroundColor: '#f0f0f0',
            calendarBackground: '#f0f0f0',
          }}
        />
        {isPromptVisible && (
          <View style={styles.promptContainer}>
            <Text>Add a task for {selectedDate}</Text>
            <TextInput
              style={styles.input}
              value={task}
              onChangeText={setTask}
              placeholder="Enter task"
            />
            <Button title="Add Task" onPress={handleAddTask} />
          </View>
        )}
        {tasks.length > 0 && <Text style={styles.subtitle}>Tasks</Text>}
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.date}: {item.task}</Text>
            </View>
          )}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  calendar: {
    width: 350,
    height: 350,
  },
  arrowContainer: {
    backgroundColor: "f0f0f0",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.5,
    elevation: 5,
  },
  arrow: {
    fontSize: 24,
    color: "black",
  },
  promptContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -50 }],
    width: 200,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskItem: {
    backgroundColor: "#add8e6",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
});

export default CalendarPage;