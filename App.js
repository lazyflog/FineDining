import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserProvider } from "./Utility/User";
import { FirebaseProvider } from "./Utility/Fire";

import AppStackScreens from "./stack/AppStackScreens";

export default App = () => {
    return (
        <FirebaseProvider>
            <UserProvider>
                <NavigationContainer>
                    <AppStackScreens/>
                </NavigationContainer>
            </UserProvider>
        </FirebaseProvider>
    );
};
