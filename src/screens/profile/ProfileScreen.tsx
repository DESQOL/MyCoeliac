import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
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
    isLoading: boolean;
    name: string;
}

/**
 * ProfileScreen screen
 */
class ProfileScreen extends React.Component<Props, State> {

    viewPager = React.createRef<ViewPagerType>();
    // textInputComponents = React.createRef<Text[]>();
    readonly state: State = {
        name: '',
        isLoading: false,
        currentViewPageIndex: 0
    };

    constructor(props: Props) {
        super(props);
    }

    async signout() {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        try {
            const response = await fetch('https://desqol.hihva.nl/user/profile', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-KEY': token
                },
            });
            responseJson = await response.json();
        } catch (error) {
            console.error(error);
            this.setState({ isLoading: false });
            return;
        }
        console.log(responseJson);
        this.setState({ name: responseJson.name });
    }
    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.container}>
                <NavHeader title={'Profile'} navIcon={true} />
                <View style={styles.containerProfileAndSettings}>
                    <View style={styles.containerProfile}>
                        <View style={styles.containerProfileImage}>
                            <Image style={styles.avatar}
                                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                        </View>
                        <View style={styles.containerProfileDescription}>
                            <View style={styles.containerText}>
                                <Text>
                                    {(this.state.name) ? this.state.name : 'Loading'}
                                </Text>
                                <Text>
                                    {'Welcome to my page!'}
                                </Text>
                            </View>
                            <View style={styles.containerStats}>
                                <View style={styles.containerStatsText}>

                                </View>
                                <View style={styles.containerStatsText}>

                                </View>
                                <View style={styles.containerStatsText}>

                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.containerProfileSettingsButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsScreen')}>
                            <Icon name="cog" size={30} color="lightgray" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.containerButtonMiddle}>

                </View>

                <View style={styles.containerViewPagerGroup}>
                    <TabViewPager tabs={[{ id: 0, text: 'Recipes' }]} />

                </View>
            </View>
        );
    }

}

export default ProfileScreen;
