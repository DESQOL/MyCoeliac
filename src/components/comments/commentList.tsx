import React from 'react';
import { ListItem } from 'react-native-elements';
import ProfileAvatar from '../ui-components/profileAvatar';

interface CommentListProps {
  comments: any;
}

export default function CommentList({
  comments,
}: CommentListProps): JSX.Element {
  return comments.map((comment: any, key: any) => {
    <ListItem
      key={key}
      leftAvatar={
        <ProfileAvatar image={comment.avatar} initials={comment.initials} />
      }
      title={comment.body}
      bottomDivider
    />;
  });
}
