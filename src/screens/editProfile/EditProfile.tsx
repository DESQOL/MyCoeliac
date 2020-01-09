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
                <NavHeader title={'Edit Profile'} navIcon={true} onClick={() => this.props.navigation.goBack()} />
                <View style={styles.form}>
                    <FormTextInput
                        value={this.state.name}
                        onChangeText={this.handleEmailChange}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.NAME_PLACEHOLDER}
                        autoCorrect={false}
                        returnKeyType="next"
                        onBlur={this.handleEmailBlur}
                        error={nameError}
                    />
                    <FormTextInput
                        value={this.state.oldPassword}
                        secureTextEntry={true}
                        onChangeText={this.handleOldPasswordChange}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.OLD_PASSWORD}
                        autoCorrect={false}
                        returnKeyType="next"
                    />
                    <FormTextInput
                        value={this.state.newPassword}
                        secureTextEntry={true}
                        onChangeText={this.handleNewPasswordChange}
                        // onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.NEW_PASSWORD}
                        autoCorrect={false}
                        returnKeyType="next"
                    />
                    <Button
                        label={strings.SUBMIT}
                        onPress={this.handleLoginPress}
                        disabled={!!nameError}
                    />
                </View>

            </View>
        );
    }

}

export default EditProfile;
