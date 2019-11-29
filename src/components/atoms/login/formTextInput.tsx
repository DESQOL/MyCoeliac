import * as React from "react";
import { StyleSheet, TextInput, TextInputProps, View, Text } from "react-native";
import { DodgerBlue, Silver, TorchRed } from "../../../styles/config/colors";

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
                 <Text style={styles.errorText}>{error || ""}</Text>
                <TextInput
                    ref={this.textInputRef}
                    selectionColor={DodgerBlue}
                    style={[styles.textInput]}
                    {...otherProps}
                />
               
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    errorText: {
        height: 20,
        color: TorchRed
    },
    textInput: {
        height: 40,
        borderColor: Silver,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;