import React from 'react';
import { TextInput, StyleProp, ViewStyle } from 'react-native';

interface PrimaryTextFieldProps {
  textFieldStyle?: StyleProp<ViewStyle>;
  onChangeText?: (input: string) => void;
  value: string;
}

export default function PrimaryTextField(props: PrimaryTextFieldProps) {
    return (
        <TextInput
            style={props.textFieldStyle}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}
