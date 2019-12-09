import React from 'react';
import { StyleProp, ViewStyle, Picker } from 'react-native';

interface DropdownProps {
  dropdownStyle?: StyleProp<ViewStyle>;
  onValueChange: (input: string) => void;
  selectedValue: string;
  dropdownValues: string[];
}

export default function Dropdown(props: DropdownProps) {
    return (
        <Picker
            selectedValue={props.selectedValue}
            style={props.dropdownStyle}
            onValueChange={props.onValueChange}>
            {props.dropdownValues.map((item, key) => (
                <Picker.Item key={key} label={item} value={item} />
            ))}
        </Picker>
    );
}
