import React from 'react'
import './EcranDuHaut.css'
export default function EcranDuHaut (props)  {

        return (
            <label htmlFor="ecran-sup">
                <input id="ecran-sup" name="ecran-sup" type="text" value="400" readOnly/>
            </label>
        )
}