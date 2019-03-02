import { isNumber } from "util";

var ecrans = document.querySelectorAll('.displayers');

var ecranDuBas = document.getElementById('bottom-displayer');

var ecranDuHaut = document.getElementById('top-displayer');

var signes = document.querySelectorAll('.signe');

var numeros = document.querySelectorAll('.number');

var effacer = document.getElementById('supp');

var donneeEcranDuBas = [];

var donneeEcranDuHaut = [];

var resultats = []

ecranDuBas.value = "";

ecranDuHaut.value = "";

function calculate() {
    let resultat = 0;
    let finalTab = [...donneeEcranDuHaut];

    finalTab.pop(); // retirer le signe "="
    console.log(finalTab)
    for(let i = 0; i <= finalTab.length; i++){
        
            if(isNaN(finalTab[i])) {
                continue;
                
            }else {
                switch (finalTab[i-1]) {
                    case '+':
                        console.log('addition')
                        resultat += parseInt(finalTab[i]);
                        console.log(resultat)
                        break;
                    case '-':
                        console.log('soustraction')
                        console.log(finalTab[i])
                        resultat -= parseInt(finalTab[i]);
                        break;
                    case '*':
                        console.log('multiplication')
                        console.log(finalTab[i])
                        resultat *= parseInt(finalTab[i]);
                        break;
                    case '÷':
                        console.log('division')
                        console.log(finalTab[i])
                        resultat /= parseInt(finalTab[i]);
                        break;
                    default:
                        resultat += parseInt(finalTab[i]);
                        break;
                }
            }
    }
    return resultat;
}


function recupInput(input) {
    if(isNaN(input)) {
        if(input === "=") {
            donneeEcranDuHaut.push(...donneeEcranDuBas,input);
            let resultat = calculate();
            resultats.push(resultat);
            donneeEcranDuHaut.push(resultat);
            ecranDuHaut.value = donneeEcranDuHaut.join('');
            donneeEcranDuHaut = [resultat]
            donneeEcranDuBas = []
            ecranDuBas.value = resultat;
            console.log(...donneeEcranDuHaut)
        }else {
            ecranDuBas.value = input;
            donneeEcranDuHaut.push(...donneeEcranDuBas, input);
            ecranDuHaut.value = donneeEcranDuHaut.join('');
            console.log(...donneeEcranDuHaut)
            donneeEcranDuBas = [];
        }
        
    }else {
        donneeEcranDuBas.push(input);
        ecranDuBas.value = donneeEcranDuBas.join('');
    }
}

function reset() {
    donneeEcranDuHaut = [];
    donneeEcranDuBas = [];
    resultats = [];
    ecrans.forEach(element => {
        element.value = "";
    })
}

numeros.forEach(element => {
    element.addEventListener('click', function() {
       let number =  +element.innerHTML;
       recupInput(number);
        console.log(number); 
    })
});

signes.forEach(element => {
    element.addEventListener('click', function() {
       let signe = element.innerHTML;
       recupInput(signe);
        console.log(signe); 
    })
});

effacer.addEventListener('click', function() {
    reset();
    console.log('AC')
})