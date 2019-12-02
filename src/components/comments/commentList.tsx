import React from 'react';
import { ListItem } from 'react-native-elements';

interface CommentListProps {
  comments: any;
}

export default function CommentList({
    comments,
}: CommentListProps): JSX.Element {
    return comments.map((comment: any, key: any) => (
        <ListItem
            key={key}
            leftAvatar={{ source: { uri: comment.profileAvatar } }}
            title={comment.body}
            bottomDivider
        />
    ));
}
