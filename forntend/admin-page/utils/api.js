import axios from 'axios'


const getToken = function () {
    if (process.server) {
        // server side
        return
    }
    if (window.$nuxt) {
        // user side
        return window.$nuxt.$auth.strategy.token.get('local')
    }
}

export async function require(method, url, data, auth = false) {
    const headers = {}
    if (auth) {
        headers['Authorization'] = getToken()
    }
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        return response
    } catch (error) {
        return error
    }
}