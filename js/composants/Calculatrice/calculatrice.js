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
            ancienneValeur: []
            ,
            valeursEcranDuHaut: "0"
            ,
            valeursEcranDuBas:  "0"
            ,
            donneeEcranDuHaut: []
            ,
            operations: []
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
            valeurCourante: [...this.state.valeurCourante, numericInput],
            donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, numericInput]
        }, () => {

            this.setState({
                valeursEcranDuBas: this.state.valeurCourante.join(''),
            })
        })
    }

    signeInputHandler(signeInput) {

        let lastInput = this.state.donneeEcranDuHaut[this.state.donneeEcranDuHaut.length - 1]

        if(isNaN(lastInput)) {
            const donneeEcranDuHaut = this.state.donneeEcranDuHaut
            const operations = this.state.operations
            donneeEcranDuHaut[this.state.donneeEcranDuHaut.length - 1] = signeInput
            operations[this.state.operations.length - 1] = signeInput
            this.setState({
                donneeEcranDuHaut: donneeEcranDuHaut,
                operations: operations,
            }, () => {
                this.setState({
                    valeurCourante: [signeInput]
                }, () => {
                    /*console.log('Last Input', lastInput)
                    console.log('Operations en cours: ', this.state.operations)
                    console.log('donnee a afficher dans l\'écran du haut: ', this.state.donneeEcranDuHaut)
                    */
                    this.setState({
                        valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
                        valeursEcranDuBas: this.state.valeurCourante.join(''),
                        valeurCourante: []
                    })
                })
            })
        } else if(this.state.resultats.length === 0) {
            console.log('Enter !!!')
            this.setState({
                donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, signeInput],
                operations: [...this.state.operations, this.state.valeurCourante, signeInput],
                valeurCourante: [signeInput]
            }, () => {
                console.log(this.state.operations)
                this.setState({
                    valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
                    valeursEcranDuBas: this.state.valeurCourante.join(''),
                    valeurCourante: []
                })
            })
        }
        
    }

    /** GERER LE SIGNE EGALE !!!! */
    equalInputHandler(equalInput) {

        this.setState({
            operations: [...this.state.operations, this.state.valeurCourante, equalInput],
            donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, equalInput],
        }, 
        () => {
        
        let resultat = calculate(this.state.operations);

        this.setState({

            donneeEcranDuHaut: [...this.state.donneeEcranDuHaut, resultat],
            
            valeurCourante: [resultat],

            operations: [resultat]

        }, 
        () => this.setState({

            valeursEcranDuBas: this.state.valeurCourante.join(''),
            
            valeursEcranDuHaut: this.state.donneeEcranDuHaut.join(''),
        
        }))})
    }

    onHandleInput(e) {

        let input = e.target.innerHTML

        if(input === '=') {

            this.equalInputHandler(input)
            //console.log(input, 'equal')
            
        }else if(isNaN(input) && input !== '.') {
            
            this.signeInputHandler(input)
            //console.log(input, 'signe')
            
        }else {
            
            this.numericInputHandler(input)
            //console.log(input, 'number or point')
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
            operations: []
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