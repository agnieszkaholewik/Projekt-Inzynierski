import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';



function WorkoutsScreen() {

    const navigation = useNavigation();

    function pressHandler() {
        
            navigation.navigate('Warmup')
        
    }

   

    function waterPressHandler() {
        navigation.navigate('AddWorkout')
    }

    return (
        <View style={{marginTop:20}}>
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={pressHandler}>
                    <View style={styles.BMIContainer}>
                        <Text style={styles.title}>Warm-up</Text>
                    </View>
                </Pressable>
            </View>
           
            <View style={styles.gridItem}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={waterPressHandler}>
                    <View style={styles.BMRContainer}>
                        <Text style={styles.title}>Add <AntDesign name="plus" size={24} color="white" /></Text>
                    </View>
                </Pressable>
            </View>
        </View>


    )
};

export default WorkoutsScreen;

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
        backgroundColor: '#4477CE',
        borderColor:'black',
        borderWidth:0.6,
    },
  
    BMRContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#4A55A2',
        borderColor:'black',
        borderWidth:0.6,
    }
});