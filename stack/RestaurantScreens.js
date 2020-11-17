import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ReserveView from "../screens/Reserve";
import RestaurantView from "../screens/RestaurantView";


export default RestaurantScreens = () => {
    const RestaurantStack = createStackNavigator();

    return (
        <RestaurantStack.Navigator headerMode="none">
            <RestaurantStack.Navigator name="Reserve" component={ReserveView} />
            <RestaurantStack.Navigator name="Restaurant" component={RestaurantView} />
        </RestaurantStack.Navigator>
    );
};
