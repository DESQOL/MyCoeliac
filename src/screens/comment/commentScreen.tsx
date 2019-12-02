import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CommentList from 'src/components/comments/commentList';
import RateBar from '../../components/ui-components/rateBar';

interface CommentScreenState {
  comments: any;
}

interface CommentScreenProps {
  commentScreenProps?: any;
}

const comments = [
  {
    id: 1,
    avatar:
      'https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-04-512.png',
    body: 'Wat een smerig gerecht!',
    initials: 'JB',
  },
  {
    id: 2,
    avatar:
      'https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-04-512.png',
    body: 'Wat zeg jij nou! Het is heerlijk!',
    initials: 'ML',
  },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
});

export default class CommentScreen extends Component<
  CommentScreenProps,
  CommentScreenState
> {
  constructor(props: CommentScreenProps) {
    super(props);
    this.state = {
      comments: comments,
    };
  }

  render(): JSX.Element {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Comments</Text>
          <CommentList comments={comments} />
          <RateBar />
        </View>
      </SafeAreaView>
    );
  }
}
