import globalStyle from '@/styles'
import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native'
import Text from '@/components/Text'
import { IconX, ICON_TYPE } from '@/icons'
import { color, metrics } from '@/constants'



const Category = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={isSelected ? styles.selectedCat : styles.normalCat}>
            <Text style={isSelected ? globalStyle.text : globalStyle.accentText}>
                {item.name}
            </Text>
            {isSelected &&
                <IconX name="close" origin={ICON_TYPE.MATERIAL_COMMUNITY} color={color.white} size={15} style={{ marginStart: metrics.m2 }} />
            }

        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    normalCat: {
        borderColor: color.accent,
        backgroundColor: color.backgroundScreen,
        borderRadius: 20,
        borderWidth: metrics.bw1,
        paddingHorizontal: metrics.p3,
        justifyContent: 'center',
        height: 42,
        marginHorizontal: metrics.m1
    },
    selectedCat: {
        flexDirection: 'row',
        borderColor: color.backgroundScreen,
        backgroundColor: color.accent,
        borderRadius: 20,
        borderWidth: metrics.bw1,
        paddingHorizontal: metrics.p3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        marginHorizontal: metrics.m1
    }
})
