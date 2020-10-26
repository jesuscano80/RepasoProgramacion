var mapamundi:any= [ {continente: "Europa",
                   paises : ["España","Alemania","Italia","Francia","Portugal"]
                  },
                  {continente: "Asia",
                   paises : ["China","Japon","India","Mongolia","Pakistan"]
                  },
                  { continente: "America",
                    paises: ["Mexico","Honduras","Chile","Argentina","Ecuador"]
                    },
                    {continente: "Africa",
                    paises: ["Marruecos","Chad","Mali","Nigeria","Sudafrica"]
                    },
                    {continente: "Oceania",
                    paises: ["Australia", "Nueva Zelanda", "Fidji","Nueva Zelanda","Samoa"]
                }
                ];

            var paisrandom:string = mapamundi[(Math.floor(Math.random() * 5))].paises[Math.floor(Math.random() * 5)];
            
            function buscarpais (pais:string)
            { 
                for (let i=0;i<mapamundi.length;i++)
                {
                    if (mapamundi[i].paises.includes(pais))
                    {
                        console.log(`${pais} pertenece a ${mapamundi[i].continente}`)
                    }     
                }
            }

buscarpais(paisrandom);

function impareshasta (param:number){
    let x=1;
    for (let i=1;i<param;i++){
        if(i%2!==0){
        console.log(i + "\n");
        }
    }
}

impareshasta(15);
//EN ECMA
// arrayreverse= (array)=> array.reverse();

function arrayreverse (array:number[]){
array.reverse();
}

console.log(arrayreverse([1,2,3]));



let prueba:number[]=[1,2,5];
function checkpar(array:number[]){
    let check=false;
    for (let i=0;i<array.length;i++){
        if (array[i]%2==0){
            check=true;
        }
    }
    return check;
}



function sumacharpalabras(array:string[]){
    let sumatotal:number=0;
    for (let i=0;i<array.length;i++){
        sumatotal+=array[i].length;
    }
    return sumatotal;
}




let prueba2:string[]=["cordero","jamon","tortilla","cesped","futbol"];

console.log(sumacharpalabras(prueba2));

console.log(checkpar(prueba2));



let array1:string[]= ["casa", "ciudad", "cesta"];
let array2:string[]= ["barco", "baca", "bicicleta", "balon","bisiesto", "brasil"];
let array3:string[]= ["Venezuela", "veneno", "voltaje"];
function parimpar(numero:number){
    if (numero%2==0){
        console.log("el numero es par");
    }
    else{
        console.log("el numero es impar")
    }
}

function parimparsuma(array:string[]){
    parimpar(sumacharpalabras(array))
}

parimparsuma(array1);
parimparsuma(array2);
parimparsuma(array3);