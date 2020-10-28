import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import { UserContext } from "../Utility/User";
import { FirebaseContext } from "../Utility/Fire";

import Text from "../Utility/Text";

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        setTimeout(async () => {
            const user = firebase.getCurrentUser();

            if (user) {
                const userInfo = await firebase.getUserInfo(user.uid);

                setUser({
                    isLoggedIn: true,
                    email: userInfo.email,
                    uid: user.uid,
                    username: userInfo.username,
                    profilePhotoUrl: userInfo.profilePhotoUrl,
                });
            } else {
                setUser((state) => ({ ...state, isLoggedIn: false }));
            }
        }, 1500);
    }, []);

    return (
        <Container>
            <Text style={{fontSize: 40, color: 'white'}}>Fine-Dining</Text>
            <Text style={{fontSize: 15, color: 'white'}}>MayWeatherTeam</Text>

            <LottieView
                source={require("../Utility/dish.json")}
                autoPlay
                loop
                style={{ width: "60%" }}
            />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    justify-Content: center;
    align-Items: center;
    background-Color: #04B4AE;
`;