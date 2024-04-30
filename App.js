import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  NavigationContainer,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import About from "./About";
import BottomNav from "./Model/BottomNav";
import Home from "./Model/Home";
import Statistic from "./Model/Statistic";
import More from "./Model/More";
import Wallet from "./Model/Wallet";
import Settings from "./Model/Settings";
import SendMoney from "./Model/SendMoney";
import SpentRec from "./Model/SpentRec";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const Stack = createNativeStackNavigator();
  const style = NavigationBar.setBackgroundColorAsync("#111111");

  function ScreenNameTracker() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [currentScreenName, setCurrentScreenName] = useState("");

    useEffect(() => {
      if (isFocused) {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      }
    }, [isFocused, navigation]);

    useEffect(() => {
      const unsubscribe = navigation.addListener("state", () => {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      });
      console.log(currentScreenName);

      return unsubscribe;
    }, [navigation]);

    if (currentScreenName !== "Send" && currentScreenName !=="SpentRec") {
      return (
        <View style={styles.btmnav}>
          <BottomNav />
        </View>
      );
    } else {
      <View style={styles.btmnav}>
        <BottomNav />
      </View>;
    }
  }

  return (
    <View style={styles.container}>
            <StatusBar style="light" />
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ animation:"fade_from_bottom" }}>
            {/*Define our routes*/}
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Statistic"
              component={Statistic}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="More"
              component={More}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Send"
              component={SendMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
             name="SpentRec"
             component={SpentRec}
             options={{headerShown:false}}
            />
          </Stack.Navigator>
          <ScreenNameTracker />
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 20,
    paddingBottom:5,
  },
  btmnav: {
    position: "absolute",
    bottom: -10,
    left: 10,
    right: 10,
  },
});
