import * as React from "react";
import { StyleSheet, TextInput, TextInputProps, View, Text } from "react-native";
import { DODGER_BLUE, SILVER, TORCH_RED } from "../../../styles/colors";

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
                    selectionColor={DODGER_BLUE}
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
        color: TORCH_RED
    },
    textInput: {
        height: 40,
        borderColor: SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;