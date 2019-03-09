import React from 'react'
import Ecrans from '../Ecrans/Ecrans'
import PaveNumerique from '../PaveNumerique/PaveNumerique'

export default class Calculatrice extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div id="calculatrice">
            <Ecrans />
            <PaveNumerique />
        </div>
        )
    }

}