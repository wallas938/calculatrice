import React from 'react'
import './PaveNumerique.css'
import { cellulesDefinitions } from '../../utilitaires/variables/cellulesDefinitions'
export default function PaveNumerique ({ handleInput, HandleReset })  {


        return (
            <table>

                <tbody id="button-numbers">

                    <tr>
                        {
                                cellulesDefinitions[0].map(elem => {
                                    if(elem.key === "supp") {
                                        return <td key={elem.key} id={elem.id} className={elem.className} onClick={HandleReset}>{elem.innerHTML}</td>
                                    }else {
                                        return <td key={elem.key} id={elem.id} className={elem.className} onClick={handleInput}>{elem.innerHTML}</td>
                                    }
                                })
                        }
                    </tr>
                    <tr>
                        {
                                cellulesDefinitions[1].map(elem => {
                                    return <td key={elem.key} id={elem.id} className={elem.className} onClick={handleInput}>{elem.innerHTML}</td>
                                })
                        }
                    </tr>
                    <tr>
                        {
                                cellulesDefinitions[2].map(elem => {
                                    if(elem.rowSpan) {
                                        return <td key={elem.key} id={elem.id} className={elem.className} rowSpan={elem.rowSpan} onClick={handleInput}>{elem.innerHTML}</td>
                                    }else {
                                        return <td key={elem.key} id={elem.id} className={elem.className} onClick={handleInput}>{elem.innerHTML}</td>
                                    }
                                })
                        }
                    </tr>
                    <tr>
                        {
                                cellulesDefinitions[3].map(elem => {
                                    return <td key={elem.key} id={elem.id} className={elem.className} onClick={handleInput}>{elem.innerHTML}</td>
                                })
                        }
                    </tr>
                    <tr>
                        {
                            cellulesDefinitions[4].map(elem => {
                                    if(!elem.colspan) {
                                        return  <td key={elem.key} id={elem.id} className={elem.className} colSpan={elem.colSpan} onClick={handleInput}>{elem.innerHTML}</td>
                                    }else {
                                        return  <td key={elem.key} id={elem.id} className={elem.className} onClick={handleInput}>{elem.innerHTML}</td>
                                    }
                                })
                        }
                    </tr>

                </tbody>
                
            </table>
        )
}