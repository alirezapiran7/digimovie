import { LoadingButton } from '@/components/Button'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import * as authActions from '@/store/auth/actions'
import globalStyle from '@/styles'

const index = () => {
    const dispatch = useDispatch()

    return (
        <View style={globalStyle.centerContiner}>
            <LoadingButton title="logout" onPress={() => {
                dispatch(authActions.logout())
            }} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
