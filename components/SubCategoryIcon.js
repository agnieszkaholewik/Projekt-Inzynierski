import { View, StyleSheet } from 'react-native';

function SubCategoryIcon({ icon }) {
    return (
        <View style={styles.icon}>
            {icon}
        </View>
    )
};

export default SubCategoryIcon;

const styles = StyleSheet.create({
    icon:{
        flex:1,
        alignItems:'center',
        
    }
});