import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'

function SubCategoryItem({ id, title, color, icon }) {

    const navigation = useNavigation();

    function selectSubCategoryHandler() {
        if (id === 's2') {
            navigation.navigate('CalculatorsScreen', {
                screenId: id
            });
        }
        if (id === 's8') {
            navigation.navigate('MiniGameScreen', {
                screenId: id
            });
        }
        if (id === 's4') {
            navigation.navigate('StopWatchScreen', {
                screenId: id
            });
        }
        if (id === 's9') {
            navigation.navigate('DrinkWater', {
                screenId: id
            });
        }
        if (id === 's10') {
            navigation.navigate('Exercise', {
                screenId: id
            });
        }
        if (id === 's11') {
            navigation.navigate('Sleep', {
                screenId: id
            });
        }
        if (id === 's12') {
            navigation.navigate('Add', {
                screenId: id
            });
        }
        if (id === 's5') {
            navigation.navigate('MoodTrackerScreen', {
                screenId: id
            });
        }
        if (id === 's6') {
            navigation.navigate('BreathingExercisesScreen', {
                screenId: id
            });
        }

    }



    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={selectSubCategoryHandler}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title} {icon}</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default SubCategoryItem;

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
        textShadowColor: '#2f4f4f',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center'

    },
    gridItem: {
        marginTop: 10,
        flex: 1,
        margin: 10,
        height: 180,
        width: 150,
        borderRadius: 30,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor:'black',
        borderWidth:0.6,
    },



});