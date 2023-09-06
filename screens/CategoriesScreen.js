import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/categoriesData';
import { FlatList, StyleSheet, View } from 'react-native'

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreen() {
    return <View style={styles.containter}><FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} /></View>
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#fff0f5',
    },
})