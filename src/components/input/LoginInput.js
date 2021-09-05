import React, { memo, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { metrics, color } from '@/constants';
import Text from '@/components/Text'
import { globalStyle } from '@/styles'


const loginInput = ({ value, placeholder, lable, secureTextEntry, errorMessage, sucessMessage, isValid, onChangeText, ...rest }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{lable}</Text>
            <TextInput
                value={value}
                style={[styles.input, errorMessage ? styles.inputError : {}, sucessMessage ? styles.inputSuccess : {}]}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                numberOfLines={1}
                placeholderTextColor={color.gray}
                onChangeText={onChangeText}
                {...rest} />
            {sucessMessage && < Text style={styles.successText}>{sucessMessage} </Text>}
            {errorMessage && < Text style={styles.errorText}>{errorMessage} </Text>}
        </View >
    );
};

export default loginInput;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: metrics.m1
    },
    lable: {
        ...globalStyle.titleBoldGray,
        marginStart: metrics.m4,
        marginBottom: metrics.m2
    },
    input: {
        height: 40,
        fontSize: metrics.f1,
        marginVertical: metrics.s8,
        borderRadius: metrics.r5,
        paddingHorizontal: metrics.p3,
        backgroundColor: color.postBackground,
        justifyContent: 'center',
        alignItems: 'center',
        color: color.white
    },
    inputError: {
        borderWidth: metrics.bw1,
        borderColor: color.tomato
    },
    inputSuccess: {
        borderWidth: metrics.bw1,
        borderColor: color.green
    },
    successText: {
        ...globalStyle.successText,
        marginTop: metrics.m2
    },
    errorText: {
        ...globalStyle.errorText,
        marginTop: metrics.m2
    }
});
