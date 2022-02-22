import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card() {

    const [ movies , setMovies] = useState('');

    useEffect(()=>{
        const fetchData = async () => {
        const result = await axios.get('http://localhost:5000/movies');
        // console.log(result.data)
        setMovies(result.data)
        }
        fetchData()
    },[])
    
return (
    <div className='cards'>
    </div>
)
}

export default Card