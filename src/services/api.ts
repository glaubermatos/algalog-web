import axios from 'axios'

const isDevelopment = process.env.NODE_ENV !== 'production'

export const api = axios.create({
    baseURL: isDevelopment ? 'http://localhost:3000/api' : 'https://algalog-glauber.herokuapp.com'
})