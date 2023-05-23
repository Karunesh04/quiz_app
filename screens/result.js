import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
    
  return (
    <View style={styles.container}>
      <View>
        <Title titleText="Result" />
      </View>
      <Text style={styles.scoreValue}>{score}/100</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={score >= 80 ?require("./assets/img/victory.webp") : require("./assets/img/failure.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.btnText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#383C6D",
  },
  scoreValue: {
    fontSize: 30,
    alignSelf: "center",
    marginVertical: 50,
    color: "#fff",
  },
  banner: {
    height: 300,
    width: 400,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    backgroundColor: "#4895ef",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 40,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
});

export default Result;
