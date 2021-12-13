import axios from 'axios';
import { MIN_TEXT_SEARCH_LENGTH, API_URL } from './constants';
import useSWR from 'swr'


let source;
const cotizadorUrl = 'https://cotizador.carbula.com/api/cotizador/listado';
const cotizadorPatenteUrl = 'https://cotizador.carbula.com/api/cotizador';

export const getMarcaModelo = async (query, COUNTRY_CODE) => {
  try {
    if (source) {
      await source.cancel('Cancelado')
    }
    if (query.length < MIN_TEXT_SEARCH_LENGTH) return;
    source = axios.CancelToken.source();
    const response = await axios.get(`${cotizadorUrl}/marcas-modelos1`, { params: { q: query, codigo: COUNTRY_CODE }, cancelToken: source.token })
    return response
  } catch (e) {
    if (e.message === 'Cancelado') {
      return { data: '' }
    }
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
export const getYears = async (idMarca, nombreModelo) => {
  try {
    const response = await axios.get(`${cotizadorUrl}/anioModeloML`, { params: { idMarca, nombreModelo } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
export const getVersions = async (idModelo, anio) => {
  try {
    const response = await axios.get(`${cotizadorUrl}/versiones`, { params: { idModelo, anio } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
export const getZonas = async (COUNTRY_CODE) => {
  try {
    const response = await axios.get(`${cotizadorUrl}/zonas`, { params: { codigo: COUNTRY_CODE } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const submitFormAndGetCotization = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/submitFormAndGetCotization`, data)
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const searchCarByPlate = async (patente) => {
  try {
    const response = await axios.get(`${cotizadorPatenteUrl}/patente`, { params: { patente } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const updateLeadPrices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/updateLeadPrices`, data)
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const rejectSellTime = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/rejectSellTime`, data)
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const updateHubspotProperty = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/updateHubspotProperty`, data)
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
export const addContact = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const checkScheduleMeeting = async (external_id, email, COUNTRY_CODE) => {
  try {

    const response = await axios.get(`${API_URL}/checkScheduledMeeting`, { params: { dealId: external_id, email, country_code: COUNTRY_CODE } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const getLocationName = async (idZona) => {
  try {
    const response = await axios.get(`${cotizadorPatenteUrl}/nombre/zona`, { params: { idZona } })
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}


export const requestCode = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/generateCode`, data)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const verifyCode = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/checkCode`, data)
    return response
  } catch (e) {
    console.log(e)
  }
}

//=============================================================================

const fetcher = (url, token, params) => {
  return axios.get(`${API_URL}${url}`, { params, headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data.data)

}

export const useLeads = (params, token) => {
  try {
    const { data, error, isValidating, mutate } = useSWR(['/leads', JSON.stringify(params)],
      (url) => fetcher(url, token, params))
    return {
      leads: data,
      isLoading: !error && !data,
      error,
      isValidating,
      mutate
    }

  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const createHubspotLead = async (data, token) => {
  try {
    const response = await axios.post(`${API_URL}/createHubspotLead`, data, {headers: { Authorization: `Bearer ${token}` }})
    return response
  } catch (e) {
    console.log(e)
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}