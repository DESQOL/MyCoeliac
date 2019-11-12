import React from 'react';
import {Button} from 'react-native';
import { NavigationInjectedProps, withNavigation } from "react-navigation";

class LoginScreen extends React.Component <Partial<NavigationInjectedProps>> {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => this.handlePress}
        />
      );
    }
    private handlePress(){
      
    }
  
  }

export default LoginScreen;