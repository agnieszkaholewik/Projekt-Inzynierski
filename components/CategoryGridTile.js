import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';



function CategoryGridTile({ title, color, icon, onPress}) {
    return (

        <View style={styles.gridItem}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}  {icon} </Text> 
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
        elevation: 8,
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
        textShadowColor: 'dimgray',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        
    }
});