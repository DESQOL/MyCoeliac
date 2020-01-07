import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/components/atoms/Dropdown';

interface DropdownProps {
  dropdownStyle?: StyleProp<ViewStyle>;
  onValueChange: (input: number) => void;
  selectedValue: string;
  dropdownValues: string[];
  onDropdownToggle: any;
  name: string;
  isCollapsed?: boolean;
}

export default function Dropdown(props: DropdownProps) {
    return (
        <View style={styles.dropdownContainer}>
            <ModalDropdown
                defaultValue="Category"
                animated={false}
                options={props.dropdownValues}
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={styles.dropdownListText}
                onSelect={(input: number) => props.onValueChange(input)}
                onDropdownWillShow={() => props.onDropdownToggle()}
                onDropdownWillHide={() => props.onDropdownToggle()}
            />

            <Icon
                style={styles.icon}
                name={props.isCollapsed ? 'chevron-up' : 'chevron-down'}
                size={12}
                color="black"
            />
        </View>
    );
}
