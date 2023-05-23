import React, { useState, useEffect } from "react";
import { Image,View, StyleSheet, Text, TouchableOpacity } from "react-native";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const handlePrevPress = () => {
    if (ques > 0) {
      setQues(ques - 1);
      setOptions(generateOptionsAndShuffle(questions[ques - 1]));
    }
  };

  const generateOptionsAndShuffle = (_question) => {
    const option = [..._question.incorrect_answers];
    option.push(_question.correct_answer);
    shuffleArray(option);
    return option;
  };

  const handleSelectedOption = (opt) => {
    if (opt === questions[ques].correct_answer && score<100)
      setScore(score + 10);
    {ques !== 9 && handleNextPress()}
}

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" ,fontSize:18}}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q{ques + 1}. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.optionWrapper}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  1-
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.option}>
                  2-
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.option}>
                  3-
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.option}>
                  4-
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={handlePrevPress}>
                <Text style={styles.btnText}>Prev</Text>
              </TouchableOpacity>
              {ques < 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              )}
              {ques == 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("Result", {
                      score: score,
                    })
                  }
                >
                  <Text style={styles.btnText}>Show Result</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: "100%",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#383C6D",
  },
  top: {
    marginVertical: 16,
  },
  question: {
    fontSize: 22,
    color: "#fff",
  },
  optionWrapper: {
    marginVertical: 30,
    flex: 1,
  },
  option: {
    fontSize: 18,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#bfd7ff",
    marginVertical: 6,
    borderRadius: 12,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#383C6D",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    // marginBottom: 40,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
});

export default Quiz;
