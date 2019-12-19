import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Button from '../../components/atoms/LoginButton';
import FormTextInput from '../../components/atoms/FormTextInput';
// import imageLogo from "../assets/images/logo.png";
import strings from '../../values/strings';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../styles/Login';
import { validateEmail } from '../../utils/Validation';

interface Props {
  navigation: any;
}

interface State {
  email: string;
  password: string;
  emailTouched: boolean;
  passwordTouched: boolean;
  isLoading: boolean;
}

class LoginScreen extends React.Component<Props, State> {
  readonly state: State = {
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false,
      isLoading: false
  };

  passwordInputRef = React.createRef<FormTextInput>();

  handleEmailChange = (email: string) => {
      this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
      this.setState({ password: password });
  };

  handleLoginPress = async () => {
      let responseJson: any;
      this.setState({ isLoading: true });
      try {
          const response = await fetch(
              'https://facebook.github.io/react-native/movies.json',
          );
          responseJson = await response.json();

      } catch (error) {
          console.error(error);
          this.setState({ isLoading: false });
          return;
      }
      if (responseJson.token) {
          await AsyncStorage.setItem('token', responseJson.token);
      } else {
      // incase request isent valid do this.
          this.props.navigation.navigate('Home');
      }
  };

  // ...and we update them in the input onBlur callback
  handleEmailBlur = () => {
      this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
      this.setState({ passwordTouched: true });
  };

  /*
   * When the "next" button is pressed, focus the password
   * input
   */
  handleEmailSubmitPress = () => {
      if (this.passwordInputRef.current) {
          this.passwordInputRef.current.focus();
      }
  };
 
  render() {
      const {
          email,
          password,
          emailTouched,
          passwordTouched
      } = this.state;
      let emailError = undefined;
      console.log(validateEmail(email));
      if(emailTouched){
          if(!email || !validateEmail(email)){
              emailError = strings.EMAIL_REQUIRED;
          } else {
              emailError = undefined;
          }
      }
    
      const passwordError =
      !password && passwordTouched
          ? strings.PASSWORD_REQUIRED
          : undefined;

      if (this.state.isLoading) {
          return (
              <View style={styles.loading}>
                  <ActivityIndicator />
              </View>
          );
      }
      return (
          <View
              style={styles.container}
          >
              <View style={styles.form}>
                  <FormTextInput
                      value={this.state.email}
                      onChangeText={this.handleEmailChange}
                      onSubmitEditing={this.handleEmailSubmitPress}
                      placeholder={strings.EMAIL_PLACEHOLDER}
                      autoCorrect={false}
                      keyboardType="email-address"
                      returnKeyType="next"
                      onBlur={this.handleEmailBlur}
                      error={emailError}
                  />
                  <FormTextInput
                      ref={this.passwordInputRef}
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={this.handlePasswordChange}
                      placeholder={strings.PASSWORD_PLACEHOLDER}
                      returnKeyType='done'
                      onBlur={this.handlePasswordBlur}
                      error={passwordError}
                  />
                  <Button
                      label={strings.LOGIN}
                      onPress={this.handleLoginPress}
                      disabled={!!emailError || !password}
                  />
              </View>
          </View>);
  }
}

export default LoginScreen;