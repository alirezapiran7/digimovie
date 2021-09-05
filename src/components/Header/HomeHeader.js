import globalStyle from '@/styles'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '@/components/Text'
import { IconX, ICON_TYPE } from '@/icons'
import { color, metrics } from '@/constants'



const Header = ({ navigation }) => {
    return (
        <View style={globalStyle.navBar}>
            <TouchableOpacity>
                <IconX name="user" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchContainer}>
                <IconX name="search" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={25} />
                <Text style={[globalStyle.textGray, { marginHorizontal: metrics.m2 }]}>Search in here</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={[globalStyle.accentText, { fontSize: 18 }]}>En</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

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
