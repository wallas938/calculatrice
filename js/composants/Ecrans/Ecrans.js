import React from 'react'
import EcranDuHaut from './EcranDuHaut/EcranDuHaut'
import EcranDuBas from './EcranDuBas/EcranDuBas'
import './Ecrans.css'

export default function Ecrans ({ valeursEcranDuHaut, valeursEcranDuBas })  {

        return (
            <div id="ecrans">
                <EcranDuHaut valeursEcranDuHaut={valeursEcranDuHaut}/>
                <EcranDuBas valeursEcranDuBas={valeursEcranDuBas}/>
            </div>
        )
}