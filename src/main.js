
var ecrans = document.querySelectorAll('.displayers');

var ecranDuBas = document.getElementById('bottom-displayer');

var ecranDuHaut = document.getElementById('top-displayer');

var signes = document.querySelectorAll('.signe');

var numeros = document.querySelectorAll('.number');

var effacer = document.getElementById('supp');

const donneeEcranDuBas = [];

function recupInput(item) {
    donneeEcranDuBas.push(item);
    ecranDuBas.value = donneeEcranDuBas.join('');
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