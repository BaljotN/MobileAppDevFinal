import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Entypo from "@expo/vector-icons/Entypo";

function TimerPage({ navigation }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [studyDuration, setStudyDuration] = useState(10);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
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
      <View style={[styles.container]}>
        <View style={styles.timerHeading}>
          <Entypo name="stopwatch" size={34} color="black" />
          <Text style={styles.header}>Study Timer</Text>
        </View>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={isRunning ? "Pause" : "Start"}
            onPress={handleStartPause}
          />
          <View style={styles.spacing} />
          <Button title="Reset" onPress={handleReset} />
        </View>
        <View style={styles.container}>
        <Pressable onPress={() => setTimeLeft(10 * 60)} styles={{}}> 10 mins</Pressable>
        <Pressable onPress={() => setTimeLeft(25 * 60)}> 25 mins</Pressable>
        <Pressable onPress={() => setTimeLeft(60 * 60)}> 60 mins</Pressable>
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
  },
  timerHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
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
