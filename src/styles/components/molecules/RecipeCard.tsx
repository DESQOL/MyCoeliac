import { StyleSheet } from 'react-native';
import { Gray, GrayLighter, White } from '../../config/Colors';

export default StyleSheet.create({
    arrowLogo: {
        marginLeft: 8
    },

    button: {
        borderColor: Gray,
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    container: {
        backgroundColor: White,
        display: 'flex',
        elevation: 5,
        flexDirection: 'row',
        flex: 0,
        height: 300,
        margin: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        shadowColor: Gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        width: 350

    },

    divider: {
        borderBottomColor: GrayLighter,
        borderBottomWidth: 1,
        width: '100%',
    },

    image: {
        alignSelf: 'center',
        backgroundColor: GrayLighter,
        flex: 1,
        height: '100%',
        marginRight: 5,
    },

    plusLogo: {
        marginRight: 8
    },

    readButton: {
        paddingLeft: 0
    },

    readContentContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%'
    },

    recipeContentContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
    },

    title: {
        marginBottom: 10,
        marginTop: 10,
    }
});
