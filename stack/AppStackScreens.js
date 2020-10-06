import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "../Utility/User";

import AuthStackScreens from "./AuthStackScreens";
import MainStackScreens from "./MainStackScreens";
import LoadingScreen from "../screens/Loading";

export default AppStackScreens = () => {
    const AppStack = createStackNavigator();
    const [user] = useContext(UserContext);

    return (
        <AppStack.Navigator headerMode="none">
            {user.isLoggedIn === null ? (
                <AppStack.Screen name="Loading" component={LoadingScreen} />
            ) : user.isLoggedIn ? (
                <AppStack.Screen name="Main" component={MainStackScreens} />
            ) : (
                <AppStack.Screen name="Auth" component={AuthStackScreens} />
            )}
        </AppStack.Navigator>
    );
};
