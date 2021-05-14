import React, { useState } from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'

const Propiedades = () => {
    
    const [firstName, setFirstName] = useState('');

    return (
        <div className="contenedor">
            <span><input type="text" id="search" placeholder="Buscar por Ciudad" onChange={e => setFirstName(e.target.value)}/></span>
            <Home title = {"Casas en Bolivia"} data = {lista.filter(x => x.city.includes(firstName))} />
        </div>
    )
}

export default Propiedades