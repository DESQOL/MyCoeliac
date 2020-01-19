import React, { Component } from 'react';
import { View } from 'react-native';

interface CommenListState {
    input: string;
    comments: any;
}

interface CommentListProps {
    recipe: any;
}

interface ProfileObject {
    avatar: string;
    initials: string;
    recipeRating: number;
}

interface CommentObject {
    id: number;
    comment: string;
}

export default class CommentList extends Component<
    CommentListProps,
    CommenListState
    > {
    constructor(props: CommentListProps) {
        super(props);
    }

    public readonly state: CommenListState = {
        input: '',
        comments: {}
    };

    fetchComments = async () => {
        let responseJson: any;
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/195529/comments', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
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
    
    handleCommentSubmit = async () => {
        console.log('Button clicked');
        let responseJson: any;
        try {
            const response = await fetch('https://desqol.hihva.nl/recipe/195529/comments', {
                method: 'GET',
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
            <View>
            </View>
        );
    }
}
