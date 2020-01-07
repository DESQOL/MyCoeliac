import { StyleSheet } from 'react-native';
import { GrayLightest } from '../../config/Colors';
import { FONT_SIZE_20, FONT_WEIGHT_BOLD } from '../../config/Fonts';

export default StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        display: 'flex',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    logoContainer: {
        display: 'flex',
        paddingLeft: 13,
        position: 'absolute',
        width: '100%',
    },

    title: {
        fontSize: FONT_SIZE_20
    },

    titleLogo: {
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
    }
});
