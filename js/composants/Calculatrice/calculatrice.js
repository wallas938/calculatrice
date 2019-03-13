import React from 'react'
import Ecrans from '../Ecrans/Ecrans'
import PaveNumerique from '../PaveNumerique/PaveNumerique'
import './Calculatrice.css'
import { isNumber } from 'util';
import { calculate } from '../../utilitaires/functions/myFunctions'

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
        if(isNumber(input) || input === '.') {
            this.setState({
                valeurCourante: [...this.state.valeurCourante, input],
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, input],
                
            }, 
            () => this.setState({
                //valeurCourante: [...this.state.valeurCourante, input]
                valeursEcranDuBas: this.state.valeurCourante.join(''),
                valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
            }))
        }else if(input === '=') {
            
            this.setState({
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, input],
                valeurCourante: [],
            }, 
            () => {

            let resultat = calculate(this.state.donneeEcranDuHaut);

            this.setState({
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, resultat],
                valeurCourante: [resultat],

            }, 
            () => this.setState({
                valeursEcranDuBas: this.state.valeurCourante.join(''),
                valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
            }))})

        }else {
            this.setState({
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, input],
                valeurCourante: [],
            },

            () => this.setState({
                valeurCourante: [input],
                valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
            }, 
            
            () => this.setState({
                valeursEcranDuBas: this.state.valeurCourante.join(''),
            })))
        }
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