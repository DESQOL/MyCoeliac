import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CommentList from '../../components/comments/CommentList';

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
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        body: 'Wat een smerig gerecht!',
        initials: 'JB',
    },
    {
        id: 2,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        body: 'Wat zeg jij nou! Het is heerlijk!',
        initials: 'ML',
    },
    {
        id: 3,
        avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        body: 'Jij hebt gewoon geen smaak!',
        initials: 'JB',
    },
    {
        id: 4,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        body:
      'Je weet niet waar je het over hebt man! Als je zo doorgaat sla ik je neer!',
        initials: 'ML',
    },
    {
        id: 5,
        avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        body: 'Waar heb je het nou over vrouw! Denk je dat je mij aan kan ofzo!',
        initials: 'JB',
    },
    {
        id: 6,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        body: 'Kom naar de stad dan! Dan ga je zien wat er met je gebeurt',
        initials: 'ML',
    },
    {
        id: 7,
        avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        body: 'Okee, morgen 3 uur in de stad. Douw ik even wat Gluten in je porem!',
        initials: 'ML',
    },
    {
        id: 8,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        body: 'Afgesproken! Neem ik een stokbrood mee!',
        initials: 'ML',
    },
    {
        id: 9,
        avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        body: 'Ik ook! Vanavond wordt je laatste maaltijd!',
        initials: 'JB',
    },
    {
        id: 10,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        body: 'Kijk er nu al naar uit!',
        initials: 'ML',
    },
];

const currentProfile = {
    initials: 'JB',
    avatar:
    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
};

const styles = StyleSheet.create({
    commentList: {
        flex: 1,
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
            <SafeAreaView style={styles.commentList}>
                <CommentList comments={comments} currentProfile={currentProfile} />
            </SafeAreaView>
        );
    }
}
