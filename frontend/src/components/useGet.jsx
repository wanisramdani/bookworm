import { useState, useEffect } from 'react'
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/'
export const useGetData = path => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect( () => {
        const loadData = async (path) => {
            try {
                const response = await axios.get(baseUrl + path)
                setLoading(false);
                setData(response.data);
                setError(null);
            } catch(e) {
                setLoading(false);
                setError(e.response);
                setData(null);
            }
        }
    
        loadData(path)
    }, [path])

    return { data, error, loading }
}

export const useGetProfile = path => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState('')
    const [klass, setKlass] = useState([])
    const [series, setSeries] = useState(null)
    
    useEffect( () => {
        const loadData = async (path) => {
            try {
                const response = await axios.get(baseUrl + path)
                //const [ klassResponse, categoryResponse, seriesData  ] = await axios.all[ getKlass(response.data), getCategory(response.data), getSeries(response.data) ]
                setData(response.data)
                
                setCategory( getCategory(response.data) )
                setKlass( getKlass(response.data) )         
                setSeries( getSeries(response.data) ) 
                setLoading(false);
                setError(null);   

            } catch(e) {
                setLoading(false);
                setError(e.response);
                setData(null);
            }
        }
    
        loadData(path)
    }, [path])
    
    return { data, category, klass, series, error, loading }
}

function getCategory(data) {
    return axios.get(baseUrl + data.category.split('api')[1].substring(1));
}
function getKlass(data) {
    return axios.get(baseUrl + data.klass[0].split('api')[1].substring(1));
}
function getSeries(data) {
    return axios.get(baseUrl + data.series[0].split('api')[1].substring(1));
}


export const useGetKlass = path => {
    const [klassLoading, setKlassLoading] = useState(true);
    const [klassData, setKlassData] = useState([])
    const [klassError, setKlassError] = useState(null)

    useEffect( () => {           
        const LoadKlass = async () => {
            try {
                const response = await axios.get(baseUrl + path[0].split('api')[1].substring(1)) 
                setKlassLoading(false);
                setKlassData(response.data);
                setKlassError(null);
            } catch(e) {
                setKlassLoading(false);
                setKlassError(e.response);
                setKlassData(null);
            }
        }
        LoadKlass(path)
    }, [path])

    return { klassData, klassError, klassLoading }
}


