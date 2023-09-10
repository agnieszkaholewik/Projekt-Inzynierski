import React from "react";
import { StyleSheet, Text, View, Pressable} from "react-native";

function StopwatchButtons({ isCounting, LeftPressHandler, RightPressHandler }) {
  return (
    <>
      <Pressable 
        style={({ pressed }) => [
  styles.buttons,
  { 
    backgroundColor: isCounting ? "#9370db" : "#8b008b",
    ...(pressed ? styles.buttonPressed : styles.buttons), // A
  },
]}
 onPress={LeftPressHandler}>
        <View style={styles.borders}>
          <Text style={styles.text}>{isCounting ? "Lap" : "Reset"}</Text>
        </View>
      </Pressable>
      <Pressable
      style={({ pressed }) => [
  styles.buttons,
  { 
    backgroundColor: isCounting ? "#4169e1" : "#ff69b4",
    ...(pressed ? styles.buttonPressed : styles.buttons), // A
  },
]}
        onPress={RightPressHandler}>
        <View style={styles.borders}>
          <Text style={styles.text}>{isCounting ? "Stop" : "Start"}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  buttonPressed:{
    opacity:0.5
  },
  borders: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
  },
  text:{
    color:'white',
    fontSize:24
  }
});

export default React.memo(StopwatchButtons);