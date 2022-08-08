import axios from 'axios';
import {API_URL} from '../services/settings'

export default async function getCategories () {
    try {
        const response = await axios({
            url: `${API_URL}/categories`,
            method: 'GET'
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}