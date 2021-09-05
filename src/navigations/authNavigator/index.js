import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '@/screens/auth'
import { headerAuth } from '@/components/Header'



const index = props => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={headerAuth}  >
            <Stack.Screen name="auth" component={Auth} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        </Stack.Navigator>
    );
};

export default index;
