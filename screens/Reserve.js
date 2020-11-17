import React, { useContext } from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import styled from "styled-components";

import { UserContext } from "../Utility/User";

export default ReserveView = ({ navigation }) => {

    const [user] = useContext(UserContext);

    const stores = [
        {
            name: "크림",
            info: "경기도 부천시",
            image: require("../assets/1.jpg"),
        },
        {
            name: "파스타",
            info: "경기도 부천시 원미구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "크림",
            info: "경기도 부천시",
            image: require("../assets/1.jpg"),
        },
        {
            name: "파스타",
            info: "경기도 부천시 원미구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "크림",
            info: "경기도 부천시",
            image: require("../assets/1.jpg"),
        },
        {
            name: "파스타",
            info: "경기도 부천시 원미구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        },
        {
            name: "빠네",
            info: "서울특별시 마포구",
            image: require("../assets/1.jpg"),
        }
    ];

    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <RecipesContainer>
                <Text dark heavy large>
                    가게예약
                </Text>
                <Text dark small>
                    원하시는 가게를 예약하실 수 있습니다.(전화)
                </Text>
                <Recipes>
                    {stores.map((stores, index) => {
                        return (
                            <ReserveContainer>
                            <Recipe key={index}>
                                <RecipeImage source={stores.image} />
                                <RecipeInfo>
                                    <Text dark bold>
                                        {stores.name}
                                    </Text>
                                    <Text dark small>
                                        {stores.info}
                                    </Text>
                                </RecipeInfo>
                                <Button onPress={() => {
                                    navigation.navigate("Restaurant")
                                    }}>
                                    <Text bold small>
                                        자세히
                                    </Text>
                                </Button>
                            </Recipe>
                            </ReserveContainer>
                        );
                    })}
                </Recipes>
            </RecipesContainer>
            </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #ebecf3;
`;

const Text = styled.Text`
    color: ${(props) => (props.dark ? "#000" : "#FFF")};
    font-family: "AvenirNext-Regular";

    ${({ title, large, small }) => {
        switch (true) {
            case title:
                return `font-size: 32px`;
            case large:
                return `font-size: 20px`;
            case small:
                return `font-size: 13px`;
        }
    }}

    ${({ bold, heavy }) => {
        switch (true) {
            case bold:
                return `font-weight: 600`;
            case heavy:
                return `font-weight: 700`;
        }
    }}
`;

const ReserveContainer = styled.View`
    margin: 16px 16px 0 16px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 8px;
`;

const Button = styled.TouchableOpacity`
    margin: 0 0 48px 32px;
    background-color: rgba(255, 150, 0, 0.55);
    align-self: flex-start;
    padding: 6px 18px;
    border-radius: 100px;
`;

const RecipesContainer = styled.View`
    padding: 20px;
    background-color: #ebecf3;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

const Recipes = styled.View`
    margin-top: 16px;
`;

const Recipe = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

const Feed = styled.FlatList``;

const RecipeImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`;

const RecipeInfo = styled.View`
    flex: 1;
    margin-left: 12px;
`;
