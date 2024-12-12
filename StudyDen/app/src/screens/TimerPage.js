import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import Entypo from "@expo/vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Keyboard } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[styles.container]}>
          <View style={styles.timerHeading}>
            <Entypo name="stopwatch" size={34} color="black" />
            <Text style={styles.header}>Study Timer</Text>
          </View>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.resetPressable} onPress={handleReset}>
              <Ionicons
                style={{ color: "white" }}
                name="reload"
                size={24}
                color="black"
              />
              <Text style={styles.startPressableText}>Reset</Text>
            </Pressable>
            <Pressable style={styles.startPressable} onPress={handleStartPause}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                {isRunning ? (
                  <Feather
                    style={{ color: "white" }}
                    name="pause"
                    size={24}
                    color="black"
                  />
                ) : (
                  <AntDesign
                    style={{ color: "white" }}
                    name="caretright"
                    size={24}
                    color="black"
                  />
                )}
                {isRunning ? (
                  <Text style={styles.startPressableText}>Pause</Text>
                ) : (
                  <Text style={styles.startPressableText}>Start</Text>
                )}
              </View>
            </Pressable>
          </View>
          <View style={styles.timerButtonsView}>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(10 * 60)}
              styles={{}}
            >
              <Text style={styles.timerButtonText}>10 mins</Text>
            </Pressable>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(20 * 60)}
            >
              <Text style={styles.timerButtonText}>20 mins</Text>
            </Pressable>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(30 * 60)}
            >
              <Text style={styles.timerButtonText}>30 mins</Text>
            </Pressable>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(40 * 60)}
            >
              <Text style={styles.timerButtonText}>40 mins</Text>
            </Pressable>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(50 * 60)}
            >
              <Text style={styles.timerButtonText}>50 mins</Text>
            </Pressable>
            <Pressable
              style={styles.timerButton}
              onPress={() => setTimeLeft(60 * 60)}
            >
              <Text style={styles.timerButtonText}>60 mins</Text>
            </Pressable>
          </View>
          <View style={styles.viewCustom}>
            <Text style={styles.viewCustomText}>Custom: </Text>
            <Pressable>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={studyDuration.toString()}
                onChangeText={(value) => {
                  const duration = parseInt(value, 10) || 0;
                  setStudyDuration(duration);
                  setTimeLeft(duration * 60);
                }}
                onBlur={() => Keyboard.dismiss()}
              />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  viewCustomText: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold",
  },
  viewCustom: {
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    width: 100,
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  timerHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
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
    gap: 20,
    justifyContent: "center",
    marginVertical: 20,
  },
  startPressable: {
    backgroundColor: "#888ce4",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  startPressableText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold",
  },
  resetPressable: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#ef5151",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  spacing: {
    width: 20,
  },
  inputContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  timerButtonsView: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
  },
  timerButton: {
    padding: 10,
    backgroundColor: "#E2E2E2",
    borderRadius: 15,
    shadowColor: "#00000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
  },
  timerButtonText: {
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Montserrat_500Medium",
  },
});

export default TimerPage;
