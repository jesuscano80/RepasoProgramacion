var diarandom= [Math.floor(Math.random() * 30)+1, Math.floor(Math.random() *12)];
var zodiaco: string;
switch(diarandom[1]){
        case 1:
                if (diarandom[0]>=21){zodiaco="Acuario"}
                else{zodiaco="Capricornio"}
                break;
        case 2:
                if (diarandom[0]>=21){zodiaco="Piscis"}
                else{zodiaco="Acuario"}
                break;
        case 3: 
                if (diarandom[0]>=21){zodiaco="Aries"}
                else{zodiaco="Piscis"}
                break;
        case 4:
                if (diarandom[0]>=21){zodiaco="Tauro"}
                else{zodiaco="Aries"}
                break;
        case 5:
                if (diarandom[0]>=21){zodiaco="Geminis"}
                else{zodiaco="Tauro"}
                break;
        case 6: 
                if (diarandom[0]>=21){zodiaco="Cancer"}
                else{zodiaco="Geminis"}
                break;        
        case 7:
                    if (diarandom[0]>=21){zodiaco="Leo"}
                    else{zodiaco="Cancer"}
                    break;
        case 8:
                    if (diarandom[0]>=21){zodiaco="Virgo"}
                    else{zodiaco="Leo"}
                    break;
        case 9: 
                    if (diarandom[0]>=21){zodiaco="Libra"}
                    else{zodiaco="Virgo"}
                    break;
        case 10:
                        if (diarandom[0]>=21){zodiaco="Escorpio"}
                        else{zodiaco="Libra"}
                        break;
        case 11:
                        if (diarandom[0]>=21){zodiaco="Sagitario"}
                        else{zodiaco="Escorpio"}
                        break;
        case 12: 
                        if (diarandom[0]>=21){zodiaco="Capricornio"}
                        else{zodiaco="Sagitario"}
                        break;
}

console.log(`Los nacidos el día ${diarandom[0]} del mes ${diarandom[1]} son del signo ${zodiaco}`);

const arcoiris= { arcoiris: ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"]};

let prueba:string[]=["negro","amarillo","rojo","verde"];


function arcoirischk (array:string[]){
    console.log("COMPROBACION ARRAY COLORES ARCO IRIS");
    for (let i=0;i<array.length;i++){
        
         if (arcoiris.arcoiris.includes(array[i]))
         {
             console.log(`${array[i]} está incluido en el arcoiris\n`);
         }
         else
         {
            console.log(`${array[i]} NO está incluido en el arcoiris\n`)
         }
    }
}

arcoirischk(prueba);


const nombres:string[]=["maria","jose","juan"];
let nombres1:string[]=["manuel","marcos","Miguel"];

function todosconM (array){
    let contador=0;
    for (var i=0;i<array.length;i++){
        
        if (array[i][0]=="m" || array[i][0]=="M"){
            contador++;
        }
    }
let check= false;
    if (array.length== contador){
        check=true;
    }
    return check
}

console.log(todosconM(nombres));
console.log(todosconM(nombres1));

// CON ECMA
// parimpar = (numero) => (numero%2==0) ? console.log("el numero es par") : console.log("el numero es impar");
function parimpar(numero:number){
    if (numero%2==0){
        console.log("el numero es par");
    }
    else{
        console.log("el numero es impar")
    }
}

parimpar(4);
parimpar(5);