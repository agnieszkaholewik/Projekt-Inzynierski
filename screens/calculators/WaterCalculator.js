import { Text, TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

function WaterCalculator() {

    const [weight, setWeight] = useState('')
    const [result, setResult] =useState('')

    const calculateWater = () => {
        const water = weight *0.033;
        setResult('You need to drink at least ' + water.toFixed(1)+' litres of water everyday.')
        Keyboard.dismiss();


        if (!/^[0-9,.]+$/.test(weight.trim()) ||
            weight.endsWith(",") || 
            weight.endsWith(".") || weight.includes(" ") ||
            weight.startsWith(",") || 
            weight.startsWith(".") || weight <= 0 ) {

            return (Alert.alert('Error', 'The data is invalid'),
                setResult(''))
            }
        else {
            setWeight('');

        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={{ flex: 1, marginTop: 20 }}>
                <View>
                    <TextInput style={styles.input} value={weight} onChangeText={(text) => setWeight(text)} placeholder="Weight in kg" keyboardType="numeric" placeholderTextColor={"#708090"} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={calculateWater}>
                        <Text style={styles.text}>Calculate  <Entypo name="calculator" size={28} color="white" /></Text>
                    </Pressable>
                </View>
                <View style={[styles.resultContainer, { marginTop: 60 }]}>
                    <Text style={styles.resultText}>{result}</Text>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )
};

export default WaterCalculator;

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

    },
    button: {
        marginTop: 50,
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
        justifyContent: "center",
        marginTop: 50,
        marginHorizontal: 20

    },

    resultText: {
        fontSize: 25,
        fontWeight: '400',
        color: 'black',
        //marginTop: 10,
        marginHorizontal: 20,
        textAlign: 'center',
        //padding:20
    },
    
});