import React from "react";
import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";

import Text from "../Utility/Text";
import FeedData from "../FeedData";


export default MainView = () => {
    const renderPost = ({ item }) => (
        <PostContainer>
            <PostHeaderContainer>
                <PostInfoContainer>
                    <PostProfilePhoto source={item.user.profilePhotoUrl} />
                    <Text small heavy>&nbsp;&nbsp;{item.user.username}</Text>
                    <Post>
                        <FeedPhoto source={item.Review.photoUrl} />
                    </Post>
                    <Text large>{item.Review.RestName}</Text>
                    <Text medium>{item.Review.MenuName}</Text>
                </PostInfoContainer>
            </PostHeaderContainer>
            
        </PostContainer>
    );
    return (
        <Container>
            <SafeAreaView>
            <FeedContainer>
                <Text dark title heavy margin="0 0 0 15px">
                    오늘의 추천
                </Text>
                <Feed data={FeedData} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} />
            </FeedContainer>
            </SafeAreaView>
            <StatusBar barStyle="dark-content" />
        </Container>
    );
};              

const Container = styled.View`
    flex: 1;
    background-color: #ebecf3;
    padding-bottom: 80px;
`;

const PostContainer = styled.View`
    margin: 16px 16px 0 16px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 8px;
`;

const Post = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const PostHeaderContainer = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
`;

const FeedPhoto = styled.Image`
    width: 100%;
    height: 150px;
    border-radius: 6px; 
`;

const PostProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

const PostInfoContainer = styled.View`
    flex: 1;
    margin: 0 16px;
`;

const Feed = styled.FlatList``;

const FeedContainer = styled.View``;