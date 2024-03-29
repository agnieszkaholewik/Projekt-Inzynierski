import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Pressable, Dimensions, Alert } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';

const FIREBASE_DATABASE_URL = 'https://projekt-inzynierski-826a0-default-rtdb.europe-west1.firebasedatabase.app/';

export default function ProgressTrackerScreen() {
  const [weight, setWeight] = useState('');
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${FIREBASE_DATABASE_URL}/weights.json`);
      const data = response.data;
      if (data) {
        const weightsData = Object.entries(data).map(([id, weightData]) => ({
          id,
          ...weightData,
        }));
        setWeights(weightsData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const saveWeight = async () => {
    if (weight.trim() !== '') {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
      const newWeight = {
        weight: weight,
        data: `${day}/${month}`,
      };
  
      try {
        const response = await axios.post(`${FIREBASE_DATABASE_URL}/weights.json`, newWeight);
        const newWeightWithId = { id: response.data.name, ...newWeight };
        setWeights([...weights, newWeightWithId]);
        setWeight('');
        Keyboard.dismiss();
  
        // Refresh data after adding a new weight
        getData();
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert('Error', 'Please enter a valid weight.');
    }
  };
  
  
  const handleDeleteLastWeight = async () => {
    try {
      if (weights.length > 0) {
        const lastWeightId = weights[weights.length - 1].id;
  
        // Delete the last weight from the database
        await axios.delete(`${FIREBASE_DATABASE_URL}/weights/${lastWeightId}.json`);
  
        // Remove the last weight from the state
        const updatedWeights = [...weights.slice(0, -1)];
        setWeights(updatedWeights);
  
        Keyboard.dismiss();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  
  

  const chartData = {
    labels: weights.map((weight) => weight.data),
    datasets: [
      {
        data: weights.map((weight) => parseFloat(weight.weight)),
      },
    ],
  };



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginVertical: 10, }}>

          <TextInput style={styles.input} value={weight} onChangeText={(text) => setWeight(text)} placeholder="Weight" keyboardType="numeric" placeholderTextColor={"#708090"} />

          <View style={{ alignItems: 'center' }}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={saveWeight}>
              <Text style={styles.text}>Add weight</Text>
            </Pressable>
          </View>
        </View>

        {weights.length > 0 && (
          <LineChart
            data={chartData}
            width={Dimensions.get("window").width}
            height={350}
            style={{ marginTop: 30, borderRadius: 16, borderColor: 'black', borderWidth: 1 }}
            chartConfig={{
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 20,
              },
              formatYLabel: (label) => label.toFixed(2),
              formatXLabel: (label) => label,
              backgroundGradientFrom: "#435585",
              backgroundGradientFromOpacity: 20,
              backgroundGradientTo: "#818FB4",
              backgroundGradientToOpacity: 3,
            }}
            bezier
          />
        )}

        {weights.length > 0 && (
          <View style={{ alignItems: 'center' }}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button2, pressed ? styles.buttonPressed : styles.button2]} onPress={handleDeleteLastWeight}>
              <Text style={styles.text2}>Delete last weight</Text>
            </Pressable>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginHorizontal: 20,
    height: 90,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "#e6e6fa",
    width: 350

  },
  button: {
    marginTop: 30,
    marginHorizontal: 20,
    height: 90,
    width: 250,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: '#7895B2',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.4,
  },
  button2: {
    marginTop: 20,
    marginHorizontal: 20,
    height: 80,
    width: 230,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: '#164863',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.4,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textShadowColor: '#2C3333',
    textShadowRadius: 1.7,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: 'center'

  },
  text2: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textShadowColor: '#2C3333',
    textShadowRadius: 1.7,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: 'center'

  },
  buttonPressed: {
    opacity: 0.5
  },
})