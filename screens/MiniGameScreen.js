import { Text, View, StyleSheet } from 'react-native'

function MiniGameScreen() {
    return (
        <View style={styles.container}>
            <Text>Mini Game</Text>
        </View>
    )
};

export default MiniGameScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})