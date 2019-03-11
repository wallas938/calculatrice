import React from 'react'
import Ecrans from '../Ecrans/Ecrans'
import PaveNumerique from '../PaveNumerique/PaveNumerique'
import './Calculatrice.css'

export default class Calculatrice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            valeurCourante: "0"
            ,
            valeursEcranDuHaut: "0"
            ,
            valeursEcranDuBas:  "0"
            ,
            donneeEcranDuHaut: []
            ,
            resultats: []
        }

        this.onHandleInput = this.onHandleInput.bind(this)
        this.onHandleReset = this.onHandleReset.bind(this)
        this.miseAjourEcransDuBas = this.miseAjourEcransDuBas.bind(this)
    }

    componentDidMount() {
        this.setState({
            //valeurCourante: [...this.state.valeurCourante, input]
            valeurCourante: this.state.valeurCourante = []
        })
    }

    onHandleInput(e) {
        let input = isNaN(e.target.innerHTML) ? e.target.innerHTML : +e.target.innerHTML;
        console.log(input)
        this.setState({
            //valeurCourante: [...this.state.valeurCourante, input]
            valeurCourante: [...this.state.valeurCourante, input]
        })
        console.log(this.state.valeurCourante)
    }

    miseAjourEcransDuBas() {
        
    }

    onHandleReset() {
        this.setState({
            valeurCourante: "0"
            ,
            valeursEcranDuHaut: "0"
            ,
            valeursEcranDuBas: "0"
            ,
            donneeEcranDuHaut: []
            ,
            resultats: []
        })
    }

    render() {
        return (
        <div id="calculatrice">
            <Ecrans valeursEcranDuHaut={this.state.valeursEcranDuHaut} valeursEcranDuBas={this.state.valeursEcranDuBas}/>
            <PaveNumerique handleInput={this.onHandleInput} HandleReset={this.onHandleReset} />
        </div>
        )
    }

}