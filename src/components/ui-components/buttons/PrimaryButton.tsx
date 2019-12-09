import React from 'react';
import { Button } from 'react-native-elements';
import { StyleProp, ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  type: 'solid' | 'clear' | 'outline';
  buttonStyle?: StyleProp<ViewStyle>;
  onClick?: () => void;
}

export default function PrimaryButton({
    title,
    type,
    buttonStyle,
    onClick,
}: PrimaryButtonProps): JSX.Element {
    return (
        <Button
            onPress={onClick}
            buttonStyle={buttonStyle}
            title={title}
            type={type}
            raised={true}
        />
    );
}
