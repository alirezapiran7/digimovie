import axios from 'axios'
import Config from "react-native-config";
import { getToken } from '@/services/localStorage'

const apiClient = axios.create({
    baseURL: `${Config.BASE_URL}/front-end`,
    headers: {
        'ClientId': 'Un1QueId123',
        'CityId': '1698',
        'GlobalUserId': '1234567',
        'SessionId': '7654321',
        'supernova-optimize-response': '1',
    },
    timeout: 10000,
})
apiClient.interceptors.request.use(
    async config => {
        const token = await getToken()
        config.headers['Authorization'] = `${token}`
        return config;
    })


export default {
    getGenres(param) {
        return apiClient.get('/genres/', { params: param })
    },
}