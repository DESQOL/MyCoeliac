
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { DodgerBlue, White } from '../../../styles/config/colors'

interface Props {
    disabled?: boolean;
  label: string;
  onPress: () => void;
}

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
      <TouchableOpacity style={containerStyle} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DodgerBlue,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  containerEnabled: {
    opacity: 1
  },
  containerDisabled: {
    opacity: 0.3
  },
  text: {
    color: White,
    textAlign: "center",
    height: 20
  }
});

export default Button;