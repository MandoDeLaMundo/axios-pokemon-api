import React, {useState} from 'react'
import DisplayOnLoad from './DisplayOnLoad'

const PokemonForm = () =>
{
    const [pokemonId, setPokemonId] = useState("")
    const [refresh, setRefresh] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e =>
    {
        e.preventDefault()
        setSubmitted(true)
        setRefresh(!refresh)
    }

    return(
        <fieldset>
            <legend> PokemonForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <button type="submit" > Search for pokemon!</button>
            </form>
            {
                submitted&&
                <DisplayOnLoad pokemonId={pokemonId} refresh={refresh} />
            }

        </fieldset>
    )
}

export default PokemonForm