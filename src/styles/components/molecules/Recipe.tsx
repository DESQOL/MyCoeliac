import { StyleSheet } from 'react-native';
import { FONT_SIZE_14, FONT_SIZE_17, FONT_SIZE_20, FONT_WEIGHT_BOLD } from '../../config/Fonts';
import { GrayLightest, ThemeBlue } from '../../config/Colors';

export default StyleSheet.create({
    buttonqrgenerator:{
        marginTop:10,width:'35%'
    },
    commentButton: {
        color: ThemeBlue,
        fontSize: FONT_SIZE_17,
        fontWeight: FONT_WEIGHT_BOLD
    },
    commentButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    description: {
        fontSize: FONT_SIZE_14,
    },
    duration: {
        position: 'absolute',
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: '100%',
    },

    qrgeneratorview:{
        flex:0,height:0,opacity:0,width:0
    },

    ratingContainer: {
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
    },

    recipeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 28,
        paddingRight: 28,
    },

    recipeContentContainer: {
        display: 'flex',
        marginBottom: 130,
    },

    recipeData: {
        marginBottom: 25,
    },

    recipeListItem: {
        backgroundColor: GrayLightest,
        padding: 5,
    },

    recipeListItemContent: {
        fontSize: 14,
        marginLeft: 8,
        marginRight: 8,
    },

    subtitle: {
        fontSize: FONT_SIZE_17,
        marginBottom: 10,
        marginTop: 10,
    },

    title: {
        fontSize: FONT_SIZE_20,
        marginBottom: 10,
        marginTop: 10,
    },

});
