import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'


function BreathingExercisesScreen() {

    const navigation = useNavigation();

    function pressHandler() {
        
            navigation.navigate('FirstBreathingExercise')
        
    }

    function boxPressHandler() {
        navigation.navigate('SecondBreathingExercise')
    }

    function twotoonePressHandler() {
        navigation.navigate('')
    }

    return (
        <View style={{marginTop:20}}>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={pressHandler}>
                    <View style={[styles.breathingButtons,{backgroundColor:'#F875AA'}]}>
                        <Text style={styles.title}>4-7-8 Breathing</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={boxPressHandler}>
                    <View style={[styles.breathingButtons, {backgroundColor:'#80B3FF'}]}>
                        <Text style={styles.title}>Box Breathing</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={twotoonePressHandler}>
                    <View style={[styles.breathingButtons,{backgroundColor:'#7C81AD'}]}>
                        <Text style={styles.title}>2-TO-1 Breathing</Text>
                    </View>
                </Pressable>
            </View>
        </View>


    )
};

export default BreathingExercisesScreen;

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
        textAlign: 'center'

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
    breathingButtons: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor:'black',
        borderWidth:0.6,
    },
    
});