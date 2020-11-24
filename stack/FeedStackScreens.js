import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainView from "../screens/MainView";
import CreateFeed from "../screens/CreateFeed";


export default FeedStackScreens = () => {
    const FeedStack = createStackNavigator();

    return (
        <FeedStack.Navigator headerMode="none">
            <FeedStack.Navigator name="Main" component={MainView} />
            <FeedStack.Navigator name="Feed" component={CreateFeed} />
        </FeedStack.Navigator>
    );
};
