import React from 'react';
import Loading from './screens/LoadingView/Loading';
import MainView from './screens/MainView/MainView'
import ProfileView from './screens/ProfileView/ProfileView';
import FoodView from './screens/FoodView/FoodView';
import ScoreView from './screens/ScoreView/ScoreView';
import LoginView from './screens/LoginView/Login';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isLoading: true,
    isLoggedin: true
  };
  componentDidMount= async() => {  
    // 1,000가 1초
    setTimeout(() => {this.setState({isLoading: false})},2500);
  }

  render() {
    const { isLoading, isLoggedin } = this.state;
    return ( isLoading ? (
      <Loading />
     ) : (
    <NavigationContainer>
        {(true) ? (
          <BottomTab.Navigator screenOptions={({route}) =>({
            tabBarIcon: ({color, size}) => {
              if(route.name === "Main") {
                return <AntDesign name="home" color={color} size={size} />
              }
              else if(route.name === "Score") {
                return <AntDesign name="star" color={color} size={size} />
              }
              else if(route.name === "Profile") {
                return <AntDesign name="profile" color={color} size={size} />
              }
            }
          })
          }>
            <BottomTab.Screen name="Main" component={MainView} />
            <BottomTab.Screen name="Score" component={ScoreView} />
            <BottomTab.Screen name="Profile" component={ProfileView} />
          </BottomTab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginView} />
          </Stack.Navigator>
        )}
        
    </NavigationContainer>)
    );
  }
}