import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { GrayLightest } from '../../styles/config/colors';
import { FONT_SIZE_20, FONT_WEIGHT_BOLD } from '../../styles/config/font';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        display: 'flex',
        height: '15%',
        justifyContent: 'center',
        width: '100%',
    },

    title: {
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
    },
});

export default function AppHeader(): JSX.Element {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>MyCooliac</Text>
        </View>
    );
}
