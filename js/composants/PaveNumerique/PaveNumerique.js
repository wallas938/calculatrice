import React from 'react'
import './PaveNumerique.css'
export default function PaveNumerique (props)  {

        return (
            <table>

            <tbody id="button-numbers">
                <tr>
                    <td value="supp" id="supp">AC</td>
                    <td value="/" id="diviser" className="signe">÷</td>
                    <td value="*" id="mutiplier" className="signe">*</td>
                    <td value="-" id="soustraire" className="signe">-</td>
                </tr>
                <tr>
                    <td value="7" id="sept" className="number">7</td>
                    <td value="8" id="huit" className="number">8</td>
                    <td value="9" id="neuf" className="number">9</td>
                    <td value="+" id="plus" className="signe">+</td>
                </tr>
                <tr>
                    <td value="4" id="quatre" className="number">4</td>
                    <td value="5" id="cinq" className="number">5</td>
                    <td value="6" id="six" className="number">6</td>
                    <td rowSpan="3" value="=" className="signe">=</td>
                </tr>
                <tr>
                    <td value="1" id="un" className="number">1</td>
                    <td value="2" id="deux" className="number">2</td>
                    <td value="3" id="trois" className="number">3</td>
                </tr>
                <tr>
                    <td colSpan="2" value="0" id="zero" className="number" value="0">0</td>
                    <td value="." id="virgule" className="number">.</td>
                </tr>
            </tbody>
                
            </table>
        )
}