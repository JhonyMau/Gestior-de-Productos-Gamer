import axios from 'axios';

const clienteAxios = axios.create({
    headers: {'Content-Type': 'multipart/form-data'},
    baseURL: 'http://localhost:5000/'
})

export default clienteAxios