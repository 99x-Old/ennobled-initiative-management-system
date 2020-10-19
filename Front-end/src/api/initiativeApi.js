import axios from "axios";
import { appSettings } from "../appSettings.js"


export const getInitiatives = async (year) => {
    const res = await axios.get(appSettings.hostApi + `api/initiatives?year=${year}`);
    return res.data;
}

export const getInitiative = async (id) => {
    const res = await axios.get(appSettings.hostApi + `api/initiatives/${id}`);
    return res;
}

export const postInitiative = async (intiative) => {
    const res = await axios.post(appSettings.hostApi + `api/initiatives`, intiative);
    return res;
}

export const putInitiative = async (id, intiative) => {
    const res = await axios.put(appSettings.hostApi + `api/initiatives/${id}`, intiative);
    return res;
}

export const deleteInitiative = async (id) => {
    const res = await axios.delete(appSettings.hostApi + `api/initiatives/${id}`);
    return res;
}