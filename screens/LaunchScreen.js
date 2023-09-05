import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View, Pressable} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useState } from "react";




function LaunchScreen() { 
    
    const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

    
return (
    
    <LinearGradient style={styles.container} colors={['#6495ed','#ffc0cb', '#ff69b4',]}>
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
            <FontAwesome5 name="dove" size={80} color="white"/>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.buttonBackground, { backgroundColor: isPressed ? '#ee82ee' : '#dda0dd' }]} onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
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
      flex:1,
      alignItems:'center'
    },
    titleContainer:{
        marginTop:160,
    },
    titleText:{
        fontSize: 30, 
        color:'white',
        fontWeight:'bold'
    },
    mottoContainer:{
        marginTop:10
    },
    mottoText:{
        fontSize: 20, 
        color:'white',
       
    },
    iconContainer:{
        marginTop:150
    },
    buttonContainer:{
        marginTop:60
    },
    buttonBackground:{
        paddingVertical:20,
        paddingHorizontal:100,
        borderRadius:40,
        
        
    },
    buttonText:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    }
    
  });


export default LaunchScreen;