import React from 'react';
import { TextInput, StyleProp, ViewStyle } from 'react-native';

interface PrimaryTextFieldProps {
  textFieldStyle?: StyleProp<ViewStyle>;
}

export default function PrimaryTextField({
    textFieldStyle,
}: PrimaryTextFieldProps) {
    const [value, onChangeText] = React.useState();

    return (
        <TextInput
            style={textFieldStyle}
            onChangeText={(text): void => onChangeText(text)}
            value={value}
        />
    );
}
