import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../pages/Search";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
    return(
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}

function AppRoutes(): JSX.Element {
    return(
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }
            >
                <Stack.Screen name='HomePage' component={HomeTabs}/>
                <Stack.Screen name="Item" component={Item}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;