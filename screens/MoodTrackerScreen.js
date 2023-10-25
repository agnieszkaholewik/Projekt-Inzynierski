import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MoodTrackerScreen() {
    const [selected, setSelected] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
    const [selectedMoodColor, setSelectedMoodColor] = useState('#FFFFFF');
    const [markedDates, setMarkedDates] = useState({});

    useEffect(() => {
        const loadSavedMoodColors = async () => {
            try {
                const savedMoodColors = await AsyncStorage.getItem('moodColors');
                if (savedMoodColors !== null) {
                    setMarkedDates(JSON.parse(savedMoodColors));
                }
            } catch (error) {
                console.error('Error loading saved mood colors:', error);
            }
        };

        loadSavedMoodColors();
    }, []);

    const handleMoodSelection = (color) => {
        setSelectedMoodColor(color);

        const updatedMarkedDates = {
            ...markedDates,
            [selected]: {
                selected: true,
                selectedColor: color,
            },
        };
        setMarkedDates(updatedMarkedDates);

        AsyncStorage.setItem('moodColors', JSON.stringify(updatedMarkedDates))
            .catch((error) => console.error('Error saving mood colors:', error));
    };

    const clearMoodSelection = () => {
        if (selected && markedDates[selected]) {
            const updatedMarkedDates = { ...markedDates };
            delete updatedMarkedDates[selected];
            setMarkedDates(updatedMarkedDates);

            AsyncStorage.setItem('moodColors', JSON.stringify(updatedMarkedDates))
                .catch((error) => console.error('Error saving mood colors:', error));
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Calendar
                onDayPress={(day) => {
                    setSelected(day.dateString);
                    setSelectedMoodColor(markedDates[day.dateString]?.selectedColor || '#FFFFFF');
                }}
                markedDates={markedDates}
                style={{
                    borderRadius:10,
                    
                }}
                
            />

            <View style={styles.moodPicker}>
                <Pressable style={({ pressed }) => [
                    styles.buttons,
                    { backgroundColor: '#90ee90' },
                    pressed ? styles.buttonPressed : styles.buttons
                ]}

                    onPress={() => handleMoodSelection('#90ee90')}>
                    <Text style={styles.text}>joyful</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.buttons,
                    { backgroundColor: '#ffb6c1' },
                    pressed ? styles.buttonPressed : styles.buttons
                ]}

                    onPress={() => handleMoodSelection('#ffb6c1')} >
                    <Text style={styles.text}>neutral</Text>
                </Pressable>
            </View>
            <View style={styles.moodPicker}>
                <Pressable style={({ pressed }) => [
                    styles.buttons,
                    { backgroundColor: '#ffa07a' },
                    pressed ? styles.buttonPressed : styles.buttons
                ]}

                    onPress={() => handleMoodSelection('#ffa07a')} >
                    <Text style={styles.text}>irritated</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.buttons,
                    { backgroundColor: '#ff6347' },
                    pressed ? styles.buttonPressed : styles.buttons
                ]}

                    onPress={() => handleMoodSelection('#ff6347')} >
                    <Text style={styles.text}>furious</Text>
                </Pressable>
            </View>
            <View style={styles.moodPicker}>
                <Pressable style={({ pressed }) => [
                    styles.buttons,
                    { backgroundColor: '#87ceeb' },
                    pressed ? styles.buttonPressed : styles.buttons
                ]}

                    onPress={() => handleMoodSelection('#87ceeb')} >
                    <Text style={styles.text}>sad</Text>
                </Pressable>
                <Pressable style={{
                    width: 130,
                    height: 100,
                    borderColor: 'black',
                    borderWidth: 1,
                    marginHorizontal: 20,
                    justifyContent: 'center',
                    borderRadius: 8
                }}
                    onPress={() => clearMoodSelection()} >
                    <Text style={styles.clearText}>clear</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default MoodTrackerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        width: 130,
        height: 100,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 8
    },
    buttonPressed: {
        opacity: 0.5
    },
    moodPicker: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    clearText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'dimgrey',
        textAlign: 'center'
    }
});
