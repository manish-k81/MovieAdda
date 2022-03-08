import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card() {

    const [ movies , setMovies] = useState('');

    useEffect(()=>{
        const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/movies');
        // console.log(result.data)
        setMovies(result.data)
        }
        fetchData()
    },[])

    const MovieValues = Object.values(movies)
return (
    <div className='cards'>
        {
            MovieValues.forEach(mv=>{
                <p>{mv.title}</p>
                console.log(mv.title)
            })
        }
    </div>
)
}

export default Card