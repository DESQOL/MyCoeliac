import React from 'react';
import { Button } from 'react-native';

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
          title='Go to Home'
          onPress={() => this.handlePress()}
        />
      );
    }
    private handlePress(){
      this.props.navigation.navigate("Home");
    }
  
  }

export default LoginScreen;
