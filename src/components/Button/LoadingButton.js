import React from 'react'
import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import Text from '@/components/Text'
import { color, metrics } from '@/constants'
import globalStyle from '@/styles'


export const LoadingButton = ({ title, onPress, isLoading, disabled, ...props }) => {
    return (
        <TouchableOpacity disabled={disabled} style={disabled ? [styles.primary, { opacity: 0.4 }] : styles.primary} onPress={onPress} activeOpacity={0.7}>
            <Text style={globalStyle.title}>{title}</Text>
            {isLoading && <ActivityIndicator style={styles.loadingBtn} color={color.accent} />}
        </TouchableOpacity>
    )
}

export default LoadingButton

const styles = StyleSheet.create({
    primary: {
        backgroundColor: color.accent,
        borderRadius: metrics.r5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.6 * metrics.screenWidth
    },

    loadingBtn: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: metrics.r5,
        backgroundColor: color.transparentWhite
    },


})
