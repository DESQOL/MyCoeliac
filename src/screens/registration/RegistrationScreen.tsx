import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Button from '../../components/atoms/LoginButton';
import FormTextInput from '../../components/atoms/FormTextInput';
// import imageLogo from "../assets/images/logo.png";
import strings from '../../values/strings';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../styles/screens/LoginScreen';
import { validateEmail } from '../../utils/Validation';

interface Props {
    navigation: any;
}

interface State {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    nameTouched: boolean;
    emailTouched: boolean;
    passwordTouched: boolean;
    passwordConfirmTouched: boolean;
    isLoading: boolean;
}

class RegistrationScreen extends React.Component<Props, State> {
    readonly state: State = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        nameTouched: false,
        emailTouched: false,
        passwordTouched: false,
        passwordConfirmTouched: false,
        isLoading: false
    };

    passwordInputRef = React.createRef<FormTextInput>();
    passwordInputConfirmRef = React.createRef<FormTextInput>();

    handleEmailChange = (email: string) => {
        this.setState({ email: email });
    };

    handleNameChange = (name: string) => {
        this.setState({ name: name });
    };

    handlePasswordChange = (password: string) => {
        this.setState({ password: password });
    };

    handlePasswordConfirmChange = (passwordConfirm: string) => {
        this.setState({ passwordConfirm });
    };

    handleRegisterPress = async () => {
        let responseJson: any;
        this.setState({ isLoading: true });
        try {
            const response = await fetch('https://desqol.hihva.nl/user/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                })
            });
            responseJson = await response.json();
        } catch (error) {
            console.error(error);
            this.setState({ isLoading: false });
            return;
        }
        await AsyncStorage.setItem('registered', 'true');
        if (responseJson.token) {
            // incase register  sends back the token
            await AsyncStorage.setItem('token', responseJson.token);
            this.props.navigation.navigate('Home');
        } else {
            // incase request does not contain token go to login and get the token.
            this.props.navigation.navigate('Login');
        }
    };

    // ...and we update them in the input onBlur callback
    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
    };

    handleNameBlur = () => {
        this.setState({ nameTouched: true });
    };

    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
    };

    handlePasswordConfirmBlur = () => {
        this.setState({ passwordConfirmTouched: true });
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

    handlePasswordSubmitPress = () => {
        if (this.passwordInputConfirmRef.current) {
            this.passwordInputConfirmRef.current.focus();
        }
    };

    render() {
        const {
            name,
            email,
            password,
            passwordConfirm,
            nameTouched,
            emailTouched,
            passwordTouched,
            passwordConfirmTouched
        } = this.state;
        let emailError = undefined;
        if (emailTouched) {
            if (!email || !validateEmail(email)) {
                emailError = strings.EMAIL_REQUIRED;
            } else {
                emailError = undefined;
            }
        }

        const nameError =
        !name && nameTouched
            ? strings.PASSWORD_REQUIRED
            : undefined;

        const passwordError =
            !password && passwordTouched
                ? strings.PASSWORD_REQUIRED
                : undefined;

        const passwordErrorConfirmed =
            (!passwordConfirm || passwordConfirm != password) && passwordConfirmTouched
                ? strings.PASSWORD_NOT_MATCHING
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
                        autoCorrect={false}
                        error={nameError}
                        onBlur={this.handleNameBlur}
                        onChangeText={this.handleNameChange}
                        onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.NAME_PLACEHOLDER}
                        returnKeyType="next"
                        value={this.state.name}
                    />
                    <FormTextInput
                        autoCorrect={false}
                        error={emailError}
                        keyboardType="email-address"
                        onBlur={this.handleEmailBlur}
                        onChangeText={this.handleEmailChange}
                        onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.EMAIL_PLACEHOLDER}
                        returnKeyType="next"
                        value={this.state.email}
                    />
                    <FormTextInput
                        error={passwordError}
                        onBlur={this.handlePasswordBlur}
                        onChangeText={this.handlePasswordChange}
                        onSubmitEditing={this.handlePasswordSubmitPress}
                        placeholder={strings.PASSWORD_PLACEHOLDER}
                        ref={this.passwordInputRef}
                        returnKeyType='next'
                        secureTextEntry
                        value={this.state.password}
                    />
                    <FormTextInput
                        error={passwordErrorConfirmed}
                        onBlur={this.handlePasswordConfirmBlur}
                        onChangeText={this.handlePasswordConfirmChange}
                        placeholder={strings.PASSWORD_RETYPE}
                        ref={this.passwordInputConfirmRef}
                        returnKeyType='done'
                        secureTextEntry
                        value={this.state.passwordConfirm}
                    />
                    <Button
                        disabled={!!emailError || !password || (password != passwordConfirm)}
                        label={strings.LOGIN}
                        onPress={this.handleRegisterPress}
                    />
                </View>
            </View>);
    }
}

export default RegistrationScreen;
