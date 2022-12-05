import React from 'react';
import { Recipe, Ingredient, Result, Alphabet } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Tabs'}
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
                <Stack.Screen
                    name="Ingredient"
                    component={Ingredient}
                />
                <Stack.Screen
                    name="Result"
                    component={Result}
                />
                <Stack.Screen
                    name="Alphabet"
                    component={Alphabet}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;