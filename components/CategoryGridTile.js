import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function CategoryGridTile({ title, color}) {
    return (

        <View style={styles.gridItem}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title} <Ionicons name="body" size={24} color="black" /> </Text>
                </View>
            </Pressable>

        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({

    gridItem: {
        marginTop: 20,
        flex: 1,
        margin: 16,
        height: 200,
        width: 330,
        borderRadius: 30,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        marginHorizontal:30

    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        shadowColor: 'dimgray',
        shadowOpacity: 1,
        shadowRadius: 1.7,
        shadowOffset: { width: 2, height: 2 },
    }
});