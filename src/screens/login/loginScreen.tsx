import React from 'react';
import {Button} from 'react-native';
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { any } from 'prop-types';

interface Props {
  navigation: any;
}

class LoginScreen extends React.Component<Props> {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      return (
        <Button
          title=""
          onPress={() => this.handlePress}
        />
      );
    }
    private handlePress(){
      this.props.navigation.navigate("Home");
      
    }
  
  }

export default LoginScreen;
