import axios from 'axios'
import Config from "react-native-config";

const apiClient = axios.create({
    baseURL: `${Config.BASE_URL}/front-end`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ClientId': 'Un1QueId123',
        'CityId': '1698',
        'GlobalUserId': '1234567',
        'SessionId': '7654321',
        'supernova-optimize-response': '1',
    },
    timeout: 10000,
})


export default {
    login(data) {
        return apiClient.post('/login/', data)
    },
}