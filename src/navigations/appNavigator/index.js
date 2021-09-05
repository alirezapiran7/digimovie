import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '@/navigations/authNavigator'
import MainNavigator from '@/navigations/mainNavigator'
import StartupScreen from '@/screens/startup'


import * as authActions from '@/store/auth/actions'

const AppNavigator = ({ navigation }) => {


    const dispatch = useDispatch()


    const startup = useSelector(state => state.auth.startup);
    const authenticating = useSelector(state => state.auth.authenticating);
    const authenticate = useSelector(state => state.auth.authenticate);


    return (
        <NavigationContainer  >
            {startup && <StartupScreen />}
            {authenticating && <AuthNavigator />}
            {authenticate && <MainNavigator />}
        </NavigationContainer>
    );
};

export default AppNavigator;
