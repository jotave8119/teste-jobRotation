// imprimindo o valor de "soma"


let indice = 13;
let soma   = 0;
let k      = 0;

for(let k = 0; k < indice; k++ ){
    k = k + 1
    soma = soma + k
}

console.log(soma)


// -- -- - -- - - - - - - - - - - - - - -------- --------------------------------

// Sabendo se o número pertence a sequência de fibonacci
// se mudar o número limitador dentro do laço for, verá os números que pertencem e os que não pertencem

function squareNum(x){
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
function Fibonacci( n){

    return squareNum(5 * n * n + 4) ||
           squareNum(5 * n * n - 4)
}
 
  for (let i = 1; i <= 100; i++)
     Fibonacci(i)?  document.write( i + "pertence a sequência fibonnaci <br/>"):
                    document.write(i + " não pertence a sequência fibonnaci <br/>") 


// -- -- - -- - - - - - - - - - - - - - -------- --------------------------------
//NÚMEROS ÍMPARES
function odds (numeros){
    let oddsNum = [];
    for (let i = 0; i <= numeros; i++) {
    if(i%2 !== 0){
    oddsNum.push(i)
    }  
  }
   return oddsNum;
}

console.log(odds(10));


// -- -- - -- - - - - - - - - - - - - - -------- --------------------------------
//DOBRADO
function doubleNums() {
    let double=[];
    for(let count = 2; count <= 200; count*=2){
    double.push(count)
    }
    return double;
}
console.log(doubleNums(100))


// -- -- - -- - - - - - - - - - - - - - -------- --------------------------------
// QUADRADOS PERFEITOS
function squareNum(numeros) {
    let quadradoPerfeito = []
    for(let i= 1; i<= numeros; i++){
     quadradoPerfeito.push(i*i)
      
    }
    return quadradoPerfeito
  }
  console.log(squareNum(10))

  // -- -- - -- - - - - - - - - - - - - - -------- --------------------------------
  //MÚTIPLOS DE QUATRO
function mutipleOfFour(number){
    let mutiple = [];
    for(let i = 4; i < number; i*=4){
        mutiple.push(i)
    }
    return mutiple;
}
console.log(mutipleOfFour(100))


// -- -- - -- - - - - - - - - - - - - - -------- --------------------------------
// SEQUÊNCIA FIBONACCI

    let numA = 0;
    let numB = 1;
    let numC = 0;
    let fibonacci = "";

    fibonacci += numA + " " + numB
   
    for(count = 1; count <= 10; count++){
       numC = numA + numB
       fibonacci += " " + numC
       numA = numB
       numB = numC
    }

console.log(fibonacci)

//na questão 3 letra d, a resposta é 100
//na questão 3 letra F, a resposta é duzentos(200). Visto que todos os números iniciam com a letra D

//INVERTENDO STRING

function invert(string){
    let output = "";

    for(let i = string.length -1; i >= 0; i--){
        output += string[i]
    }

    console.log(output)
}

invert("exemplo")