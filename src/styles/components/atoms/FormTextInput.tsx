import { StyleSheet } from 'react-native';
import { Silver, TorchRed } from '../../config/Colors';

export default StyleSheet.create({
    container: {
        marginBottom: 10
    },
    errorText: {
        color: TorchRed,
        height: 20
    },
    textInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Silver,
        height: 40,
        marginBottom: 20
    }
});
