import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/atoms/LoginButton';
import { GrayLight } from '../../styles/config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewPagerType from '@react-native-community/viewpager';
import TabViewPager from '../../components/molecules/TabViewPager';
import styles from '../../styles/screens/ProfileScreen';

import NavHeader from '../../components/atoms/NavHeader';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any;
}

interface State {
    currentViewPageIndex: number;
}

/**
 * ProfileScreen screen
 */
class ProfileScreen extends React.Component<Props, State> {

    viewPager = React.createRef<ViewPagerType>();
    // textInputComponents = React.createRef<Text[]>();

    constructor(props: Props) {
        super(props);
    }

    async signout() {
        console.log('test');
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }
    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.container}>
                <NavHeader title={'Profile'} navIcon={true}/>
                <View style={styles.containerProfileAndSettings}>
                    <View style={styles.containerProfile}>
                        <View style={styles.containerProfileImage}>
                            <Image style={styles.avatar}
                                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}/>
                        </View>
                        <View style={styles.containerProfileDescription}>
                            <View style={styles.containerText}>
                                <Text>
                                    Sophia Mars
                                </Text>
                                <Text>
                                    {'Welcome to my page!'}
                                </Text>
                            </View>
                            <View style={styles.containerStats}>
                                <View style={styles.containerStatsText}>
                                    <Icon name="book" size={30} color={GrayLight}/>
                                    <Text style={styles.TextWidth}>20</Text>

                                </View>
                                <View style={styles.containerStatsText}>
                                    <Icon name="heart" size={30} color={GrayLight}/>
                                    <Text style={styles.TextWidth}>20</Text>

                                </View>
                                <View style={styles.containerStatsText}>

                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.containerProfileSettingsButton}>
                        <TouchableOpacity onPress={() => this.signout()}>
                            <Icon name="sign-out" size={30} color="lightgray"/>
                            <Text style={styles.textLogout}>logout </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.seperator}/>
                <View style={styles.containerButtonMiddle}>
                    <Button
                        label="Edit Profile"
                        onPress={() => console.log('pressed')}
                    />
                </View>

                <View style={styles.containerViewPagerGroup}>
                    <TabViewPager tabs={[{ id: 0, text: 'Recipes' }, { id: 1, text: 'Favorites' }]}/>

                </View>
            </View>
        );
    }

}

export default ProfileScreen;
