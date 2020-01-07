import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import CommentList from '../../components/molecules/CommentList';
import styles from '../../styles/screens/CommentScreen';

interface CommentObject {
  id: number;
  body: string;
  profile: ProfileObject;
}

interface ProfileObject {
  avatar: string;
  initials: string;
  recipeRating: number;
}

interface CommentScreenState {
  comments: CommentObject[];
}

interface CommentScreenProps {
  commentScreenProps?: any;
}

const testProfile1: ProfileObject = {
    avatar:
    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    initials: 'JB',
    recipeRating: 1,
};

const testProfile2: ProfileObject = {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    initials: 'ML',
    recipeRating: 5,
};

const comments = [
    {
        id: 1,
        profile: testProfile1,
        body: 'Wat een smerig gerecht!',
    },
    {
        id: 2,
        profile: testProfile2,
        body: 'Wat zeg jij nou! Het is heerlijk!',
    },
    {
        id: 3,
        profile: testProfile1,
        body: 'Jij hebt gewoon geen smaak!',
    },
    {
        id: 4,
        profile: testProfile2,
        body:
      'Je weet niet waar je het over hebt man! Als je zo doorgaat sla ik je neer!',
    },
    {
        id: 5,
        profile: testProfile1,
        body: 'Waar heb je het nou over vrouw! Denk je dat je mij aan kan ofzo!',
    },
    {
        id: 6,
        profile: testProfile2,
        body: 'Kom naar de stad dan! Dan ga je zien wat er met je gebeurt',
    },
    {
        id: 7,
        profile: testProfile1,
        body: 'Okee, morgen 3 uur in de stad. Douw ik even wat Gluten in je porem!',
    },
    {
        id: 8,
        profile: testProfile2,
        body: 'Afgesproken! Neem ik een stokbrood mee!',
    },
    {
        id: 9,
        profile: testProfile1,
        body: 'Ik ook! Vanavond wordt je laatste maaltijd!',
    },
    {
        id: 10,
        profile: testProfile2,
        body: 'Kijk er nu al naar uit!',
    },
];

const currentProfile = testProfile1;

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
