import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CategoryType } from '../types';

export type Props = {
    category: CategoryType;
    onPress?: (category: CategoryType) => void;
};

const CategoryCard = ({ category, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress?.(category)}>
            <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{category.strCategory}</Text>
                <Text numberOfLines={2} style={styles.description}>
                    {category.strCategoryDescription}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 4, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    image: {
        width: 100,
        height: 100,
    },
    textContainer: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});
