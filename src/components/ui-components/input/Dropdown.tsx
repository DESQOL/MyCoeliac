import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { GrayLightest, GrayLight } from '../../../styles/config/colors';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    dropdown: {
        display: 'flex',
        flexDirection: 'column',
        height: 55,
        justifyContent: 'center',
        width: '100%',
    },

    dropdownContainer: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },

    dropdownList: {
        marginTop: 16,
        width: '100%',
    },

    dropdownListText: {
        backgroundColor: GrayLight,
        fontSize: 14,
        height: 55,
    },

    dropdownText: {
        fontSize: 14,
        marginLeft: 5,
    },

    icon: {
        marginLeft: 'auto',
        marginRight: 20,
    },
});

interface DropdownProps {
  dropdownStyle?: StyleProp<ViewStyle>;
  onValueChange: (input: number) => void;
  selectedValue: string;
  dropdownValues: string[];
  onDropdownToggle: any;
  name: string;
  isCollapsed: boolean;
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
