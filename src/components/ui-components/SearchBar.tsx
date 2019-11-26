import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(): JSX.Element {
    const [value, onChangeText] = React.useState();
    return (
        <Input
            placeholder="Search for recipes"
            leftIcon={<Icon name="search" size={24} color="black" />}
            onChangeText={(text): void => onChangeText(text)}
            value={value}
        />
    );
}
