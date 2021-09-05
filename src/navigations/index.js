import React, { useEffect } from 'react'
import {
    StatusBar, StyleSheet,
} from 'react-native';
import Toast from 'react-native-toast-message';

import AppNavigator from '@/navigations/appNavigator'

import { useDispatch, useSelector, } from 'react-redux'
import * as modalActions from '@/store/modal/actions';
import { color } from '@/constants';

const index = () => {

    const dispatch = useDispatch()
    const {
        showToast,
        showModal,
        message,
        component,
        config } = useSelector(state => state.modal)


    useEffect(() => {
        if (showToast)
            Toast.show({
                text1: message, type: 'error', position: 'bottom', onHide: () => {
                    dispatch(modalActions.dismisToast())
                }
            });
    }, [message, showToast]);



    return (
        <>
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={color.primary} />

            {/* <Modal isVisible={showModal} {...config} style={{ margin: 0 }}>
                {component}
            </Modal> */}

            <AppNavigator />
            <Toast ref={(ref) => Toast.setRef(ref)} />

        </>
    )
}

export default index

const styles = StyleSheet.create({})
