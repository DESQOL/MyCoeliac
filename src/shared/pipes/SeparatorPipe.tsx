import * as React from 'react';
import { View } from 'react-native';
import { GrayLighter } from '../../styles/config/Colors';

const styles = {
    separator: {
        height: 1,
        backgroundColor: GrayLighter,
    }
};

// Use as separator for Flatlist components
export default function SeparatorPipe() {
    return (
        <View
            style={styles.separator}
        />
    );
}
