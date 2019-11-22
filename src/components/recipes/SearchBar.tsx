import React from 'react';
import { Input } from 'react-native-elements';

export default function SearchBar(): JSX.Element {
  const [value, onChangeText] = React.useState('Search for recipes');
  return (
    <Input
      placeholder="Search for recipes"
      leftIcon={{ type: 'font-awesome', name: 'search' }}
      onChangeText={(text): void => onChangeText(text)}
      value={value}
    />
  );
}
