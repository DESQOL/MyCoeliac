import React from 'react';
import { Button } from 'react-native-elements';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  type: 'solid' | 'clear' | 'outline';
  buttonStyle?: StyleProp<ViewStyle>;
}

export default function PrimaryButton({
    title,
    type,
    buttonStyle,
}: PrimaryButtonProps): JSX.Element {
    return (
        <Button buttonStyle={buttonStyle} title={title} type={type} raised={true} />
    );
}
