import React from 'react';
import { Button } from 'react-native-elements';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { ThemeBlue } from '../../../styles/config/colors';

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
            onPress={onClick}
            buttonStyle={styles.button}
            titleStyle={styles.text}
            containerStyle={componentStyle}
            title={title}
            type={type}
            raised={true}
        />
    );
}
