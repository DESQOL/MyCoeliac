import * as React from 'react';
import { View } from 'react-native';
import NavHeader from '../../components/atoms/NavHeader';
import MenuButton from '../../components/atoms/MenuButton';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../styles/components/SettingsScreen';

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
                <NavHeader title={'Settings'} navIcon={true} />
                <View style={styles.emptyContainerTop}></View>
                <View style={styles.contentContainer}>
                    <MenuButton title='Account' onPress={() => { console.log('account pressed'); }} />
                    <View style={styles.emptyContainer}>
                    </View>
                    <MenuButton title='Delete Account' onPress={() => console.log('delete acc pressed')} />
                    <MenuButton title='Log Out' onPress={() => { this.logOut(); }} />
                </View>

                <View style={styles.emptyContainer}></View>
            </View>
        );
    }
}

export default SettingsScreen;
