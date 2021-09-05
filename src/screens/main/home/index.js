import React, { useState } from 'react'

import globalStyle from '@/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '@/components/Header/HomeHeader'
import { Categories, Movies } from './component'



const index = ({ navigation }) => {

    return (
        <SafeAreaView style={globalStyle.continer}>
            <HomeHeader navigation={navigation} />
            <Categories navigation={navigation} />
            <Movies navigation={navigation} />
        </SafeAreaView>
    )
}

export default index
