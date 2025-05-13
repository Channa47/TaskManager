import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

type Props = {
    children: React.ReactNode;
};

const CustomSafeAreaView = ({ children }: Props) => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', "bottom"]}>
            {children}
        </SafeAreaView>
    );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
