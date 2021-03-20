import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";

import HuffmanCodingScreen from "./app/screens/HuffmanCodingScreen";
import RunLengthScreen from "./app/screens/RunLengthScreen";
import MainScreen from "./app/screens/MainScreen";
import Screen from "./app/components/Screen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Encoding Techniques" component={MainScreen} />
    <Stack.Screen name="Huffman Coding" component={HuffmanCodingScreen} />
    <Stack.Screen name="RunLength Coding" component={RunLengthScreen} />
  </Stack.Navigator>
);

function App(props) {
  return (
    <NavigationContainer>
      <Screen>
        <StackNavigator />
      </Screen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
