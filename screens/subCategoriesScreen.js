import { SUBCATEGORIES } from "../data/categoriesData";
import { View, Text, StyleSheet } from 'react-native';

function SubCategoriesScreen() {
    return (<View style={styles.container}>
        <Text>subcategories</Text>
    </View>
    )
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});