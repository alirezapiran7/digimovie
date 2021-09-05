import globalStyle from '@/styles'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native'
import Text from '@/components/Text'
import { IconX, ICON_TYPE } from '@/icons'
import { color, metrics } from '@/constants'
import * as authActions from '@/store/auth/actions'
import { useDispatch } from 'react-redux'




const SearchHeader = ({ navigation }) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef()

    const back = () => {
        navigation.goBack()
    }

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }

        return () => {

        }
    }, [])



    return (
        <View style={globalStyle.navBar}>
            <TouchableOpacity onPress={back}>
                <IconX name="arrow-left" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={30} />
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <IconX name="search" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={25} />
                <TextInput style={[globalStyle.title, { flex: 1, marginHorizontal: metrics.m2 }]} ref={inputRef} />
                {isLoading && <ActivityIndicator />}
            </View>
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: metrics.m2,
        backgroundColor: color.postBackground,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: metrics.p2
    }
})
