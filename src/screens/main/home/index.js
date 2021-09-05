import React, { useState } from 'react'

import globalStyle from '@/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Categories, Movies, Header } from './component'



const index = ({ navigation }) => {

    return (
        <SafeAreaView style={globalStyle.continer}>
            <Header navigation={navigation} />
            <Categories navigation={navigation} />
            <Movies navigation={navigation} />
        </SafeAreaView>
    )
}

export default index
