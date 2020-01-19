import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import ViewPagerType from '@react-native-community/viewpager';
import styles from '../../styles/screens/EditProfile';
import strings from '../../values/strings';
import NavHeader from '../../components/atoms/NavHeader';
import AsyncStorage from '@react-native-community/async-storage';
import FormTextInput from '../../components/atoms/FormTextInput';
import Button from '../../components/atoms/LoginButton';

interface Props {
    navigation: any;
}

interface State {
    name: string;
    isLoading: boolean;
    oldPassword: string;
    newPassword: string;
    nameTouched: boolean;
}

/**
 * EditProfile screen
 */
class EditProfile extends React.Component<Props, State> {

    readonly state: State = {
        name: '',
        isLoading:false,
        oldPassword: '',
        newPassword: '',
        nameTouched: false,
    };

    viewPager = React.createRef<ViewPagerType>();
    // textInputComponents = React.createRef<Text[]>();

    constructor(props: Props) {
        super(props);
    }

    handleEmailChange = (name: string) => {
        this.setState({ name: name });
    };

    handleNewPasswordChange = (newPassword: string) => {
        this.setState({ newPassword: newPassword });
    };

    handleOldPasswordChange = (oldPassword: string) => {
        this.setState({ oldPassword: oldPassword });
    };

    handleEmailBlur = () => {
        this.setState({ nameTouched: true });
    };

    handleLoginPress = async () => {
        this.setState({ isLoading: true });
        const token = await AsyncStorage.getItem('token') || '';
        console.log(token);
        try {
            await fetch('https://desqol.hihva.nl/user/profile', {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-KEY': token
                },
                body: JSON.stringify({
                    name: this.state.name,
                })
            });

            this.props.navigation.navigate('ProfileScreen');
        } catch (error) {
            console.error(error);
            return;
        }
    };

    // Test page's will be replaced later.
    render() {
        const {
            name,
            nameTouched,
        } = this.state;

        const nameError =
            !name && nameTouched
                ? strings.NAME_REQUIRED
                : undefined;

        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <NavHeader
                    navIcon
                    onClick={() => this.props.navigation.goBack()}
                    title="Edit Profile"
                />
                <View style={styles.form}>
                    <FormTextInput
                        autoCorrect={false}
                        error={nameError}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        onBlur={this.handleEmailBlur}
                        onChangeText={this.handleEmailChange}
                        placeholder={strings.NAME_PLACEHOLDER}
                        returnKeyType="next"
                        value={this.state.name}
                    />
                    <FormTextInput
                        autoCorrect={false}
                        onChangeText={this.handleOldPasswordChange}
                        placeholder={strings.OLD_PASSWORD}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        returnKeyType="next"
                        secureTextEntry
                        value={this.state.oldPassword}
                    />
                    <FormTextInput
                        autoCorrect={false}
                        onChangeText={this.handleNewPasswordChange}
                        placeholder={strings.NEW_PASSWORD}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        returnKeyType="next"
                        secureTextEntry
                        value={this.state.newPassword}
                    />
                    <Button
                        disabled={!!nameError}
                        label={strings.SUBMIT}
                        onPress={this.handleLoginPress}
                    />
                </View>

            </View>
        );
    }

}

export default EditProfile;
