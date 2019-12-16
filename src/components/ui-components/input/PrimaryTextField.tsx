import React from 'react';
import { TextInput, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Gray, GrayLightest } from '../../../styles/config/colors';

interface PrimaryTextFieldProps {
  textFieldStyle?: StyleProp<ViewStyle>;
  onChangeText: (input: string) => void;
  value: string;
  name: string;
  type?: 'username' | 'password' | 'email' | 'name';
  placeHolder?: string;
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: GrayLightest,
        fontStyle: 'italic',
        shadowColor: Gray,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        width: '100%',
    },
});

export default function PrimaryTextField(props: PrimaryTextFieldProps) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeHolder}
        />
    );
}
