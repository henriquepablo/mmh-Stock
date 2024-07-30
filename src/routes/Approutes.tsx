import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../pages/Search";
import { Icon } from "@gluestack-ui/themed";
import { HomeIcon, SearchIcon } from "lucide-react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
    return(
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#292B37",
                        borderTopColor: "#292B37"
                    },
                    tabBarShowLabel: false
                }
            }
        >
            <Tab.Screen name="Home" component={Home}
                options={
                    {
                        tabBarIcon: ({color, size}) => {
                            return <Icon as={HomeIcon} size='xl' color={color} />;
                        }
                    }
                }
            />
            <Tab.Screen name="Search" component={Search} 
                options={
                    {
                        tabBarIcon: ({color, size}) => {
                            return <Icon as={SearchIcon} size='xl' color={color} />;
                        }
                    }
                }
            />
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