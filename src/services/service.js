import axios from "axios";
//const baseURL = 'http://localhost:3001/api/persons'
const baseURL = 'https://vast-bayou-31580.herokuapp.com/api/persons'
//const baseURL = '/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(res => res.data)
}

const create = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    return request.then(res => res.data)
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseURL}/${id}`, newPerson)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(res => res.data)
}

export default {getAll, create, update, remove}