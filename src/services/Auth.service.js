import api from "../api"
import storage from "../storage"

/**
 * @param {String} email
 * @param {String} password
 */
async function authenticateAsync(email, password) {
    const response = await api.identity.getTokenAsync(email, password)
    const accessToken = response.content.accessToken
    const refreshToken = response.content.refreshToken
    storage.local.accessToken.set(accessToken)
    storage.local.refreshToken.set(refreshToken)
    localStorage.setItem('vx.identity.accessToken', accessToken)
    localStorage.setItem('vx.identity.refreshToken', refreshToken)
}

export default {
    authenticateAsync,
}
