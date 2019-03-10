import React from 'react'
import EcranDuHaut from './EcranDuHaut/EcranDuHaut'
import EcranDuBas from './EcranDuBas/EcranDuBas'
import './Ecrans.css'

export default function Ecrans (props)  {

        return (
            <div id="ecrans">
                <EcranDuHaut />
                <EcranDuBas />
            </div>
        )
}