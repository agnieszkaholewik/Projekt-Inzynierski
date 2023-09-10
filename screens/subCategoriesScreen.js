import SubCategoryItem from "../components/SubCategoryItem";
import SubCategoryIcon from "../components/SubCategoryIcon";
import { SUBCATEGORIES } from "../data/categoriesData";
import { SUBCATICON } from "../data/categoriesData";
import { CATEGORIES } from "../data/categoriesData";
import { View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {useLayoutEffect} from 'react';


function SubCategoriesScreen({ route, navigation }) {

    const catId = route.params.categoryId;

    const displayedSubCat=SUBCATEGORIES.filter((subCatItem)=>{
        return subCatItem.categoryId.indexOf(catId)>=0;
    });

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
    
    navigation.setOptions({
        title: categoryTitle
    });
    }, [catId, navigation]);
    

    const displayedSubcatIcon=SUBCATICON.filter((subCatIconItem)=>{
        return subCatIconItem.categoryId.indexOf(catId)>=0;
    });


    function renderSubCategory(itemData) {
        return <SubCategoryItem title={itemData.item.title} color={itemData.item.color} icon={itemData.item.icon} id={itemData.item.id}/>
    }

    function renderSubCategoryIcon(itemData) {
        return <SubCategoryIcon icon={itemData.item.icon}/>
    }

    return (
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <FlatList data={displayedSubcatIcon} keyExtractor={(item)=>item.id} renderItem={renderSubCategoryIcon} scrollEnabled={false} style={{marginTop:50}} /> 
        <FlatList data={displayedSubCat} keyExtractor={(item)=>item.id} renderItem={renderSubCategory} scrollEnabled={false} numColumns={2} style={{marginTop:50}} />
    </View>
    </ScrollView>
    )
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1,
        backgroundColor:'#e6e6fa',

    },
    container: {
        flex: 1,
        padding:10,
        backgroundColor:'#e6e6fa',
        
    },
   
});