import { isArray, isNumber } from "util";


export function calculate(equation) { 

    let resultatNumerique
    
    while(equation.length > 0) {
        let element = equation.shift();

        resultatNumerique += element
    }

    return resultatNumerique
}


/*export function calculate(tab) {
    let resultat = 0 

    let finalTab = tab.map(elem => {
        return isArray(elem) ? elem.join('') : elem
    })

    finalTab.pop()

    console.log('Tableau des opérations: ', finalTab)
            
    for(let i = 0;  i <= finalTab.length; i++){

            if(isNaN(finalTab[i])) {
                continue 
                
            }else {
                
                switch (finalTab[i-1]) {
                    case '+':
                        resultat += Number(finalTab[i]) 
                        break 
                    case '-':
                        resultat -= Number(finalTab[i]) 
                        break 
                    case '*':
                        resultat *= Number(finalTab[i]) 
                        break 
                    case '÷':
                        resultat /= Number(finalTab[i]) 
                        break 
                    default:
                        resultat += Number(finalTab[i]) 
                        break 
                }
            }
    }
    return resultat 
}*/