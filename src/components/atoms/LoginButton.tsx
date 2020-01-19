import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DodgerBlue, White, WhiteTransparent } from '../../styles/config/Colors';

interface Props {
    disabled?: boolean;
    label: string;
    onPress: () => void;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: DodgerBlue,
        borderColor: WhiteTransparent,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        marginBottom: 12,
        paddingVertical: 12,
        width: '100%'
    },
    containerDisabled: {
        opacity: 0.3
    },
    containerEnabled: {
        opacity: 1
    },
    text: {
        color: White,
        height: 20,
        textAlign: 'center'
    }
});

class Button extends React.Component<Props> {
    render() {
        const { disabled, label, onPress } = this.props;
        const containerStyle = [
            styles.container,
            disabled
                ? styles.containerDisabled
                : styles.containerEnabled
        ];
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                style={containerStyle}
            >
                <Text style={styles.text}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
