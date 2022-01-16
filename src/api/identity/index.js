import axios from "axios"
import { environment } from "../../environment"
import storage from "../../storage"

const api = axios.create({
    baseURL: environment.VX_API_IDENTITY,
})

const authApi = axios.create({
    baseURL: environment.VX_API_IDENTITY,
})

authApi.interceptors.request.use(request => {
    const accessToken = storage.local.accessToken.get()
    console.log('accessToken:', accessToken)
    request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
})

/**
 * @param {String} email
 * @param {String} password
 */
async function getTokenAsync(email, password) {
    const response = await api.post('/token', { email, password })
    return response.data
}

async function getUsersAsync() {
    const response = await authApi.get('/users')
    return response.data
}

async function getUserByIdAsync(id) {
    const response = await authApi.get(`/users/${id}`)
    return response.data
}

export default {
    getTokenAsync,
    getUserByIdAsync,
    getUsersAsync,
}
