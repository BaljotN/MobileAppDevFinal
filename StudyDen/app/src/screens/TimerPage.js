import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import MainLayout from "../layouts/MainLayout";

function TimerPage({ navigation }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); 
  const [studyDuration, setStudyDuration] = useState(10); 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(studyDuration * 60);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Study Timer</Text>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        <View style={styles.buttonContainer}>
          <Button title={isRunning ? "Pause" : "Start"} onPress={handleStartPause} />
          <View style={styles.spacing} />
          <Button title="Reset" onPress={handleReset} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Study Duration (minutes):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={studyDuration.toString()}
            onChangeText={(value) => {
              const duration = parseInt(value, 10) || 0;
              setStudyDuration(duration);
              setTimeLeft(duration * 60);
            }}
          />
        </View>
        <Button
          title="Go to Home Screen"
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
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  spacing: {
    width: 20,
  },
  inputContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 100,
    padding: 5,
    textAlign: "center",
    marginTop: 10,
  },
});

export default TimerPage;
