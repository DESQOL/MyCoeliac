import * as React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { DodgerBlue } from '../../styles/config/Colors';
import styles from '../../styles/components/atoms/FormTextInput';

type Props = TextInputProps & {
    error?: string;
};

class FormTextInput extends React.Component<Props> {

    textInputRef = React.createRef<TextInput>();

    focus = () => {
        if (this.textInputRef.current) {
            this.textInputRef.current.focus();
        }
    };

    render() {
        const { error, style, ...otherProps } = this.props;
        return (
            <View style={[styles.container, style]}>
                <Text style={styles.errorText}>{error || ''}</Text>
                <TextInput
                    ref={this.textInputRef}
                    selectionColor={DodgerBlue}
                    style={styles.textInput}
                    {...otherProps}
                />

            </View >
        );
    }
}

export default FormTextInput;
