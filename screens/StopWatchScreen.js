import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform, ScrollView } from "react-native";
import StopwatchOutcome from "../components/StopwatchOutcome";
import StopwatchButtons from "../components/StopwatchButtons";
import { Time } from "../components/Time";

export default function StopWatchScreen() {
  const [time, setTime] = useState(0);
  const [isCounting, setCounting] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);
  const LeftPressHandler = useCallback(() => {
    if (isCounting) {
      setResults((previousResults) => [time, ...previousResults]);
    }
    else {
      setResults([]);
      setTime(0);
    }
  }, [isCounting, time]);
  const RightPressHandler = useCallback(() => {
    if (!isCounting) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    }
    else {
      clearInterval(timer.current);
    }
    setCounting((previousState) => !previousState);
  }, [isCounting]);
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.stopwatch}>
        <Text style={styles.stopwatchText}>{Time(time)}</Text>
      </View>
      <View style={styles.button}>
        <StopwatchButtons
          isCounting={isCounting}
          LeftPressHandler={LeftPressHandler}
          RightPressHandler={RightPressHandler}
        />
      </View>
      <ScrollView style={styles.result}>
        <StopwatchOutcome results={results} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa",
  },
  stopwatch: {
    marginTop:70,
    justifyContent: "center",
    alignItems: "center",
  
  },
  stopwatchText: {
    color: 'black',
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  },
  button: {
    marginTop:50,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: { 
    marginTop:80,
  },
});