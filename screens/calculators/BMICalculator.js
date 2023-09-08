import { Text, TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

function BMICalculator() {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [result, setResult] = useState('')
    const [resultContainerStyle, setResultContainerStyle] = useState({});


    const calculateBmi = () => {
        const bmi = weight / ((height / 100) * (height / 100))
        setBmi('Result: '+bmi.toFixed(1))
        Keyboard.dismiss();
        setResultContainerStyle(styles.resultContainer);


        if (!height.trim() || !weight.trim() || height.endsWith(",") || weight.endsWith(",")) {
            // Display an error message or handle the validation error as needed.
            return (Alert.alert('Error', 'The data is invalid'),
                setResult(''), setBmi(''))
        }
        else {
            setWeight('');
            setHeight('');


            if (bmi < 18.5) {
                setResult('Your result suggests you are underweight.')
                setResultContainerStyle(styles.underweightContainer);
            }
            else if (bmi >= 18.5 && bmi <= 24.9) {
                setResult('Your result suggests you are a healthy weight.')
                setResultContainerStyle(styles.healthyContainer);
            }
            else if (bmi >= 25 && bmi <= 29.9) {
                setResult('Your result suggests you are overweight.')
                setResultContainerStyle(styles.overweightContainer);
            }
            else if (bmi >= 30 && bmi <= 34.9) {
                setResult('Your result suggests you are obese.')
                setResultContainerStyle(styles.obeseContainer);
            }
            else if (bmi >= 35) {
                setResult('Your result suggests you are extremely obese.')
                setResultContainerStyle(styles.extremelyObeseContainer);
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={{ flex: 1 }}>
                <View>
                    <TextInput style={styles.input} value={weight} onChangeText={(text) => setWeight(text)} placeholder="Weight in kg" keyboardType="numeric" placeholderTextColor={"#708090"} />
                    <TextInput style={styles.input} value={height} onChangeText={(text) => setHeight(text)} placeholder="Height in cm" keyboardType="numeric" placeholderTextColor={"#708090"} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={calculateBmi}>
                        <Text style={styles.text}>Calculate  <Entypo name="calculator" size={28} color="white" /></Text>
                    </Pressable>
                </View>
                <View style={[styles.resultContainer, { marginTop: 60 }, resultContainerStyle]}>
                    <Text style={styles.bmiText}>{bmi}</Text>
                    <Text style={styles.resultText}>{result}</Text>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )
};

export default BMICalculator;

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        marginHorizontal: 20,
        height: 90,
        borderRadius: 30,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "#e6e6fa",

    },
    button: {
        marginTop: 60,
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
    text: {
        fontSize: 20,
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
    resultContainer: {
        alignItems: 'center',
        justifyContent:"center"

    },
    bmiText: {
        fontSize: 35,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        marginHorizontal:10,
        
        
    },
    resultText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        marginTop: 10,
        marginHorizontal:20,
        textAlign:'center'
    },
    underweightContainer: {
        backgroundColor: "#FDFFAE",
        marginHorizontal:20,
        borderRadius: 10,
        height:150,
        borderColor: 'black',
        borderWidth: 0.7,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
      healthyContainer: {
        backgroundColor: "#C4DFAA",
        marginHorizontal:20,
        borderRadius: 10,
        height:150,
        borderColor: 'black',
        borderWidth: 0.7,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
      overweightContainer: {
        backgroundColor: "#FDFFAE",
        marginHorizontal:20,
        borderRadius: 10,
        height:150,
        borderColor: 'black',
        borderWidth: 0.7,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
      obeseContainer: {
        backgroundColor: "#F4B183",
        marginHorizontal:20,
        borderRadius: 10,
        height:150,
        borderColor: 'black',
        borderWidth: 0.7,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
      extremelyObeseContainer: {
        backgroundColor: "#FF8787",
        marginHorizontal:20,
        borderRadius: 10,
        height:150,
        borderColor: 'black',
        borderWidth: 0.7,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
});