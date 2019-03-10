import React from 'react';
import './EcranDuBas.css'
export default function EcranDuBas (props)  {

        return (
            <label htmlFor="ecran-inf">
                <input id="ecran-inf" name="ecran-inf" type="text" value="226 + 13" readOnly/>
            </label>
        )
}