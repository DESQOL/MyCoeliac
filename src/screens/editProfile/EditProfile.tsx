import React from 'react';
import { View } from 'react-native';
import ViewPagerType from '@react-native-community/viewpager';
import styles from '../../styles/screens/ProfileScreen';
import strings from '../../values/strings';
import NavHeader from '../../components/atoms/NavHeader';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any;
}

interface State {
    name: string,
    nameTouched: boolean,
}

/**
 * EditProfile screen
 */
class EditProfile extends React.Component<Props, State> {

    readonly state: State = {
        name: '',
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

    handleEmailBlur = () => {
        this.setState({ nameTouched: true });
    };

    // Test page's will be replaced later.
    render() {
        const {
            name,
            nameTouched,
        } = this.state;

        const nameError =
        !name && nameTouched
            ? strings.PASSWORD_REQUIRED
            : undefined;
        return (
            <View style={styles.container}>
                <NavHeader title={'Profile'} navIcon={true}/>
                
            </View>
        );
    }

}

export default EditProfile;
