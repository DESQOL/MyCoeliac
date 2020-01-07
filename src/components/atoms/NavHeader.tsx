import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from 'src/styles/components/atoms/NavHeader';
import { GrayLight } from '../../styles/config/Colors';

interface NavHeaderProps {
    title: string;
    navIcon: boolean;
    onClick?: any;
}

export default function NavHeader({ title, navIcon, onClick }: NavHeaderProps): JSX.Element {
    return (
        <View style={styles.header}>
            {navIcon ?
                <View style={styles.logoContainer}>
                    <TouchableWithoutFeedback onPress={onClick}>
                        <Icon name={'angle-left'} size={45} color={GrayLight}/>
                    </TouchableWithoutFeedback>
                </View> : null}
            {navIcon ? <Text style={styles.title}>{title}</Text> : <Text style={styles.titleLogo}>{title}</Text>}
        </View>
    );
}
