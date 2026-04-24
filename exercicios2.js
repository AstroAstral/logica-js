{
    console.log("========== Exercicio 1 ==========");

// 1- Crie uma variável contendo uma frase. 
// Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

{
const frase = ` "só sei que nada sei" `;

console.log(`Quantidade de caracteres: ${frase.length}`);
console.log(`Em letras maiusculas: ${frase.toUpperCase()}\n`);
}
/*   (GABARITO)
const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Frase em constras maiúsculas
*/
}

{
    console.log("========== Exercicio 2 ==========");
// 2- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). 
// Exiba os valores no console.

{
const variavelNull = null;
let variavelUndefined;

console.log(`variavelNull retorna: ${variavelNull}`);
console.log(`variavelUndefined retorna: ${variavelUndefined}\n`);
}
/*   (GABARITO)
const valorNull = null;
let valorUndefined;

console.log('Valor de valorNull:', valorNull); // Saída: null
console.log('Valor de valorUndefined:', valorUndefined); // Saída: undefined
*/
}

{
    console.log("========== Exercicio 3 ==========");

// 3- Crie 3 variáveis de tipos diferentes utilize template strings
// para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

{
const number = 10;
const string = "string";
const boolean = true;

const combinacao = `number: ${number}, string: ${string}, status: ${boolean}`;

console.log(`${combinacao}\n`);
}
/*   (GABARITO)
const numero = 42;
const texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);
*/
}

{
    console.log("========== Exercicio 4 ==========");

// 4- Crie uma variável numérica e uma string. 
// Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

{
const variavelNumber = 25;
const variavelString = "44";

const numberConvertido = String(variavelNumber);
const stringConvertida = Number(variavelString);

console.log(`Number para String: ${numberConvertido}, ${typeof numberConvertido}`);
console.log(`String para Number: ${stringConvertida}, ${typeof stringConvertida}\n`);
}
/*   (GABARITO)
const numero = 42;
const texto = '10';

const numeroConvertido = String(numero);
const textoConvertido = Number(texto);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);
*/
}

{
    console.log("========== Exercicio 5 ==========");
// 5- Crie uma variável com uma string e utilize métodos de manipulação de strings: 
// toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

{
const texto = "Quem planta, colhe!";

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const cortar = texto.slice(0, 12);

console.log(maiusculas);
console.log(minusculas);
console.log(cortar);
}
/*   (GABARITO)
const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);
*/
}