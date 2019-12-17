import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GrayLight, GrayLightest } from '../../styles/config/Colors';
import { FONT_SIZE_17, LINE_HEIGHT_24, LINE_HEIGHT_16 } from '../../styles/config/Fonts';

interface MenuProps {
    title: string;
    navIcon?: boolean;
    onPress: () => void;
}

const styles = StyleSheet.create({
    icon: {
        marginEnd: LINE_HEIGHT_16,
        marginLeft: 'auto',

    },
    menuButton: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        flexDirection: 'row',
        padding: 5
    },
    menuText: {
        fontSize: FONT_SIZE_17,
        marginStart: LINE_HEIGHT_24
    }
});

export default function MenuButton({ title, onPress }: MenuProps): JSX.Element {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.menuButton} >
                <Text style={styles.menuText}>
                    {title}
                </Text>
                <Icon name={'angle-right'} size={45} color={GrayLight} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
}
