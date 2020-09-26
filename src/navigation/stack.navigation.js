import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={}/>
            <Stack.Screen name='Detail' component={}/>
        </Stack.Navigator>
    )
}
