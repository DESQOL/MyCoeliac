import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GrayLight, GrayLightest } from '../../styles/config/Colors';
import { FONT_SIZE_20, FONT_WEIGHT_BOLD } from '../../styles/config/Fonts';

interface NavHeaderProps {
    title: string;
    navIcon: boolean;
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        display: 'flex',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    logoContainer: {
        display: 'flex',
        paddingLeft: 13,
        position: 'absolute',
        width: '100%',
    },

    title: {
        fontSize: FONT_SIZE_20
    },

    titleLogo: {
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
    }
});

export default function NavHeader({ title, navIcon }: NavHeaderProps): JSX.Element {
    return (
        <View style={styles.header}>
            {navIcon ? <View style={styles.logoContainer}><Icon name={'angle-left'} size={45} color={GrayLight} /></View> : null}
            {navIcon ? <Text style={styles.title}>{title}</Text> : <Text style={styles.titleLogo}>{title}</Text>}
        </View>
    );
}
