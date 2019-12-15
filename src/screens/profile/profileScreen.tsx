import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../../components/atoms/login/button';
import { name } from '../../../app.json';
import { GrayLight, LightSlateGray, GrayDolphin, GrayLightest, Transparent, GrayLighter } from '../../styles/config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewPagerType from '@react-native-community/viewpager';
import TabViewPager from '../../components/molecules/tabViewPager';
import tab from '../../components/molecules/tabViewPager'
interface Props {
    navigation: any;
}

interface State {
    currentViewPageIndex: number
}

// Test styling, will be replaced later.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 2,
        backgroundColor: GrayLightest,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    containerProfileAndSettings: {
        flex: 6,
        marginLeft: 15,
        flexDirection:'row'
    },
    containerProfile: {
        flex: 10,
        flexDirection: 'row',
        borderBottomColor: GrayLight,
        borderBottomWidth: 2,
    },
    containerProfileSettingsButton: {
        flex: 1,
        marginTop:2,
        alignItems: 'center'
    },
    containerProfileImage: {
        flex: 3,
        justifyContent: 'center'
    },
    containerProfileDescription: {
        flex: 8,
        flexDirection: 'column'
    },
    containerText: {
        flex: 7,
        paddingBottom: 45,
        justifyContent: "flex-end"
    },
    TextWidth: {
        marginStart: 5
    },
    TextStats: {
        flex: 3,
    },
    containerStats: {
        flex: 3,
        flexDirection: 'row',
        textAlignVertical: "center"
    },
    containerStatsText: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    containerButtonMiddle: {
        flex: 3,
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
    },
    containerViewPagerGroup: {
        flex: 12,
        marginStart: 10,
        marginEnd: 10
    },
    test: {
        padding: 2
    },

});

/**
 * ProfileScreen screen
 */
class ProfileScreen extends React.Component<Props, State> {

    viewPager = React.createRef<ViewPagerType>();
    //textInputComponents = React.createRef<Text[]>();

    constructor(props: Props) {
        super(props);

    }

    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{name}</Text>
                </View>
                <View style={styles.containerProfileAndSettings}>
                    <View style={styles.containerProfile}>
                        <View style={styles.containerProfileImage}>
                            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                        </View>
                        <View style={styles.containerProfileDescription}>
                            <View style={styles.containerText}>
                                <Text >
                                    Sophia Mars
                            </Text>
                                <Text >
                                    {'Welcome to my page!'}
                                </Text>
                            </View>
                            <View style={styles.containerStats}>
                                <View style={styles.containerStatsText}>
                                    <Icon name="book" size={30} color={GrayLight} />
                                    <Text style={styles.TextWidth}>20</Text>

                                </View>
                                <View style={styles.containerStatsText}>
                                    <Icon name="heart" size={30} color={GrayLight} />
                                    <Text style={styles.TextWidth}>20</Text>

                                </View>
                                <View style={styles.containerStatsText}>

                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.containerProfileSettingsButton}>
                            <TouchableOpacity>
                                <Icon name="cog" size={30} color="lightgray" />

                            </TouchableOpacity>
                        </View>
                </View>

                <View style={styles.containerButtonMiddle}>
                    <Button
                        label="Edit Profile"
                        onPress={() => console.log("pressed")}
                    />
                </View>
                <View style={styles.containerViewPagerGroup}>
                    <TabViewPager  tabs={[{id:0,text:'Recipes'},{id:1,text:'Favorites'}]}/>
     
                </View>
            </View>
        );
    }

}

export default ProfileScreen;
