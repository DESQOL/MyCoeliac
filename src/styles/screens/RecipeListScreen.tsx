import { StyleSheet } from 'react-native';
import { Gray, Transparent, White } from '../config/Colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },

    input: {
        backgroundColor: White,
        elevation: 3,
        marginBottom: 5,
        shadowColor: Gray,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        width: '100%'
    },

    screenContainer: {
        flex: 1,
    },

    searchbar: {
        backgroundColor: Transparent,
        borderBottomColor: Transparent,
        borderTopColor: Transparent,
    }
});
