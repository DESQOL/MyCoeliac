import * as React from 'react';
import { View } from 'react-native';
import styles from 'src/styles/components/atoms/SeparatorPipe';

// Use as separator for Flatlist components
export default function SeparatorPipe() {
    return (
        <View
            style={styles.separator}
        />
    );
}
