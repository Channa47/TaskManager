import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import MealCard from '../components/MealCard';

type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

type RouteParams = {
    category: string;
};

const MealsScreen = () => {
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { category } = route.params;


    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals || []);
                console.log(data.meals[0])
            });

    }, [category]);

    return (
        <View style={styles.container}>
            <AppHeader title='Select Meal' />
            <FlatList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => <MealCard item={item} />}
            />
        </View>
    );
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
});
