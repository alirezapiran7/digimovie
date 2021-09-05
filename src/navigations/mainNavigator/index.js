import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/screens/main/home'
import { headerDefault } from '@/components/Header'



const index = props => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={headerDefault}  >
            <Stack.Screen name="home" component={Home} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        </Stack.Navigator>
    );
};

export default index;
