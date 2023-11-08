import React, { useState, useEffect } from 'react';
import { Modal, Text, View, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WorkoutExercises = ({ isVisible, selectedWorkout, onClose }) => {
    const [exerciseStatus, setExerciseStatus] = useState([]);

    useEffect(() => {
        if (selectedWorkout) {
            // Extract exercise names from the "exercises" array
            setExerciseStatus(selectedWorkout.exercises.map((exercise) => ({
                name: exercise,
                completed: false // You don't need to save the completion status to the database
            })));
        }
    }, [selectedWorkout]);

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
                                                // Toggle the local state, not connected to the database
                                                const newStatus = [...exerciseStatus];
                                                newStatus[index].completed = !newStatus[index].completed;
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
        marginBottom: 60,
        paddingHorizontal: 20,
    },
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    exerciseText: {
        fontSize: 25,
        marginRight: 50,
    },
    checkbox: {
        width: 30,
        height: 30,
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
});

export default WorkoutExercises;