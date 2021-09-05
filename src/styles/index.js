import { StyleSheet } from 'react-native'
import { metrics, color } from '@/constants'

export const fontFamily = {
    Bold: null,
    ExtraLight: null,
    Light: null,
    Medium: null,
    Regular: null,
    SemiBold: null,
}

export const globalStyle = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: color.backgroundScreen,
        flexDirection: 'column'
    },

    centerContiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backgroundScreen
    },

    centerVertical: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: color.backgroundScreen
    },

    centerHorizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: color.backgroundScreen
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: color.white,
        fontSize: metrics.f2,
    },
    titleBold: {
        color: color.white,
        fontSize: metrics.f2,
        fontWeight: 'bold'
    },

    titleGray: {
        color: color.white,
        fontSize: metrics.f2,
    },
    titleBoldGray: {
        color: color.gray,
        fontSize: metrics.f2,
        fontWeight: 'bold'
    },


    text: {
        color: color.white,
        fontSize: metrics.f1,
    },
    textBold: {
        color: color.white,
        fontSize: metrics.f1,
        fontWeight: 'bold'
    },


    textGray: {
        color: color.gray,
        fontSize: metrics.f1,
    },
    textGrayBold: {
        color: color.gray,
        fontSize: metrics.f1,
        fontWeight: 'bold'
    },

    successText: {
        color: color.green,
        fontSize: metrics.f1,
    },
    accentText: {
        color: color.accent,
        fontSize: metrics.f1,
    },
    accentTextBold: {
        color: color.accent,
        fontSize: metrics.f1,
        fontWeight: 'bold'
    },
    errorText: {
        color: color.tomato,
        fontSize: metrics.f1,
    },
    errorTextBold: {
        color: color.tomato,
        fontSize: metrics.f1,
        fontWeight: 'bold'
    },
    space: {
        alignSelf: 'center',
        marginVertical: metrics.m4
    },


    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },

    navBar: {
        width: '100%',
        height: metrics.navBarHeight,
        backgroundColor: color.primary,
        alignItems: 'center',
        paddingHorizontal: metrics.p3,
        flexDirection: 'row'
    },
    card: {
        backgroundColor: color.postBackground,
        borderRadius: metrics.r4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: metrics.p2
    }


})
export default globalStyle;