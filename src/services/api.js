import axios from 'axios'
const appApi = import.meta.env.VITE_APP_API

const api = axios.create({
    baseURL: appApi
})

export default api