let vida=6;
let palabra = "APPLE";
const GRID = document.getElementById('cuadros');
const vidaPantalla = document.getElementById('vida_Pantalla');
reiniciar ();


function letra(letra) {
        console.log("Letra presionada:", letra);
        var text = document.getElementById ('texto');
        text.value += letra;
}

function borrar() {
        var text = document.getElementById ('texto');
        text.value =  text.value.slice(0, -1);
}




const button = document.getElementById ("send");
button.addEventListener("click", intentar);
const intp = document.getElementById ("texto");


function leerIntento(){
        let intento = document.getElementById ("texto")
        intento = intento.value;
        intento = intento.toUpperCase();
        return intento;

}



function intentar(){
        const intenTo = leerIntento()
        vida --;
        vidaPantalla.innerText = `${vida}`;
            if (intenTo === palabra){
                terminar("<span class='verde'>GANASTE!!!</span>");
                setTimeout(reiniciar,1000);
                return
                }

            if (vida === 0){
                terminar("<span class='rojo'>PERDISTE!</span>");
                setTimeout(reiniciar,2000);
                return
    
                }


const ROW = document.createElement('div');
ROW.className = 'cuaDros';

for (let i in palabra){
    
        const spam = document.createElement('span');
        spam.className= 'letter';

            if (intenTo [i] === palabra[i]){
                spam.innerHTML = intenTo[i];
                spam.classList.add ('green');}

            else if (palabra.includes(intenTo[i])){
                 spam.innerHTML = intenTo[i];
                 spam.classList.add ('yellow');
            }
            else{
                spam.innerHTML = intenTo[i] || ' ';
                spam.classList.add  ('grey');
            }

ROW.appendChild(spam);
ROW.appendChild(document.createTextNode("  "));

}
GRID.appendChild(ROW);

}


function terminar(mensaje){

        const resultado = document.getElementById("win");
        resultado.innerHTML = mensaje;
}



function reiniciar (){
        vida=6;
        palabra= "APPLE";


        const resultado =document.getElementById ("win");
            resultado.innerHTML = "";


        const GRID = document.getElementById("cuadros");
            GRID.innerHTML = "";


        const vidaPantalla = document.getElementById("vida_Pantalla");
            vidaPantalla.innerHTML = vida;

        const intento = document.getElementById ("texto");
            intento.value = "";
 
}

