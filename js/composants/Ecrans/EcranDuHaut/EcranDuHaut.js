import React from 'react'
import './EcranDuHaut.css'
export default function EcranDuHaut ({ valeursEcranDuHaut })  {

        return (
            <label htmlFor="ecran-sup">
                <input id="ecran-sup" name="ecran-sup" type="text" value={valeursEcranDuHaut} readOnly/>
            </label>
        )
}