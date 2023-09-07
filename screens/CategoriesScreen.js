import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/categoriesData';
import { FlatList, StyleSheet, View } from 'react-native'


function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('SubCategoriesScreen', {
                categoryId: itemData.item.id,
            });
        }
    
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} icon={itemData.item.icon} onPress={pressHandler} />;
    }
    
    return <View style={styles.containter}><FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} style={{marginTop:20}} /></View>
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#e6e6fa',
        justifyContent:'center',
        alignItems:'center'
    },
})