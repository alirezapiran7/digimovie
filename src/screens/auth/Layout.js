import React from 'react'
import { StyleSheet, View, } from 'react-native'
import { globalStyle } from '@/styles'
import Logo from '@/components/Logo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { StatusBar } from 'react-native'
import { color } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = ({ navigation, children }) => {
    return (
        <SafeAreaView style={globalStyle.continer}>
            <StatusBar barStyle='light-content' backgroundColor={color.backgroundScreen} />
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid={true}
                enableAutomaticScroll={false}>
                <View style={{ flex: 1 }}>

                    <View style={styles.logoContainer}>
                        <Logo />
                    </View>

                    <View style={styles.inputContainer} >
                        {children}
                    </View>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default Layout
const styles = StyleSheet.create({
    logoContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'space-around'
    }

})

