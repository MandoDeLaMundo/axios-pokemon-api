import React, {useState, useEffect} from 'react'
import axios from "axios"

const DisplayOnLoad = (props) =>
{
    const {pokemonId, refresh} = props
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>
    {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(response => setPokemon(response.data.results))
            .catch(err => console.log(err))
    }, [refresh])



    return(
        <fieldset>
            <legend>DisplayOnLoad.jsx</legend>
                {
                    pokemon.map((p, i) => <h1 key={i} >{p.name} </h1>)
                }
        </fieldset>
    )
}

export default DisplayOnLoad