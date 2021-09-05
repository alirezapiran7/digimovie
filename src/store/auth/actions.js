import types from './types'
import { saveToken, removeToken, getToken } from '@/services/localStorage'
import authService from '@/services/api/auth'
import handleError from '@/utils/handleError'



export const login = (data) => {
    return async (dispatch, state) => {
        try {
            const res = await authService.login(data)
            if (res.data) {
                await saveToken(res.data.data.token)
                dispatch({ type: types.AUTHENTICATE })
            }
        } catch (error) {
            handleError(dispatch, error)
            throw error
        }
    };
}

export const checkUser = () => {
    return async (dispatch, state) => {
        const token = await getToken()
        setTimeout(() => {
            if (token) {
                dispatch({ type: types.AUTHENTICATE })
            } else {
                dispatch({ type: types.AUTHENTICATING })
            }
        }, 2000);
    };
}

export const logout = () => {
    return async (dispatch, state) => {
        await removeToken()
        setTimeout(() => {
            dispatch({ type: types.AUTHENTICATING })
        }, 1000);

    };
}