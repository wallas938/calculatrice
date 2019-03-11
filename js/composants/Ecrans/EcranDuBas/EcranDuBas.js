import React from 'react';
import './EcranDuBas.css'
export default function EcranDuBas ({ valeursEcranDuBas })  {
        

        return (
            <label htmlFor="ecran-inf">
                <input id="ecran-inf" name="ecran-inf" type="text" value={valeursEcranDuBas} readOnly/>
            </label>
        )
}