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
        this.numericInputHandler = this.numericInputHandler.bind(this)
        this.signeInputHandler = this.signeInputHandler.bind(this)
        this.equalInputHandler = this.equalInputHandler.bind(this)
    }

    componentDidMount() {
        this.setState({
            valeurCourante: this.state.valeurCourante = []
        })
    }

    numericInputHandler(numericInput) {
        
        numericInput = numericInput !== '.' ? +numericInput : '.'

        this.setState({
            donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, numericInput],
            valeurCourante: [...this.state.valeurCourante, numericInput], 
        },

        () => this.setState({
            valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
        }, 
        
        () => this.setState({
            valeursEcranDuBas: this.state.valeurCourante.join(''),
        })))
    }

    signeInputHandler(signeInput) {
        let lastInput = this.state.donneeEcranDuHaut[this.state.donneeEcranDuHaut.length - 1]
        
        if(isNaN(lastInput)) {
            this.setState({
                donneeEcranDuHaut: this.state.donneeEcranDuHaut.pop(),
                valeurCourante: [signeInput],
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, signeInput],
                
            }, 
            () => this.setState({
                valeursEcranDuBas: this.state.valeurCourante.join(''),
                valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
                valeurCourante: []
            }))
        }else {
            this.setState({
                valeurCourante: [signeInput],
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, signeInput],
                
            }, 
            () => this.setState({
                valeursEcranDuBas: this.state.valeurCourante.join(''),
                valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
            }))
        }
        
    }

    /** GERER LE SIGNE EGALE !!!! */
    equalInputHandler(equalInput) {
        this.setState({
            valeurCourante: this.state.valeurCourante.join('')
        },
        () => this.setState({
            donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, equalInput],
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
        }))}))
    }

    onHandleInput(e) {

        let input = e.target.innerHTML

        if(input === '=') {

            this.equalInputHandler(input)
            console.log(input, 'equal')
            
        }else if(isNaN(input) && input !== '.') {
            
            this.signeInputHandler(input)
            console.log(input, 'signe')
            
        }else {
            
            this.numericInputHandler(input)
            console.log(input, 'number or point')
        }
    }

    onHandleReset() {
        this.setState({
            valeurCourante: []
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