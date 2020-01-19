import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(): JSX.Element {
    const [value, onChangeText] = React.useState();
    return (
        <Input
            leftIcon={<Icon
                color="black"
                name="search"
                size={24}
            />}
            onChangeText={(text): void => onChangeText(text)}
            placeholder="Search for recipes"
            value={value}
        />
    );
}
