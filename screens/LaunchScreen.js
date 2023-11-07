import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View, Pressable, Platform } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';



function LaunchScreen({navigation}) {

    function pressHandler() {
        navigation.navigate('CategoriesScreen');
    }


    return (

        <LinearGradient style={styles.container} colors={['#6495ed', '#ffc0cb', '#ff69b4',]}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Wellness App
                </Text>
            </View>

            <View style={styles.mottoContainer}>
                <Text style={styles.mottoText}>
                    where well-being and fitness unite
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="dove" size={80} color="white" />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={pressHandler}>
                    <Text style={styles.buttonText}>
                        GET STARTED
                    </Text>
                </Pressable>
            </View>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 160,
    },
    titleText: {
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowRadius: 1,
        textShadowOffset: { width: 2, height: 2 },
        
    },
    mottoContainer: {
        marginTop: 10
    },
    mottoText: {
        fontSize: 25,
        marginTop:15,
        marginHorizontal:70,
        textAlign:'center',
        color: 'white',
        textShadowColor: 'grey',
        textShadowRadius: 1,
        textShadowOffset: { width: 2, height: 2 },
        fontStyle:'italic'
        

    },
    iconContainer: {
        marginTop: 100
    },
    buttonContainer: {
        marginTop: 90
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 40,
        elevation: 8,
        shadowColor: 'white',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        backgroundColor: '#dda0dd',
        borderColor:'black',
        borderWidth:0.4,
    },
    buttonPressed: {
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 40,
        elevation: 4,
        shadowColor: 'white',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        opacity: 0.5
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowRadius: 1,
        textShadowOffset: { width: 2, height: 2 },
        
    }

});


export default LaunchScreen;