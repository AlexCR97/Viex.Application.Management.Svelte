const StorageKeys = {
    local: {
        accessToken: 'vx.identity.accessToken',
        refreshToken: 'vx.identity.refreshToken',
    },
}

export default {
    local: {
        accessToken: {
            key: StorageKeys.local.accessToken,
            get: () => localStorage.getItem(StorageKeys.local.accessToken),
            set: (accessToken) => localStorage.setItem(StorageKeys.local.accessToken, accessToken),
        },
        refreshToken: {
            key: StorageKeys.local.refreshToken,
            get: () => localStorage.getItem(StorageKeys.local.refreshToken),
            set: (refreshToken) => localStorage.setItem(StorageKeys.local.refreshToken, refreshToken),
        },
    },
}
