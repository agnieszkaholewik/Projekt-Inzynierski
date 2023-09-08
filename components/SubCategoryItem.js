import { View, Text, Pressable, StyleSheet } from 'react-native';

function SubCategoryItem({ title, color, icon }) {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}>
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
        textAlign:'center'

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
        borderRadius: 30
    },
    


});