
/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123 */
let num=6;
triangulo(num);


function triangulo(num){
    let a=""
    for (let i= 1; i < num; i++) {
       a+=i
        console.log(a)
        
    }
}