import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/categoriesData';
import { FlatList, StyleSheet, View } from 'react-native'


function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('SubCategoriesScreen');
        }
    
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} icon={itemData.item.icon} onPress={pressHandler} />;
    }
    
    return <View style={styles.containter}><FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} /></View>
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#fff0f5',
        justifyContent:'center',
        alignItems:'center'
    },
})