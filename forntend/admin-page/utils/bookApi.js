import { require } from './api'

const HOSTNAME = 'http://localhost:3000'

export function books() {
    const url = `${HOSTNAME}/public/fetchAllBooks`
    return require('get', url, {}, false)
}

export function addbook(data) {
    const url = `${HOSTNAME}/admin/book/addBook`
    return require('post', url, data, true)
}

export function deletebook(id) {
    const url = `${HOSTNAME}/admin/book/deletebook/${id}`
    return require('delete', url, {}, true)
}