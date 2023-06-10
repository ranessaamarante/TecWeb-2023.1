

// Trocar os let's

// Q1
function verificaArray(entrada) {
  return Array.isArray(entrada);
}


// let arr = [1, 2, 3];
// let naoArray = "chocolate";

// console.log(verificaArray(arr)); // Saída: true
// console.log(verificaArray(naoArray)); // Saída: false

//============================================================================
//============================================================================

// Q2
function clonarArray(array) {
  return array.slice();
}


// let original = [1, 2, 3];
// let clone = clonarArray(original);

// console.log(original); // Saída: [1, 2, 3]
// console.log(clone); // Saída: [1, 2, 3]


//============================================================================
//============================================================================


// Q3

function elementos(array, n=1) {
  return array.slice(0,n);
}


// console.log(elementos([1,2,3]));  //[1]
// console.log(elementos([1,2,3], 3));  //[1,2,3]
// console.log(elementos([1,2,3], 2));  //[1,2]



//============================================================================
//============================================================================


// Q4

function ElementosFinais(array, n = 1) {
  return array.slice(-n);
}

// let arr = [1, 2, 3, 4, 5];

// console.log(ElementosFinais(arr)); // Saída: [5]
// console.log(ElementosFinais(arr, 3)); // Saída: [3, 4, 5]
// console.log(ElementosFinais(arr, 5)); // Saída: [1, 2, 3, 4, 5]



//============================================================================
//============================================================================


// Q5


let arr = ["Eu", "amo", "chocolate!"];

let resultado = arr.join(' ');

console.log(resultado); // Saída: Eu amo chocolate!



//============================================================================
//============================================================================


// Q6


function inserirTracosEntrePares(numero) {
  let digitos = numero.split('');
  let resultado = [];

  for (let i = 0; i < digitos.length; i++) {
    resultado.push(digitos[i]);
    if (digitos[i] % 2 === 0 && digitos[i + 1] % 2 === 0) {
      resultado.push('-');
    }
  }

  return resultado.join('');
}

// let numero = '025468';
// let resultado = inserirTracosEntrePares(numero);

// console.log(resultado); // Saída: 0-254-6-8




//============================================================================
//============================================================================


// Q7




function ItemMaisFrequente(arr) {
  let contador = {};
  let itemMaisFrequente;
  let frequenciaMaxima = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    contador[item] = (contador[item] || 0) + 1;

    if (contador[item] > frequenciaMaxima) {
      frequenciaMaxima = contador[item];
      itemMaisFrequente = item;
    }
  }

  return itemMaisFrequente;
}

// let array = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2, 2];
// let itemMaisFrequente = ItemMaisFrequente(array);

//console.log(itemMaisFrequente); // Saída: 2


//============================================================================
//============================================================================


// Q8

function removerDuplicatas(arr) {
  let resultado = [];
  let mapa = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].toLowerCase(); // ignora a diferenciação entre maiúsculas e minúsculas
    

    
    if (!mapa[item]) { //verifica se item está em mapa
      resultado.push(arr[i]); //se não estiver, colocar arr[i] em resultado
      mapa[item] = true; //insere item em mapa
    }
  }

  return resultado;
}

let array = ['Maçã', 'Banana', 'Laranja', 'banana', 'Abacaxi', 'Laranja'];
let arraySemDuplicatas = removerDuplicatas(array);

console.log(arraySemDuplicatas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Abacaxi']



//============================================================================
//============================================================================


// Q9

function SomadeIndices(array1, array2) {
  let resultado = [];

  // Verificar se os arrays têm o mesmo comprimento
  if (array1.length !== array2.length) {
    throw new Error('Os arrays devem ter o mesmo comprimento.');
  }

  // Percorrer os arrays e somar os valores de índice
  for (let i = 0; i < array1.length; i++) {
    let soma = array1[i] + array2[i];
    resultado.push(soma);
  }

  return resultado;
}

// Exemplo de uso
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let resultado = SomadeIndices(array1, array2);
// console.log(resultado); // Saída: [5, 7, 9]



//============================================================================
//============================================================================


// Q10


let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

// Adicionar os valores de vetorAdiciona ao final de vetorPilha
vetorPilha.push(...vetorAdiciona);

// Exibir o vetorPilha no console
console.log(vetorPilha);