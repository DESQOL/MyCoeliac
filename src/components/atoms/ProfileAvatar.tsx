import React from 'react';
import { Avatar } from 'react-native-elements';

interface ProfileAvatarProps {
    image: any;
    initials: string;
    avatarStyle?: object;
}

export default function ProfileAvatar({
    image,
    initials,
    avatarStyle,
}: ProfileAvatarProps): JSX.Element {
    if (image !== '') {
        return (<Avatar
            avatarStyle={avatarStyle}
            rounded
            source={{ uri: image }}
        />);
    } else {
        return (<Avatar
            rounded
            title={initials}
        />);
    }
}
