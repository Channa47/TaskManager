import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    StyleSheet,
    ScrollView,
} from 'react-native';

const MealCard = ({ item }: { item: any }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.name}>{item.strMeal}</Text>
            <Text style={styles.description} numberOfLines={4}>
                {item.strInstructions}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Get Full Recipe</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal visible={modalVisible} animationType="slide">
                <ScrollView contentContainerStyle={styles.modalContent}>
                    <Image source={{ uri: item.strMealThumb }} style={styles.modalImage} />
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalheadertext}>Dish CateGory : {item?.strCategory} </Text>
                        <Text style={styles.modalheadertext}>Area : {item?.strArea} </Text>
                    </View>

                    <Text style={styles.modalInstructions}>{item.strInstructions}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>
        </View>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 12,
        margin: 10,
        borderRadius: 10,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        marginTop: 6,
        color: '#555',
    },
    button: {
        backgroundColor: '#ff7043',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },
    modalContent: {
        padding: 16,
    },
    modalImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    modalTitle: {

        padding: 10,
    },
    modalheadertext: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    modalInstructions: {
        fontSize: 16,
        color: '#444',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
    },
});
