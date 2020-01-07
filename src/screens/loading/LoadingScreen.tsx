import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from 'src/styles/screens/LoadingScreen';

interface Props {
    navigation: any;
};

/**
 * The entry screen for deciding what othere screen to go to, or setting up services.
 */
class LoadingScreen extends React.Component<Props> {
    constructor(props: Props){
        super(props);
        this.decideScreen();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
     
    /**
     * Will decide what screen to go to based on: login, onboarding, not-loggedin.
     */
    private async decideScreen(){
        if(! await AsyncStorage.getItem('onboarding')){
            this.props.navigation.navigate('Onboarding');
        } else if(! await AsyncStorage.getItem('token')){
            this.props.navigation.navigate('Auth');
        } else {
            this.props.navigation.navigate('Home');
        }
    }

}

export default LoadingScreen;

