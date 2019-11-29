import * as React from 'react';
import { View } from 'react-native';
import { GrayLighter } from '../../styles/config/colors';

const styles = {
    separator: {
        height: 1,
        backgroundColor: GrayLighter,
    }
};

export default function SeparatorPipe() {
    return (
        <View
            style={styles.separator}
        />
    );
}
