import { StyleSheet } from 'react-native';
import { GrayLighter, GrayLightest } from './config/colors';

export default StyleSheet.create({
    TextStats: {
        flex: 3,
    },
    TextWidth: {
        marginStart: 5
    },
    avatar: {
        borderColor: 'white',
        borderRadius: 63,
        borderWidth: 4,
        height: 100,
        marginBottom: 10,
        width: 100,
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerButtonMiddle: {
        alignSelf: 'center',
        flex: 3,
        justifyContent: 'center',
        width: '60%',
    },
    containerProfile: {
        flex: 12,
        flexDirection: 'row',
       
    },
    containerProfileAndSettings: {
        flex: 6,
        flexDirection:'row',
        marginLeft: 15
    },
    containerProfileDescription: {
        flex: 8,
        flexDirection: 'column'
    },
    containerProfileImage: {
        flex: 3,
        justifyContent: 'center'
    },
    containerProfileSettingsButton: {
        alignItems: 'flex-start',
        flex: 1,
        marginTop:2
    },
    containerStats: {
        flex: 3,
        flexDirection: 'row',
        textAlignVertical: 'center'
    },
    containerStatsText: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        flex: 7,
        justifyContent: 'flex-end',
        paddingBottom: 45
    },
    containerViewPagerGroup: {
        flex: 12,
        marginEnd: 10,
        marginStart: 10
    },
    header: {
        alignItems: 'center',
        backgroundColor: GrayLightest,
        flex: 2,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    seperator:{
        backgroundColor: GrayLighter,
        height:2,
        marginEnd:15,
        marginLeft: 15,
    },
    test: {
        padding: 2
    },

});
