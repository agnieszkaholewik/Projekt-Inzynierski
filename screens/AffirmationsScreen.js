import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Platform, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Affirmations from "../components/Affirmations";
import { FontAwesome5 } from '@expo/vector-icons'; 


function AffirmationsScreen() {
  const [randomAffirmation, setRandomAffirmation] = useState("");
  const [isAffirmationGenerated, setIsAffirmationGenerated] = useState(false);

  useEffect(() => {
    loadRandomAffirmation();
  }, []);

  const loadRandomAffirmation = async () => {
    const storedAffirmation = await AsyncStorage.getItem("randomAffirmation");
    const lastGeneratedDate = await AsyncStorage.getItem("lastGeneratedDate");

    const today = new Date().toDateString();
    
    if (today !== lastGeneratedDate) {
      // Reset when a new day comes
      AsyncStorage.removeItem("randomAffirmation");
      AsyncStorage.setItem("lastGeneratedDate", today);
      setIsAffirmationGenerated(false);
    }

    if (storedAffirmation) {
      setRandomAffirmation(storedAffirmation);
      setIsAffirmationGenerated(true);
    }
  };

  const getRandomAffirmation = async () => {
    if (isAffirmationGenerated) {
      Alert.alert("Not so quick!", "You can generate a new affirmation tomorrow.");
    } else {
      const randomIndex = Math.floor(Math.random() * Affirmations.length);
      const newAffirmation = Affirmations[randomIndex];
      setRandomAffirmation(newAffirmation);
      AsyncStorage.setItem("randomAffirmation", newAffirmation);
      setIsAffirmationGenerated(true);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : styles.button,
        ]}
        onPress={getRandomAffirmation}
      >
        <Text style={styles.buttonText}>Get affirmation of the day</Text>
      </Pressable>
      {isAffirmationGenerated && (
        <View style={styles.affContainer}>
          <Text style={styles.affText}>{randomAffirmation}</Text>
        </View>
      )}
      <FontAwesome5 name="hand-holding-heart" size={100} color="black" />
    </View>
  );
}

export default AffirmationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    height: 100,
    width: 300,
    borderRadius: 40,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: "#D988B9",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "500",
    color: "white",
    textShadowColor: "#2C3333",
    textShadowRadius: 1.7,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: "center",
  },
  affContainer: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 40,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FACBEA",
    padding: 30,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom:60
  },
  affText: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
  },
  exerciseImage: {
    width: 150,
    height: 150,
  },
});
