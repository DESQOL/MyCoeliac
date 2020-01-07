import React from 'react';
import { Text, AirbnbRating } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';
import styles from '../../styles/components/atoms/RateBar';

export default function RateBar(): JSX.Element {
    return (
        <SafeAreaView>
            <View style={styles.rateBar}>
                <Text>Rate recipe: </Text>
                <AirbnbRating size={20} showRating={false} />
            </View>
        </SafeAreaView>
    );
}
