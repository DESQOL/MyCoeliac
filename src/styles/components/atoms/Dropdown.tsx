import { StyleSheet } from 'react-native';
import { GrayLight, GrayLightest } from '../../config/Colors';

export default StyleSheet.create({
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
