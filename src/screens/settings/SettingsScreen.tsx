import * as React from 'react';
import { View } from 'react-native';
import NavHeader from '../../components/atoms/NavHeader';
import MenuButton from '../../components/atoms/MenuButton';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../styles/screens/SettingsScreen';

interface Props {
    navigation: any;
}

class SettingsScreen extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    async logOut() {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <NavHeader
                    navIcon
                    onClick={() => this.props.navigation.goBack()}
                    title="Settings"
                />
                <View style={styles.emptyContainerTop} />
                <View style={styles.contentContainer}>
                    <MenuButton
                        onPress={() => this.props.navigation.navigate('EditProfile')}
                        title='Profile'
                    />
                    <View style={styles.emptyContainer} />
                    <MenuButton
                        onPress={() => console.log('delete acc pressed')}
                        title='Delete Account'
                    />
                    <MenuButton
                        onPress={() => { this.logOut(); }}
                        title='Log Out'
                    />
                </View>

                <View style={styles.emptyContainer} />
            </View>
        );
    }
}

export default SettingsScreen;
