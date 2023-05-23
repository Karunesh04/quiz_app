import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  
});
