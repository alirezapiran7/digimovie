import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveToken = async (token) => {
    try {
        await setStorage('token', token)
    } catch (error) {
        console.log(error);
    }

}

export const getToken = async () => {
    try {
        const result = await getStorage('token')
        return result
    } catch (error) {
        return null
    }
}

export const removeToken = async () => {
    try {
        await removeItem('token')
    } catch (error) {
        console.log(error);
    }

}

export const setStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        return true
    } catch (e) {
        return false
    }
}

export const getStorage = async (key) => {
    try {
        const item = await AsyncStorage.getItem(key)
        return item
    } catch (e) {
        return null
    }
}

export const removeItem = async (key) => {
    try {
        const item = await AsyncStorage.removeItem(key)
    } catch (e) {

    }
}
export default { setStorage, getStorage, removeItem }