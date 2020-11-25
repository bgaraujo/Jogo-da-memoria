import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartGame from '../pages/StartGame';
import Game from '../pages/Game';
import NextLevel from '../pages/NextLevel';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pokemon memo" component={StartGame} />
                <Stack.Screen 
                    name="Game" 
                    component={Game}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen 
                    name="NextLevel" 
                    component={NextLevel} 
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}
