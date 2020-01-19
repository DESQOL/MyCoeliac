import React from 'react';
import { Text, AirbnbRating } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';
import styles from '../../styles/components/atoms/RateBar';

interface Props {
    onFinishRating: (rating: number) => void;
}

export default function RateBar(props: Props): JSX.Element {
    return (
        <SafeAreaView>
            <View style={styles.rateBar}>
                <Text>
Rate recipe:
                    {' '}
                </Text>
                <AirbnbRating
                    onFinishRating={(rating: number) => props.onFinishRating(rating)}
                    showRating={false}
                    size={20}
                />
            </View>
        </SafeAreaView>
    );
}
