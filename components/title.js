import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: "#fff",
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default Title;
