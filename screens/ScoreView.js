import React from "react";
import { SafeAreaView, StatusBar, ScrollView} from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
    const recipes = [
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
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
            <StatusBar barStyle="light-content" />
            <RecipeBackground source={require("../assets/1.jpg")}>
                <SafeAreaView>
                    <MainRecipe>
                        <Text title heavy>
                            어제의 FineDining
                        </Text>
                        <Divider />
                        <Text large heavy>빠네크림파스타</Text>
                        <Text>경기도 안산시 초지동</Text>
                    </MainRecipe>
                    <Button>
                        <Text bold small>
                            자세히
                        </Text>
                    </Button>
                </SafeAreaView>
            </RecipeBackground>
            <RecipesContainer>
                <Text dark heavy large>
                    어제의 NiceDining
                </Text>
                <Text dark small>
                    총 5개가 있습니다 (상위 2위부터 6위까지)
                </Text>
                
                <Recipes>
                    {recipes.map((recipe, index) => {
                        return (
                            <Recipe key={index}>
                                <RecipeImage source={recipe.image} />
                                <RecipeInfo>
                                    <Text dark bold>
                                        {recipe.name}
                                    </Text>
                                    <Text dark small>
                                        {recipe.info}
                                    </Text>
                                </RecipeInfo>

                                <AntDesign name="hearto" size={18} color="#000" />
                            </Recipe>
                        );
                    })}
                </Recipes>
            </RecipesContainer>
        </Container>
        </ScrollView>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
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

const RecipeBackground = styled.ImageBackground`
    width: 100%;
`;

const MenuBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;

const Back = styled.View`
    flex-direction: row;
    align-items: center;
`;

const MainRecipe = styled.View`
    padding: 0 32px;
    margin: 200px 0 32px 0;
`;

const Divider = styled.View`
    border-bottom-color: #fff;
    border-bottom-width: 2px;
    width: 150px;
    margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
    margin: 0 0 48px 32px;
    background-color: rgba(255, 255, 255, 0.3);
    align-self: flex-start;
    padding: 6px 18px;
    border-radius: 100px;
`;

const RecipesContainer = styled.View`
    margin-top: -24px;
    padding: 32px;
    background-color: #fff;
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

const RecipeImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`;

const RecipeInfo = styled.View`
    flex: 1;
    margin-left: 12px;
`;
