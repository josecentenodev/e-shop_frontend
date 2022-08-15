import axios from 'axios';
import {API_URL} from '../services/settings'

export default async function getProducts (id) {
    let categoryId = id
    try {
        const response = await axios({
            url: `${API_URL}/products?categories=${categoryId}`,
            method: 'GET'
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}