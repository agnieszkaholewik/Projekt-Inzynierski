import { Text, TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard, Pressable, Alert } from "react-native";
import { useState, useMemo } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'



function CalorieCalculator() {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')
    const [result, setResult] = useState('')
    const [selected, setSelected] = useState("");


    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Female',
            value: 'Female',
            size: 30,
            labelStyle: {
                fontSize: 18,

            }
        },
        {
            id: '2',
            label: 'Male',
            value: 'Male',
            size: 30,
            labelStyle: {
                fontSize: 18,

            }
        }
    ]), []);

    const activityData = [
        { key: '1', value: 'Sedentary' },
        { key: '2', value: 'Lightly active' },
        { key: '3', value: 'Moderately active' },
        { key: '4', value: 'Active' },
        { key: '5', value: 'Very active' }
    ]

    const [selectedId, setSelectedId] = useState();

    const resetForm = () => {
        setHeight("");
        setWeight("");
        setAge("");
        setSelected("");
        setSelectedId("");
    };

    const calculateAMR = () => {

        if (
            !/^[0-9,.]+$/.test(height.trim()) ||
            !/^[0-9,.]+$/.test(weight.trim()) ||
            height.endsWith(",") ||
            weight.endsWith(",") ||
            height.endsWith(".") ||
            weight.endsWith(".") ||
            height.includes(" ") ||
            weight.includes(" ") ||
            height.startsWith(",") ||
            weight.startsWith(",") ||
            height.startsWith(".") ||
            weight.startsWith(".") ||
            age < 1 ||
            age > 120 ||
            isNaN(age) ||
            selected === ""|| weight <= 0 || height <= 0 || age.includes(" ") || age.includes(".") || age.includes(",")
        ) {
            return (
                Alert.alert("Error", "The data is invalid"),
                setResult("")
            )
        }



        // Calculate BMR based on gender
        let bmr = 0;
        if (selectedId === "1") {
            // Female
            bmr =
                655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
        } else if (selectedId === "2") {
            // Male
            bmr =
                66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
        }

        // Calculate AMR based on activity level
        let amr = 0;
        switch (selected) {
            case "Sedentary":
                amr = bmr * 1.2;
                break;
            case "Lightly active":
                amr = bmr * 1.375;
                break;
            case "Moderately active":
                amr = bmr * 1.55;
                break;
            case "Active":
                amr = bmr * 1.725;
                break;
            case "Very active":
                amr = bmr * 1.9;
                break;
            default:
                break;
        }


        setResult('You burn ' + amr.toFixed(0) + ' calories during a typical day.');
        Keyboard.dismiss();
        resetForm();

    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        layout="row"

                    />
                </View>
                <View style={styles.inputRow}>
                    <TextInput style={styles.input} value={weight} onChangeText={(text) => setWeight(text)} placeholder="Weight in kg" keyboardType="numeric" placeholderTextColor={"#708090"} />
                    <TextInput style={styles.input} value={height} onChangeText={(text) => setHeight(text)} placeholder="Height in cm" keyboardType="numeric" placeholderTextColor={"#708090"} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.ageInput} value={age} onChangeText={(text) => setAge(text)} placeholder="Age" keyboardType="numeric" placeholderTextColor={"#708090"} />
                    <SelectList setSelected={(val) => setSelected(val)} data={activityData} save="value" placeholder="Level of activity" search={false} boxStyles={{ borderRadius: 10, height: 70, width: 340, marginTop: 20, marginHorizontal: 10 }} inputStyles={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center', color: 'grey', marginTop: 10 }} dropdownStyles={{ width: 340, marginHorizontal: 10, }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={calculateAMR}>
                        <Text style={styles.text}>Calculate  <Entypo name="calculator" size={28} color="white" /></Text>
                    </Pressable>
                </View>
                <View style={[styles.resultContainer]}>
                    <Text style={styles.resultText}>{result}</Text>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )
};

export default CalorieCalculator;

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginHorizontal: 10,
        height: 70,
        width: 160,
        borderRadius: 10,
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
    ageInput: {
        marginTop: 20,
        marginHorizontal: 10,
        height: 70,
        width: 340,
        borderRadius: 10,
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

    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});