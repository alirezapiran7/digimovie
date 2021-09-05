import React, { useState } from 'react'

import globalStyle from '@/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '@/components/Header/HomeHeader'
import { Categories, Movies } from './component'



const index = () => {

    return (
        <SafeAreaView style={globalStyle.continer}>
            <HomeHeader />
            <Categories />
            <Movies />
        </SafeAreaView>
    )
}

export default index
