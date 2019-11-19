import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
 } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
})

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
            this.props.navigation.navigate('Onboarding')
        } else if(! await AsyncStorage.getItem('token')){
            this.props.navigation.navigate('Auth')
        } else {
            this.props.navigation.navigate('Home')
        }
      }

}

export default LoadingScreen
