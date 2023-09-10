import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Time } from "./Time";

function StopwatchOutcome({ results }) {

  return (
    <ScrollView>
      <View style={styles.result} />
      {results.map((item, index) => (
        <View key={index} style={styles.result}>
          <Text style={styles.resultText}>Lap {results.length - index}</Text>
          <Text style={styles.resultText}>{Time(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 50,
    paddingHorizontal: 15,
  },
  resultText: { 
    color: 'black',
    fontSize:20,
    marginHorizontal:10,
    fontWeight:"400"
  },
});
export default React.memo(StopwatchOutcome);