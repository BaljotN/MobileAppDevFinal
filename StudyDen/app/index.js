import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/ToDoListPage";
import AboutScreen from "./src/screens/HomePage";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";
import CalendarPage from "./src/screens/CalendarPage";
import FlashCardPage from "./src/screens/FlashCardPage";
import TimerPage from "./src/screens/TimerPage";

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AboutScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarPage} />
        <Stack.Screen name="FlashCardScreen" component={FlashCardPage} />
        <Stack.Screen name="TimerScreen" component={TimerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
