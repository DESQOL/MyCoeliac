import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import ProfileAvatar from '../ui-components/profileAvatar';
import RateBar from '../ui-components/rateBar';
import PrimaryButton from '../ui-components/buttons/PrimaryButton';
import PrimaryTextField from '../ui-components/input/PrimaryTextField';
import { PrimaryGray } from '../../styles/config/colors';
import { Rating } from 'react-native-elements';

interface CommenListState {
  input: string;
  comments: CommentObject[];
  currentProfile: ProfileObject;
}

interface CommentListProps {
  props?: {};
}

interface ProfileObject {
  avatar: string;
  initials: string;
  recipeRating: number;
}

interface CommentObject {
  id: number;
  body: string;
  profile: ProfileObject;
}

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'flex-start',
    },
    input: {
        borderColor: PrimaryGray,
        borderWidth: 1,
        height: 40,
        width: 180,
    },
    newComment: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 20,
    },
    primaryButton: {
        width: 100,
    },
    rating: {
        marginRight: 40,
        marginTop: 10,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
});

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

export default class CommentList extends Component<
  CommentListProps,
  CommenListState
> {
    constructor(props: CommentListProps) {
        super(props);
    }

  public readonly state: CommenListState = {
      input: '',
      currentProfile: testProfile1,
      comments: comments,
  };

  updateInput(input: string): void {
      this.setState({
          input: input,
      });
  }

  addNewComment(): void {
      console.log('Button clicked');
      const newComment: CommentObject = {
          id: this.state.comments.length + 1,
          profile: currentProfile,
          body: this.state.input,
      };
      this.state.comments.push(newComment);
      this.setState({
          input: '',
      });
  }

  render(): JSX.Element {
      return (
          <View>
              <FlatList
                  data={comments}
                  removeClippedSubviews={false}
                  renderItem={({ item }: { item: CommentObject }) => (
                      <View>
                          <ListItem
                              title={item.body}
                              subtitle={
                                  <View style={styles.rating}>
                                      <Rating
                                          imageSize={20}
                                          readonly
                                          startingValue={item.profile.recipeRating}
                                      />
                                  </View>
                              }
                              leftAvatar={
                                  <ProfileAvatar
                                      image={item.profile.avatar}
                                      initials={item.profile.initials}
                                  />
                              }
                          />
                      </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                  ListHeaderComponent={
                      <View>
                          <Text style={styles.title}>Comments</Text>
                      </View>
                  }
                  ListFooterComponent={
                      <View>
                          <RateBar />
                          <View style={styles.newComment}>
                              <ProfileAvatar
                                  image={currentProfile.avatar}
                                  initials={currentProfile.initials}
                                  avatarStyle={styles.avatar}
                              />
                              <View>
                                  <PrimaryTextField
                                      onChangeText={input => this.updateInput(input)}
                                      textFieldStyle={styles.input}
                                      value={this.state.input}
                                  />
                              </View>
                              <PrimaryButton
                                  title="Enter"
                                  type="solid"
                                  buttonStyle={styles.primaryButton}
                                  onClick={() => this.addNewComment()}
                              />
                          </View>
                      </View>
                  }
              />
          </View>
      );
  }
}
