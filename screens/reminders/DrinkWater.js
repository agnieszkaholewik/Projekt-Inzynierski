import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Platform, TouchableWithoutFeedback, Keyboard, Switch, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DrinkWater() {
    const [notifications, setNotifications] = useState([]);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [repeatDaily, setRepeatDaily] = useState(false);

    useEffect(() => {
        const loadNotifications = async () => {
            try {
                const savedNotifications = await AsyncStorage.getItem('drinkWaterNotifications');
                if (savedNotifications) {
                    setNotifications(JSON.parse(savedNotifications));
                }
            } catch (error) {
                console.error("Error loading drinkWaterNotifications:", error);
            }
        };
        loadNotifications();
    }, []);

    useEffect(() => {
        const saveNotifications = async () => {
            try {
                await AsyncStorage.setItem('drinkWaterNotifications', JSON.stringify(notifications));
            } catch (error) {
                console.error("Error saving drinkWaterNotifications:", error);
            }
        };
        saveNotifications();
    }, [notifications]);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const addNotification = async () => {
        const identifier = new Date().getTime().toString();
        const trigger = date.getTime() - new Date().getTime();

        const title = "Stay hydrated!";
        const description = "Don't forget to drink your water.";

        const notificationContent = {
            title,
            body: description,
            data: { identifier },
        };

        await Notifications.requestPermissionsAsync();

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });

        const schedulingOptions = {
            content: notificationContent,
            trigger: { seconds: trigger / 1000 },
        };

        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        if (repeatDaily) {
            schedulingOptions.repeat = 'day';
        }

        await Notifications.scheduleNotificationAsync(schedulingOptions);

        const newNotification = {
            id: identifier,
            title,
            description,
            date: formattedDate,
            repeatDaily,
        };

        setNotifications([...notifications, newNotification]);
        setDate(new Date());
        setShowDatePicker(false);
    };

    const removeNotification = async (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
        await Notifications.cancelScheduledNotificationAsync(id);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios');
        setDate(selectedDate || date);
    };

    const toggleRepeatDaily = () => {
        setRepeatDaily(!repeatDaily);
    };

    const renderItem = ({ item }) => (
        <View style={{ borderBottomWidth: 2, paddingVertical: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Text>{item.repeatDaily ? 'Repeats daily' : 'Does not repeat'}</Text>
            <Button title="Delete" onPress={() => removeNotification(item.id)} color="red" />
        </View>
    );

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={{ flex: 1, padding: 30, alignItems: 'center' }}>
                <Pressable
                    android_ripple={{ opacity: 0.5 }}
                    style={({ pressed }) => [styles.selectButton, pressed ? styles.buttonPressed : styles.selectButton]}
                    onPress={showDatepicker}
                >
                    <Text style={styles.selectText}>Select date and time</Text>
                </Pressable>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="datetime"
                        display="default"
                        onChange={handleDateChange}
                        style={styles.dateText}
                    />
                )}
                <View style={styles.selectButton}>
                    <Text style={styles.selectText}>Repeat Daily?</Text>
                </View>
                <View style={{}}>
                    <Switch value={repeatDaily} onValueChange={toggleRepeatDaily} />
                </View>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={addNotification}>
                    <Text style={styles.text}>Set reminder <Ionicons name="notifications" size={30} color="white" /></Text>
                </Pressable>
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        marginHorizontal: 20,
        height: 120,
        width: 280,
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
    buttonPressed: {
        opacity: 0.5
    },
    selectButton: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 20,
        height: 50,
        width: 250,
        borderRadius: 10,
        shadowRadius: 5,
        backgroundColor: '#b0c4de',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 0.7,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        textShadowColor: '#2C3333',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center'
    },
    selectText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
    dateText: {
        justifyContent: 'center',
        marginBottom: 30,
    },
    list: {
        flex: 1,
        width: '100%',
        marginTop: 50,
    },
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },
});
