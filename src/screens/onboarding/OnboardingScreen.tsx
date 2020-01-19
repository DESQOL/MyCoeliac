import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewPagerType from '@react-native-community/viewpager';
import AsyncStorage from '@react-native-community/async-storage';
import TermsOfAgreement from '../onboarding/TermsOfAgreement';
import WelcomeScreen from './WelcomeScreen';
import PermissionScreen from './PermissionScreen';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ViewPager = require('@react-native-community/viewpager');

interface Props {
    navigation: any;
}

interface State {
    pagePosition: number;
    accepted: boolean;
}

// Test styling, will be replaced later.
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent:'center'
    },
    pageContainer: {
        flex: 0.9,
        width: '80%',
    },
    pageStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    viewPager: {
        flex: 1,
    }
});

/**
 * Onboarding screen
 */
class OnboardingScreen extends React.Component<Props, State> {

    viewPager = React.createRef<ViewPagerType>();

    constructor(props: Props) {
        super(props);
        this.pageChanged = this.pageChanged.bind(this);
        this.handleViewPagerClick = this.handleViewPagerClick.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.state = {
            pagePosition: 0,
            accepted: false
        };
    }

    // Test page's will be replaced later.
    render() {
        return (
            <ViewPager
                initialPage={0}
                onPageSelected={(EventHandle: any) => this.pageChanged(EventHandle.nativeEvent.position)}
                ref={this.viewPager}
                style={styles.viewPager}
            >
                <View
                    key='1'
                    style={styles.pageStyle}
                >
                    <View style={styles.pageContainer}>
                        <WelcomeScreen onPress={() => { this.handleViewPagerClick(); }} />
                    </View>
                </View>
                <View
                    key='2'
                    style={styles.pageStyle}
                >
                    <View style={styles.pageContainer}>
                        <PermissionScreen onPress={() => { this.handleViewPagerClick(); }} />
                    </View>
                </View>
                <View
                    key='3'
                    style={styles.buttonContainer}
                >
                    <View style={styles.pageContainer}>
                        <TermsOfAgreement onPress={() => this.handleLastPage()} />
                    </View>
                </View>
            </ViewPager>
        );
    }

    private handleViewPagerClick() {
        this.viewPager.current!.setPage(this.state.pagePosition + 1);
    }

    private pageChanged(e: Event) {
        this.setState({ pagePosition: e as number });
    }

    async handleLastPage() {
        try {
            await AsyncStorage.setItem('onboarding', 'true');
            this.props.navigation.navigate('Auth');
        } catch (error) {
            console.log(error);
        }
    }

}

export default OnboardingScreen;
