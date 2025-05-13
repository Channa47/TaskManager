import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { CategoryType } from '../types';


// inside CategoryModal/index.tsx
type Props = {
    visible: boolean;
    onClose: () => void;
    category: CategoryType | null;
    onViewMeals: (category: string) => void;
};

const CategoryModal = ({ visible, onClose, category, onViewMeals }: Props) => {
    if (!category) return null;

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                        <Text style={styles.title}>{category.strCategory}</Text>
                        <Text style={styles.description}>{category.strCategoryDescription}</Text>

                        <TouchableOpacity
                            onPress={() => {
                                onViewMeals(category.strCategory);
                                onClose();
                            }}
                            style={styles.actionButton}
                        >
                            <Text style={styles.actionText}>View Recipes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};


export default CategoryModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        padding: 16,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        maxHeight: '80%',
    },
    scrollContent: {
        padding: 16,
        alignItems: 'center',
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#f4511e',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 6,
    },
    closeText: {
        color: '#fff',
        fontSize: 16,
    },
    actionButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 6,
        marginBottom: 10,
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
    },
});
