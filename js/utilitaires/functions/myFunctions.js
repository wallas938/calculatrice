import { isArray } from "util";


export function calculate(tab) {
    let resultat = 0 

    let finalTab = tab.map(elem => {
        return isArray(elem) ? elem.join('') : elem
    })

    finalTab.pop()

    console.log('Tableau des opérations: ', finalTab.join(''))
            
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
}

/** Traitemement des nombres et des operateurs */
/*function recupInput(input, signe) {

    if(input && signe) {

        if(signe === "=") {
            //Pour le signe egale

            input = +input.join('')

            donneeEcranDuHaut.push(input, signe)

            let lastResultat = calculate()

            resultats = [lastResultat]

            donneeEcranDuHaut.push(lastResultat)

            ecranDuHaut.value = donneeEcranDuHaut.join('')

            donneeEcranDuHaut = [lastResultat]

            ecranDuBas.value = lastResultat

        }else {
            // Pour tout autre signes 

                let lastElement = donneeEcranDuHaut[donneeEcranDuHaut.length - 1] //Variable qui verifie si le dernier element de  
                                                                                  //donneeEcranDuHaut est un operateur
                
                if(input.length === 0 && isNaN(lastElement)) {

                    donneeEcranDuHaut.pop()

                    donneeEcranDuHaut.push(signe)

                    ecranDuHaut.value = signe;

                }else if(input.length === 0) {
                    
                    donneeEcranDuHaut.push(signe)
                
                }else {

                    input = +input.join('')

                    donneeEcranDuHaut.push(input, signe)

                }

                ecranDuHaut.value = donneeEcranDuHaut.join('')
            
        }
    }else {
        /** Pour les nombres */
/*
        donneeEcranDuHaut = [...resultats]

        donneeEcranDuHaut.push(signe)

        ecranDuHaut.value = donneeEcranDuHaut.join('')

        resultats = []

    }
}

*/
/* Efface toutes les données enregistrées existantes du programme */
/*
function reset() {
    
    donneeEcranDuHaut = []

    currentInput = []

    resultats = [] 

    ecrans.forEach(element => {

        element.value = "" 

    })
} 

/* Recupere les nombres pour les afficher dans l'ecran du bas */
/*
numeros.forEach(element => {

    element.addEventListener('click', function() {

    let number = element.innerHTML === '.' ? '.' : +element.innerHTML // String => Number

    currentInput.push(number)

    ecranDuBas.value = currentInput.join('')

    })
}) 

/* Recupere les operateurs pour les afficher sauf  "="*/
/*
signes.forEach(element => {

    element.addEventListener('click', function() {

       let signe = element.innerHTML  //Operateur cliqué

       if(signe !== "=") { ecranDuBas.value = signe } 

        recupInput(currentInput, signe)

        currentInput = [] 
    })
}) 

/** Fait appel a reset */
/*
effacer.addEventListener('click', function() {

    reset() 

})
*/