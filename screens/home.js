import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "../components/title";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZZLER'/>
      <View style={styles.bannerContainer}>
        <Image
          source={require("./assets/img/banner.webp")}
          style={styles.banner}
          resizeMode="contain"
        />
        <Text style={styles.btnText}>Take this  if you can! 👍</Text>
      </View>
      <TouchableOpacity onPress={() => navigation
      .navigate("Quiz")} style={styles.button}>
        <Text style={styles.btnText}>Start Quiz</Text>
      </TouchableOpacity>
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
  banner: {
    width: 350,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#4895ef",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
  },
});

export default Home;
