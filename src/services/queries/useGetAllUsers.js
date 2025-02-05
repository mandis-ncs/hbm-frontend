import api from '../api.js'
const appApi = import.meta.env.VITE_APP_API

export const fetchUsers = async () => {
    try {
        const response = await api.get(appApi)
        const { data } = response.data;

        if (!data) {
            throw new Error("Users not found")
        }

        return data;
    } catch (error) {
        if (error.status === 401) {
            window.location.reload()
        }

        throw new Error("Users not found")
    }
}