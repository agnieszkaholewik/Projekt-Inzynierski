import React, { useState, useEffect } from 'react';
import { Modal, Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WorkoutExercises = ({ isVisible, selectedWorkout, onClose, updateExerciseStatusInDatabase, updateAllExerciseStatusInDatabase }) => {
    const [exerciseStatus, setExerciseStatus] = useState([]);
    const clearCheckboxes = () => {
        const clearedStatus = exerciseStatus.map(exercise => ({ ...exercise, completed: false }));
        setExerciseStatus(clearedStatus);
        
        // Update the checkboxes in the database (assuming a function named updateAllExerciseStatusInDatabase)
        updateAllExerciseStatusInDatabase(selectedWorkout.id, clearedStatus);
    };
    

    useEffect(() => {
        if (selectedWorkout) {
            setExerciseStatus(selectedWorkout.exercises.map((exercise) => ({
                name: exercise.name,
                completed: exercise.checked || false,
            })));
        }
    }, [selectedWorkout]);

    const completedCount = exerciseStatus.filter(exercise => exercise.completed).length;
    const totalCount = exerciseStatus.length;

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {selectedWorkout && (
                        <React.Fragment>
                            <View style={{ marginLeft: 290, marginBottom: 20 }}>
                                <Pressable
                                    style={styles.closeButton}
                                    onPress={onClose}
                                >
                                    <AntDesign name="close" size={30} color="black" />
                                </Pressable>
                            </View>
                            <Text style={styles.workoutTitle}>{selectedWorkout.name}</Text>

                            <Text style={styles.completedCountText}>
                                Completed {completedCount} out of {totalCount} exercises.
                            </Text>

                            <ScrollView>
                                {exerciseStatus.map((exercise, index) => {
                                    if (!exercise.name || exercise.name.trim() === '') {
                                        return null;
                                    }
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.exerciseItem}
                                            onPress={() => {
                                                const newStatus = [...exerciseStatus];
                                                newStatus[index].completed = !newStatus[index].completed;

                                                updateExerciseStatusInDatabase(selectedWorkout.id, index, newStatus[index].completed);
                                                setExerciseStatus(newStatus);
                                            }}
                                        >
                                            <View style={styles.checkbox}>
                                                {exercise.completed && (
                                                    <View style={styles.checkedBox} />
                                                )}
                                            </View>
                                            <Text
                                                style={[
                                                    styles.exerciseText,
                                                    exercise.completed && styles.completedExercise
                                                ]}
                                            >
                                                {exercise.name}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                            <View style={styles.gridItem}>
                            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={clearCheckboxes}>
                            <View style={styles.BMRContainer}>
                            <Text style={styles.title}>Clear checkboxes</Text>
                            </View>
                            </Pressable>
                            </View>
                        </React.Fragment>
                    )}
                </View>
                
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
    workoutTitle: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    exerciseText: {
        fontSize: 18,
        marginRight: 50,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 20,
        height: 20,
        backgroundColor: 'grey',
    },
    completedExercise: {
        color: 'lightgray',
    },
    closeButton: {
        fontSize: 22,
        color: 'blue',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    completedCountText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        marginBottom:60,
        color:'grey'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    gridItem: {
        marginTop: 8,
        margin: 20,
        height: 70,
        borderRadius: 30,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        
        

    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textShadowColor: '#2C3333',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center'

    },
    BMRContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#27496D',
        borderColor:'black',
        borderWidth:0.6,
    }
});

export default WorkoutExercises;
