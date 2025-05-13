import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryCard from '../components/CategoryCard';
import { CategoryType, RootStackParamList } from '../types';
import AppHeader from '../components/AppHeader';
import CategoryModal from '../components/CategoryModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function Home() {
    const [recipes, setRecipes] = useState<CategoryType[]>();
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleViewMeals = (category: string) => {
        navigation.navigate('Meals', { category });
    };

    const fetchAllRecipes = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const data = await res.json();
            setRecipes(data?.categories);
            // console.log(data?.categories[0])
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchAllRecipes();
    }, []);

    const handleCategoryPress = (category: CategoryType) => {
        setSelectedCategory(category);
        setModalVisible(true);
    };
    return (
        <View style={styles.mainContainer}>
            <>
                <AppHeader title='Welcome' />
                <FlatList
                    data={recipes}
                    keyExtractor={(item) => item?.idCategory}
                    renderItem={({ item }) => <CategoryCard category={item} onPress={handleCategoryPress} />}
                />
                <CategoryModal
                    visible={isModalVisible}
                    category={selectedCategory}
                    onClose={() => setModalVisible(false)}
                    onViewMeals={handleViewMeals}
                />
            </>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})