import { require } from './api'

const HOSTNAME = 'http://localhost:3000'

export function getOrders() {
    const url = `${HOSTNAME}/admin/order/fetchAllOrder`
    return require('get', url, {}, true)
}
export function getDetail(id) {
    const url = `${HOSTNAME}/admin/order/fetchOrder/${id}`
    return require('get', url, {}, true)
}

