import { StyleSheet } from 'react-native';
import { White } from './config/Colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: White,
        flex: 1,
        justifyContent: 'space-between'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%'
    },
    loading: { 
        flex: 1, 
        padding: 20 
    },
    logo: {
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'contain',
        width: '100%'
    }
});
