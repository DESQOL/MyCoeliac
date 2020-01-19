import React from 'react';
import { Button } from 'react-native-elements';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { ThemeBlue } from '../../styles/config/Colors';

interface PrimaryButtonProps {
    title: string;
    type: 'solid' | 'clear' | 'outline';
    componentStyle?: StyleProp<ViewStyle>;
    onClick?: () => void;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: ThemeBlue,
        width: '100%',
    },
    text: {
        alignItems: 'center',
        fontWeight: 'normal',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

export default function PrimaryButton({
    title,
    type,
    componentStyle,
    onClick,
}: PrimaryButtonProps): JSX.Element {
    return (
        <Button
            buttonStyle={styles.button}
            containerStyle={componentStyle}
            onPress={onClick}
            raised
            title={title}
            titleStyle={styles.text}
            type={type}
        />
    );
}
