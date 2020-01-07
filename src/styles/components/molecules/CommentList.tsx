import { StyleSheet } from 'react-native';
import { PrimaryGray } from '../../config/Colors';

export default StyleSheet.create({
    avatar: {
        justifyContent: 'flex-start',
    },
    input: {
        borderColor: PrimaryGray,
        borderWidth: 1,
        height: 40,
        width: 180,
    },
    newComment: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 20,
    },
    primaryButton: {
        width: 100,
    },
    rating: {
        marginRight: 40,
        marginTop: 10,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
});
