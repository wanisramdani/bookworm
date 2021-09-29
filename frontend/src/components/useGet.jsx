import React, { useState, useEffect } from 'react'
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/'
const useGet = path => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    const loadData = async () => {
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

    useEffect( () => {
        loadData()
    }, [])

    return { data, error, loading }
}

export default useGet
