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

export const useGetKlass = path => {
    const [klassLoading, setKlassLoading] = useState(true);
    const [klassData, setKlassData] = useState([])
    const [klassError, setKlassError] = useState(null)

    useEffect( () => {           
        const LoadKlass = async () => {
            try {
                const response = await axios.get(baseUrl + path) 
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


export const useGetSeries = path => {
    const [seriesLoading, setSeriesLoading] = useState(true);
    const [seriesData, setSeriesData] = useState([])
    const [seriesError, setSeriesError] = useState(null)

    useEffect( () => {           
        const LoadKlass = async () => {
            try {
                const response = await axios.get(baseUrl + path) 
                setSeriesLoading(false);
                setSeriesData(response.data);
                setSeriesError(null);
            } catch(e) {
                setSeriesLoading(false);
                setSeriesError(e.response);
                setSeriesData(null);
            }
        }
        LoadKlass(path)
    }, [path])

    return { seriesData, seriesError, seriesLoading }
}

