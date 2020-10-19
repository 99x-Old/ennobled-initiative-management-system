import axios from "axios";
import { appSettings } from "../appSettings";


export const getInitiativeYears = async () => {
    const res = await axios.get(appSettings.hostApi + `api/initiativeYears`);
    return res.data;
}

export const getInitiativeYear = async (id) => {
    const res = await axios.get(appSettings.hostApi + `api/initiativeYears/${id}`);
    return res;
}


export const postInitiativeYear = async (year) => {
    const res = await axios.post(appSettings.hostApi + `api/initiativeYears`, year);
    return res;
}

export const putInitiativeYear = async (id, year) => {
    const res = await axios.put(appSettings.hostApi + `api/initiativeYears/${id}`, year);
    return res;
}

export const deleteInitiativeYear = async (id) => {
    const res = await axios.delete(appSettings.hostApi + `api/initiativeYears/${id}`);
    return res;
}