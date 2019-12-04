import React from 'react';
import { Text, Rating, AirbnbRating } from 'react-native-elements';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rateBar: {
        display: 'flex',
        flexDirection: 'row',
    },
});

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
