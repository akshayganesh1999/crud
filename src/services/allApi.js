import axios from "axios";

const base_url="https://crud-server-ycvw.onrender.com"

export const addContactApi=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const getContactApi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const getOneContactApi=async(id)=>{
    return await axios.get(`${base_url}/contacts/${id}`)
}

export const deleteContactApi=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const updateContactApi=async(id,data)=>{
    return await axios.put(`${base_url}/contacts/${id}`, data)
}