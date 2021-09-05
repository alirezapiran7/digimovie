import React, { useEffect, useState } from 'react'
import { StyleSheet, ActivityIndicator, Image } from 'react-native'
import { globalStyle } from '@/styles'
import Logo from '@/components/Logo'
import { SafeAreaView } from 'react-native-safe-area-context'
import { metrics } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from '@/store/auth/actions'



const index = () => {

    const dispatch = useDispatch()

    const checkUser = async () => {
        try {
            dispatch(authActions.checkUser())
        } catch (error) {

        }
    }

    useEffect(() => {
        checkUser()
    }, [dispatch])

    return (
        <SafeAreaView style={globalStyle.centerContiner}>
            <Logo />
            <ActivityIndicator style={{ position: 'absolute', bottom: metrics.m5 }} />
        </SafeAreaView>
    )
}

export default index

