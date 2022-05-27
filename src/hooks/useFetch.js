import React, { useState, useEffect } from 'react'

function useFetch(url) {

    let [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data.data.stations);

            })


    },[])

    return data
}



export default useFetch