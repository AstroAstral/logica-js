// 1- Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. 
// Em seguida, exiba o tipo de cada variável no console.

{
console.log("Exercicio 1:")
}

{
const funcionario = "Jailson"; // String (Texto)
const idade = 35;              // Number (sem aspas!)
let presenca = true;           // Boolean (Verdadeiro e Falso)


console.log(`Funcionario: ${funcionario}, Idade: ${idade}, Presença: confirmada.`);  // Template Literals(Template Strings)

console.log(typeof funcionario);
console.log(typeof idade);
console.log(typeof presenca);
}

{
console.log()
}
/*  (GABARITO)
const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
*/

// 2- Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
// Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

{
console.log("Exercicio 2:")
}

{
const nome = "Matheus";
const sobrenome = "Eller";
const nomeCompleto = nome + sobrenome;
const nomeCompletots = `${nome} ${sobrenome}`;

console.log(nomeCompleto, nomeCompletots);
}

{
console.log()
}
/*  (GABARITO)
const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
*/

// 3- Declare duas variáveis, uma contendo um número e outra contendo uma string. 
// Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

{
console.log("Exercicio 3:")
}

{
const nome = "João";
const gols = 4;
const resultado = `${nome}, fez ${gols} gols!`;

console.log(resultado)
}

{
console.log()
}

/*   (GABARITO)
const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
const numero = 42;
const string = 'universo';

const texto = `${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto);
*/

// 4- Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. 
// Imprima ambos os valores no console após atribuí-los.

{
console.log("Exercicio 4:")
}

{
let horas = 45;

console.log(horas)

horas = 50

console.log(horas)
}

{
console.log()
}
/*   (GABARITO)
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);
*/

// 5- Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
// Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

{ 
console.log("Exercicio 5:")
}

//Usando var:
{
console.log("Usando var")
}

{
  var variavelGlobal = "Fora";

   {
     var variavelLocal = "Dentro";
     console.log(`Dentro: ${variavelGlobal}, ${variavelLocal}`);
   }

  console.log(`Fora: ${variavelGlobal}, ${variavelLocal}`);
}

//Usando let:
{
console.log("Usando let")
console.log("ReferenceError: cores2 is not defined, let Respeita o Escopo de Bloco. ")
}

/*  Desabilitei o bloco para poder unir tudo num só arquivo sem bugar tudo.
{
  let VariavelFora = "Outside";

   {
     let VariavelDentro = "Inside";
     console.log(`Dentro: ${variavelFora}, ${variavelDentro}`);
   }

  console.log(`Fora: ${variavelFora}, ${variavelDentro}`);
}
*/
//-----------------------------------------------------------------------------
/*   (GABARITO)
var fora = 'Fora do bloco';              
if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'
*/
/*
var Não respeita as chaves { }. Se criar ele lá dentro, ele fura a parede e continua vivo do lado de fora. Por isso aparece o resultado("cor") mesmo fora do bloco.

let Respeita o Escopo de Bloco. Se ele nasce dentro das chaves { }, ele morre dentro das chaves}. Tentar usar ele do lado de fora causa o erro de "não definido"(ReferenceError: cores2 is not defined).
-----------------------------------------------------------------------------*/

{
console.log()
}

// 6- Declare uma variável booleana que informa se está chovendo.
// Em seguida utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

{
console.log("Exercicio 6:")
}

{
let chovendo = true

if (chovendo) {
   console.log("Esta chovendo, leve um guarda-chuva.")
} else {
   console.log("Não esta chovendo, não precisa de guarda-chuva.") 
}
}
// Identica ao gabarito.



/*
Existem 3 variaveis: const (constante, não é alterada), let (pode ser alterada ao longo do escopo{}.), var (sempre pode ser alterada.)

Nessa aula, você aprendeu a:
Diferenciar var, let e const e identificar qual a melhor forma para armazenar dados de acordo com cada situação;
A proteger dados em uma variável de serem alterados, utilizando const;
Lidar com mensagens de erro, entendendo o que o Node.js está tentando nos dizer com elas, para realizar correções no código;
Trabalhar com escopos e entender como os escopos funcionam para “limitar” o acesso do código a uma variável.
By Alura.
*/
// Há diferenças claras entre o gabarito e as minhas respostas, mantive do geito que estava antes de eu ver o gabarito.
