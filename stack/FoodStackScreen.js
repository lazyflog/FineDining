import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ReservView from "../screens/Reserv";
import RestaurantView from "../screens/RestaurantView";


export default AppStackScreens = () => {
    const FoodStack = createStackNavigator();

    return (
        <FoodStack.Navigator headerMode="none">
            <FoodStack.Navigator name="Reserve" component={ReservView} />
            <FoodStack.Navigator name="restaurant" component={RestaurantView} />
        </FoodStack.Navigator>
    );
};
