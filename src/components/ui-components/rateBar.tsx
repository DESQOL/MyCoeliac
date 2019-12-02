import React from 'react';
import { Text, Rating } from 'react-native-elements';
import { SafeAreaView } from 'react-native';

export default function RateBar(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Rate recipe: </Text>
      <Rating />
    </SafeAreaView>
  );
}
