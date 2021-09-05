import React from 'react'
import { Image } from 'react-native'
import logo from '@/asstes/icons/logo.png'

const Logo = () => {
    return (
        <Image source={logo} style={{ width: 100 }} resizeMode={'contain'} width={100} height={50} />
    )
}

export default Logo

