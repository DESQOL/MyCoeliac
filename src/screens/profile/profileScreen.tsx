import React from 'react';
import { View, Image, Text } from 'react-native';
import Button from '../../components/atoms/login/button';
import { name } from '../../../app.json';
import { GrayLight } from '../../styles/config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewPagerType from '@react-native-community/viewpager';
import TabViewPager from '../../components/molecules/tabViewPager';
import styles from '../../styles/ProfileScreen';

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
                <View style={styles.seperator}/>
                <View style={styles.containerButtonMiddle}>
                    <Button
                        label="Edit Profile"
                        onPress={() => console.log('pressed')}
                    />
                </View>

                <View style={styles.containerViewPagerGroup}>
                    <TabViewPager tabs={[{ id: 0, text: 'Recipes' }, { id: 1, text: 'Favorites' }]} />

                </View>
            </View>
        );
    }

}

export default ProfileScreen;
