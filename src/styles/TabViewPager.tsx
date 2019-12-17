import { GrayDolphin, Black } from '../styles/config/Colors';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../styles/config/Mixins';

// Test styling, will be replaced later.
export default StyleSheet.create({

    activeText: {
        color: Black,
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
    },
    containerViewPager: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',

    },
    image: {
        height:200,
        width: widthPercentageToDP('31')
    },
    innerViewPagerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    },
    scrollViewPager: {
        flexDirection: 'column',
        flexWrap: 'wrap',

    },
    tabSelection: {
        flexDirection: 'row',
        marginBottom:10,
        marginStart:10,
    },

    tabs: {
        alignSelf: 'center',
        color: GrayDolphin,
        fontSize:16,
        textAlign: 'center'

    },

    test: {
        padding: 2
    }

});
