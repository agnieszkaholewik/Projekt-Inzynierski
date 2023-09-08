import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'


function CalculatorsScreen() {

    const navigation = useNavigation();

    function pressHandler() {
        
            navigation.navigate('BMICalculator')
        
    }

    function caloriePressHandler() {
        navigation.navigate('CalorieCalculator')
    }

    return (
        <View style={{marginTop:20}}>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={pressHandler}>
                    <View style={styles.BMIContainer}>
                        <Text style={styles.title}>BMI Calculator</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={caloriePressHandler}>
                    <View style={styles.CalorieContainer}>
                        <Text style={styles.title}>Calorie Calculator</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}>
                    <View style={styles.BMRContainer}>
                        <Text style={styles.title}>BMR Calculator</Text>
                    </View>
                </Pressable>
            </View>
        </View>


    )
};

export default CalculatorsScreen;

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
    BMIContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#748DA6',
        borderColor:'black',
        borderWidth:0.6,
    },
    CalorieContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#0C7B93',
        borderColor:'black',
        borderWidth:0.6,
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