import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, TextInput, Platform, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import WorkoutExercises from "../components/WorkoutExercises";


function WorkoutsScreen() {
    const navigation = useNavigation();
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isExerciseModalVisible, setExerciseModalVisible] = useState(false);
    const [workoutName, setWorkoutName] = useState('');
    const [exerciseInputs, setExerciseInputs] = useState(['']);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [selectedWorkout, setSelectedWorkout] = useState(null); // Track selected workout

    // Load workouts from the database on component mount
    useEffect(() => {
        async function loadWorkouts() {
            try {
                const response = await axios.get('https://projekt-inzynierski-826a0-default-rtdb.europe-west1.firebasedatabase.app/workouts.json');
                if (response.data) {
                    const loadedWorkouts = Object.entries(response.data).map(([id, workout]) => ({ id, ...workout }));
                    setSavedWorkouts(loadedWorkouts);
                }
            } catch (error) {
                console.error('Error loading workouts:', error);
            }
        }

        loadWorkouts();
    }, []); // Empty dependency array to run only once on component mount

    async function saveWorkoutToDatabase(workoutData) {
        try {
            const response = await axios.post('https://projekt-inzynierski-826a0-default-rtdb.europe-west1.firebasedatabase.app/workouts.json', workoutData);
        } catch (error) {
            console.error('Error saving workout:', error);
            Alert.alert('Failed to save the workout.');
        }
    }

    async function deleteWorkoutFromDatabase(workoutId) {
        try {
            await axios.delete(`https://projekt-inzynierski-826a0-default-rtdb.europe-west1.firebasedatabase.app/workouts/${workoutId}.json`);
        } catch (error) {
            console.error('Error deleting workout:', error);
            Alert.alert('Failed to delete the workout.');
        }
    }

    function pressHandler() {
        navigation.navigate('Warmup');
    }

    function toggleAddModal() {
        setWorkoutName('');
        setExerciseInputs(['', '', '']);
        setAddModalVisible(!isAddModalVisible);
    }

    function openWorkoutExercises(workout) {
        setSelectedWorkout(workout);
        setExerciseModalVisible(true); // Open the exercise modal
    }

    function saveWorkoutName() {
        if (workoutName.trim() === '') {
            Alert.alert('Please name the workout.');
            return;
        }

        const workoutData = {
            name: workoutName,
            exercises: exerciseInputs,
        };

        // Save the workout to the database
        saveWorkoutToDatabase(workoutData);

        // Add the new workout to the state
        setSavedWorkouts([...savedWorkouts, { id: new Date().getTime(), ...workoutData }]);

        setWorkoutName('');
        setExerciseInputs(['', '', '']);
        toggleAddModal();
    }

    function addExerciseInput() {
        setExerciseInputs([...exerciseInputs, '']);
    }

    function updateExerciseInput(index, text) {
        const updatedInputs = [...exerciseInputs];
        updatedInputs[index] = text;
        setExerciseInputs(updatedInputs);
    }

    function deleteWorkout(index, workoutId) {
        // Remove the workout from the database
        deleteWorkoutFromDatabase(workoutId);

        const updatedWorkouts = [...savedWorkouts];
        updatedWorkouts.splice(index, 1);
        setSavedWorkouts(updatedWorkouts);
    }

    return (
        <View style={{ marginTop: 20 }}>
            <View style={styles.gridItem}>
                <Pressable
                    android_ripple={{ opacity: 0.5 }}
                    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}
                    onPress={pressHandler}
                >
                    <View style={styles.warmupContainer}>
                        <Text style={styles.title}>Warm-up</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.gridItem}>
                <Pressable
                    android_ripple={{ opacity: 0.5 }}
                    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}
                    onPress={toggleAddModal}
                >
                    <View style={styles.addContainer}>
                        <Text style={styles.title}>Add <AntDesign name="plus" size={24} color="white" /></Text>
                    </View>
                </Pressable>
            </View>

            {/* Render workout tiles */}
            {savedWorkouts.map((workout, index) => (
                <Pressable
                    key={workout.id}
                    android_ripple={{ opacity: 0.5 }}
                    style={({ pressed }) => [styles.gridItem, pressed ? styles.buttonPressed : null]}
                    onPress={() => openWorkoutExercises(workout)} // Pass the workout data
                >
                    <View style={styles.warmupContainer}>
                        <Text style={styles.title}>{workout.name}</Text>
                    </View>
                    <Pressable
                        android_ripple={{ opacity: 0.5 }}
                        style={styles.deleteButton}
                        onPress={() => deleteWorkout(index, workout.id)}
                    >
                        <AntDesign name="delete" size={24} color="white" />
                    </Pressable>
                </Pressable>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={isAddModalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ marginLeft: 290, marginBottom: 20 }}>
                            <Pressable
                                
                                onPress={toggleAddModal}
                            >
                                <AntDesign name="close" size={30} color="black" />
                            </Pressable>
                        </View>
                        <TextInput
                            style={[styles.input, { marginBottom: 30, borderWidth: 2 }]}
                            placeholder="Workout Name"
                            placeholderTextColor="gray"
                            value={workoutName}
                            onChangeText={text => setWorkoutName(text)}
                        />
                        <ScrollView style={{ maxHeight: 300 }}>
                            {exerciseInputs.map((exercise, index) => (
                                <TextInput
                                    key={index}
                                    style={styles.input}
                                    placeholder={`Exercise ${index + 1}`}
                                    placeholderTextColor="gray"
                                    value={exercise}
                                    onChangeText={text => updateExerciseInput(index, text)}
                                />
                            ))}
                        </ScrollView>
                        <Pressable
                            android_ripple={{ opacity: 0.5 }}
                            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}
                            onPress={addExerciseInput}
                        >
                            <View style={styles.moreExercise}>
                                <Text style={[styles.title, { fontSize: 30 }]}>+</Text>
                            </View>
                        </Pressable>
                        <Pressable
                            android_ripple={{ opacity: 0.5 }}
                            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}
                            onPress={() => {
                                saveWorkoutName();
                            }}
                        >
                            <View style={styles.addWorkoutContainer}>
                                <Text style={styles.title}>Save Workout</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <WorkoutExercises isVisible={isExerciseModalVisible} selectedWorkout={selectedWorkout} onClose={() => setExerciseModalVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textShadowColor: '#2C3333',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center',
    },
    gridItem: {
        marginTop: 8,
        margin: 20,
        height: 90,
        borderRadius: 30,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    warmupContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#4477CE',
        borderColor: 'black',
        borderWidth: 0.6,
    },
    addContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#4A55A2',
        borderColor: 'black',
        borderWidth: 0.6,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: 360,
        height: 700,
        marginTop: 60,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 15
    },
    addWorkoutContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#4A55A2',
        borderColor: 'black',
        borderWidth: 0.6,
        marginTop: 60
    },
    moreExercise: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70 / 2,
        backgroundColor: '#4A55A2',
        borderColor: 'black',
        borderWidth: 0.6,
        width: 70,
        height: 70,
        alignSelf: 'center',
    },
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderRadius: 50,
        padding: 8,
        
        
    },
});

export default WorkoutsScreen;
