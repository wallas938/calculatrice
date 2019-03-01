
var ecrans = document.querySelectorAll('.displayers');

var ecranDuBas = document.getElementById('bottom-displayer');

var ecranDuHaut = document.getElementById('top-displayer');

var signes = document.querySelectorAll('.signe');

var numeros = document.querySelectorAll('.number');

var effacer = document.getElementById('supp');

var donneeEcranDuBas = [];

var donneeEcranDuHaut = [];

ecranDuBas.value = "";

ecranDuHaut.value = "";


function recupInput(input) {
    if(isNaN(input)) {
        if(input === "=") {
            var result = calculate();
            ecranDuBas.value = result;
            donneeEcranDuHaut.push(input, resultat);
            ecranDuHaut.value = donneeEcranDuHaut.join('');
        }else {
            ecranDuBas.value = input;
            donneeEcranDuHaut.push(...donneeEcranDuBas, input);
            ecranDuHaut.value = donneeEcranDuHaut.join('');
            donneeEcranDuBas = [];
            console.log(donneeEcranDuBas);
        }
        
    }else {
        donneeEcranDuBas.push(input);
        ecranDuBas.value = donneeEcranDuBas.join('');
    }
}

function reset() {
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