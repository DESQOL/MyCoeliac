import React from 'react';
import { Avatar } from 'react-native-elements';
import { ImageURISource } from 'react-native';

interface ProfileAvatarProps {
  image: ImageURISource;
  initials: string;
}

export default function ProfileAvatar({
    image,
    initials,
}: ProfileAvatarProps): JSX.Element {
    if (image !== '') {
        return <Avatar rounded source={image} />;
    } else {
        return <Avatar rounded title={initials} />;
    }
}
