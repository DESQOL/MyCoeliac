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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comments: any;
    input: string;
    rating: number;
}

interface CommentScreenProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recipeId: number;
}

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
        this.fetchComments().then((response) => {
            this.setState({
                comments: response.comments
            });
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    fetchComments = async () => {
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/' + this.props.recipeId + '/comments', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-API-KEY': token,
                    'Content-Type': 'application/json',
                },
            });
            responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
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
        console.log('rating: ' + rating);
        this.setState({
            rating: rating
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    handleCommentSubmit = async () => {
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/' + this.props.recipeId + '/comments', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'X-API-KEY': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: this.state.input,
                    rating: this.state.rating
                })
            });
            responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.error(error);
            return;
        }
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
                                            startingValue={item.rating}
                                        />
                                    </View>
                                }
                                leftAvatar={
                                    <ProfileAvatar
                                        image='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                                        initials='AB'
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
                                    image='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                                    initials='AB'
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
                                    onClick={() => this.handleCommentSubmit().then((response) => {
                                        const newComment = response;
                                        const stateComments = this.state.comments;
                                        const newCommentList = [...stateComments];
                                        newCommentList.push(newComment);
                                        this.setState({
                                            comments: newCommentList
                                        });

                                        this.setState({
                                            input: '',
                                        });
                                    })}
                                />
                            </View>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}
