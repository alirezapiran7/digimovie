import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { globalStyle } from '@/styles'
import Text from '@/components/Text'
import { LoginInput } from '@/components/input'
import { Formik } from 'formik'
import * as yup from 'yup'
import { LoadingButton } from '@/components/Button'
import Layout from './Layout'

import { useDispatch } from 'react-redux'
import * as authAction from '@/store/auth/actions'
import Space from '@/components/Space'



const index = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)


    const submit = async (values) => {
        try {
            setIsLoading(true)
            await dispatch(authAction.login(values))
        } finally {
            setIsLoading(false)
        }
    }

    return (

        <Layout>
            <Formik
                initialValues={{ username: 'imdb@digikala.com', password: 'fr0Nt-End@ta$k' }}
                validationSchema={
                    yup.object().shape({
                        username: yup.string().required().email(),
                        password: yup.string().min(1, "Enter Password")
                    })
                }
                onSubmit={submit}
                validateOnMount
            >
                {({
                    handleChange,
                    handleBlur,
                    values,
                    isValid,
                    handleSubmit

                }) => (
                    <>
                        <View style={{ width: '100%' }}>
                            <LoginInput
                                name="username"
                                lable="Username"
                                placeholder="Type your email address"
                                value={values.username}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                keyboardType="email-address"
                            />
                            <Space />
                            <LoginInput
                                name="password"
                                lable="Password"
                                placeholder="Type your password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={true}
                            />
                        </View>

                        <View >
                            <LoadingButton isLoading={isLoading} disabled={!isValid} title="Submit" onPress={handleSubmit} />
                        </View>

                    </>
                )}
            </Formik>
        </Layout>)
}

export default index
