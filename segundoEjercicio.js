/* Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true] */

Array1= ['rojo', 'azul', 'amarillo']
Array2= ['blanco', 'negro', 'rojo']
Array3=[4, 3, true, 'manzana']
Array4= ['pera', 3, false, true, 3, true]

devolverIguales(Array1,Array2)
devolverIguales(Array3,Array4)

function devolverIguales(Array1,Array2){


    let nuevo=[]

    for (let i=0; i < Array1.length; i++) {
       
        for (let a=0; a < Array1.length; a++) {
            if(Array1[i]==Array2[a])
            nuevo.push(Array1[i])
            } 
        }
        console.log(nuevo);
        return nuevo;
             
     }  
   


     
