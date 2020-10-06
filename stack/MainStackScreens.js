import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Main from "../screens/MainView";
import Score from "../screens/ScoreView";
import Reserv from "../screens/Reserv";
import Profile from "../screens/ProfileView";

export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator();

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#ffffff",
            paddingBototm: 12,
        },
    };

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "ios-home";

            switch (route.name) {
                case "Main":
                    iconName = "ios-home";
                    break;

                case "Score":
                    iconName = "ios-star-half";
                    break;

                case "Reserv":
                    iconName = "ios-restaurant";
                    break;

                case "Profile":
                    iconName = "ios-person";
                    break;

                default:
                    iconName = "ios-home";
            }

            return <Ionicons name={iconName} size={24} color={focused ? "#04B4AE" : "#666666"} />;
        },
    });

    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Main" component={Main} />
            <MainStack.Screen name="Score" component={Score} />
            <MainStack.Screen name="Reserv" component={Reserv} />
            <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
    );
};
