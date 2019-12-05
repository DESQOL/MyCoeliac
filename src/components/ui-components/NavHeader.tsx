import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GrayLightest } from '../../styles/config/colors';
import { FONT_SIZE_20, FONT_WEIGHT_BOLD } from '../../styles/config/font';

interface NavHeaderProps {
    title: string;
    navIcon: boolean;
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        display: 'flex',
        height: '15%',
        justifyContent: 'center',
        width: '100%',
    },

    logo: {
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
    },

    title: {
        fontSize: FONT_SIZE_20
    }
});

export default function NavHeader({ title, navIcon }: NavHeaderProps): JSX.Element {
    return (
        <View style={styles.header}>
            {navIcon ? <Icon name={'arrow-left'} /> : null}
            {navIcon ? <Text style={styles.title}>{title}</Text> : <Text style={styles.logo}>{title}</Text>}
        </View>
    );
}
