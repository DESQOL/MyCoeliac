import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, Text, AsyncStorage } from 'react-native';
import styles from '../../styles/screens/CommentScreen';
import { ListItem, Rating } from 'react-native-elements';
import ProfileAvatar from '../../components/atoms/ProfileAvatar';
import RateBar from '../../components/atoms/RateBar';
import PrimaryTextField from '../../components/atoms/PrimaryTextField';
import PrimaryButton from '../../components/atoms/PrimaryButton';

interface CommentObject {
    id: number;
    comment: string;
    profile: ProfileObject;
}

interface ProfileObject {
    avatar: string;
    initials: string;
    recipeRating: number;
}

interface CommentScreenState {
    comments: [];
    input: string;
    rating: number;
}

interface CommentScreenProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commentScreenProps?: any;
    // recipe: any;
}

const testProfile1: ProfileObject = {
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    initials: 'JB',
    recipeRating: 1,
};

/*
 * const comments = [
 *     {
 *         id: 1,
 *         profile: testProfile1,
 *         body: 'Wat een smerig gerecht!',
 *     },
 *     {
 *         id: 2,
 *         profile: testProfile2,
 *         body: 'Wat zeg jij nou! Het is heerlijk!',
 *     },
 *     {
 *         id: 3,
 *         profile: testProfile1,
 *         body: 'Jij hebt gewoon geen smaak!',
 *     },
 *     {
 *         id: 4,
 *         profile: testProfile2,
 *         body:
 *       'Je weet niet waar je het over hebt man! Als je zo doorgaat sla ik je neer!',
 *     },
 *     {
 *         id: 5,
 *         profile: testProfile1,
 *         body: 'Waar heb je het nou over vrouw! Denk je dat je mij aan kan ofzo!',
 *     },
 *     {
 *         id: 6,
 *         profile: testProfile2,
 *         body: 'Kom naar de stad dan! Dan ga je zien wat er met je gebeurt',
 *     },
 *     {
 *         id: 7,
 *         profile: testProfile1,
 *         body: 'Okee, morgen 3 uur in de stad. Douw ik even wat Gluten in je porem!',
 *     },
 *     {
 *         id: 8,
 *         profile: testProfile2,
 *         body: 'Afgesproken! Neem ik een stokbrood mee!',
 *     },
 *     {
 *         id: 9,
 *         profile: testProfile1,
 *         body: 'Ik ook! Vanavond wordt je laatste maaltijd!',
 *     },
 *     {
 *         id: 10,
 *         profile: testProfile2,
 *         body: 'Kijk er nu al naar uit!',
 *     },
 * ];
 */

const currentProfile = testProfile1;

export default class CommentScreen extends Component<
    CommentScreenProps,
    CommentScreenState
    > {
    readonly state: CommentScreenState = {
        comments: [],
        input: '',
        rating: 0
    };

    componentDidMount(): void {
        this.fetchComments();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    fetchComments = async () => {
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        console.log(token);
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/195529/comments', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-API-KEY': token,
                    'Content-Type': 'application/json',
                },
            });

            responseJson = await response.json();
            console.log(responseJson);
            this.setState({ comments: responseJson });
        } catch (error) {
            console.log(error);
            return;
        }
    };

    updateInput(input: string): void {
        this.setState({
            input: input,
        });
    }

    updateRating(rating: number): void {
        console.log(rating);
        this.setState({
            rating: rating
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    handleCommentSubmit = async () => {
        console.log('Button clicked');
        let responseJson: any;
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/195529/comments', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: this.state.input
                })
            });
            responseJson = await response.json();
            console.log(responseJson);
        } catch (error) {
            console.error(error);
            return;
        }
        this.setState({
            input: '',
        });
    };

    render(): JSX.Element {
        return (
            <SafeAreaView style={styles.commentList}>
                <FlatList
                    data={this.state.comments}
                    removeClippedSubviews={false}
                    renderItem={({ item }: { item: any }) => (
                        <View>
                            <ListItem
                                title={item.comment}
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
                            <RateBar onFinishRating={(rating) => this.updateRating(rating)} />
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
                                    componentStyle={styles.primaryButton}
                                    onClick={() => this.handleCommentSubmit()}
                                />
                            </View>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}
