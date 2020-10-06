import React, { useContext, useState } from "react";
import styled from "styled-components";

import { FirebaseContext } from "../Utility/Fire";
import { UserContext } from "../Utility/User";

import Text from "../Utility/Text";

export default SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    const signIn = async () => {
        setLoading(true);

        try {
            await firebase.signIn(email, password);

            const uid = firebase.getCurrentUser().uid;

            const userInfo = await firebase.getUserInfo(uid);

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true,
            });
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Main>
                <Text title bold center>
                    Fine Dining
                </Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>이메일</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(email.trim())}
                        value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>비밀번호</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password.trim())}
                        value={password}
                    />
                </AuthContainer>
            </Auth>

            <SignInContainer onPress={signIn} disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text bold center color="#ffffff">
                        로그인
                    </Text>
                )}
            </SignInContainer>

            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>
                    Fine Dining이 처음이신가요?{" "}
                    <Text bold color="#04B4AE">
                        회원가입
                    </Text>
                </Text>
            </SignUp>

            <HeaderGraphic>
            </HeaderGraphic>
            <StatusBar barStyle="dark-content" />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 192px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #04B4AE;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const StatusBar = styled.StatusBar``;