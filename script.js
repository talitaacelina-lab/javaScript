/console.log(idadePessoa >= 16); //true 

const name_completo = "Talita Alencar Acelino";

console.log(name_completo =="Alencar"); //false/console.log() mostra uma informação mo console
console.log("Olá, mundo!");
console.log(6 + "  7");

console.log(typeof "olá mundo!"); // string
console.log(typeof 17); // number
console.log(typeof 10.5); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// váriavel
// const não pode ter seu valor alterado durante o programa
const nome = "Talita";
console.log(nome);

// let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos. ");

idade = 18;
console.log(idade);


console.log(`ola ${nome}, que tem ${idade} anos.`);


// variavel
const name = "Talita";
console.log(name);

let peso = 50;
console.log(peso);

console.log("Olá " + nome + ", que tem " + peso + " kg. ");

peso = 51;
console.log(peso)

console.log(`Olá ${nome}, que tem ${peso} kg.`);

// Métodos de string
const texto = "JavaScript";

// aconta quantos caracteres a string tem 
console.log(texto.length);

// altera todas as letras para maisculo
console.log(texto.toUpperCase());

// altera todas as letras para minusculo
console.log(texto.toLowerCase());

const nome_completo =  "Talita Alencar Acelino";

console.log(nome_completo.includes("Acelino")); // true

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >=10); // true
console.log(10 <= 5); // false
console.log("10" == 10); // true
console.log("10" === 10); // false
console.log(10 !== 5); // true

const idadePessoa = 17;

console.log(idadePessoa >= 18); //false
console.log(idadePessoa >= 16); //true

// colotemos a idade da pessoa
let pessoaIdade = 15;
// verificar se a idade é maior ou igual a 18 
if(pessoaIdade >=18){
    // se maior ou igual a 18 então ela é maior de idade
    console.log("já Pode Ser Preso HAHAHAHAHA!")
}else{
    // senão, então ela é menor de idade
    console.log("Não vai pra balada!")
}


// coletamos a idade da pessoa
    let idadeVotacao = 16
// verificar  se a pessoa é maior que 70
if(idadeVotacao > 70){
    console.log("Voce nao é obrigado a votar!")
}else if(idadeVotacao >=18){
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Voce tem que votar obrigatoriamente!")
}else if(idadeVotacao >= 16){
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("Voce nao é obrigado a votar, mas caso queira pode!")
}else{
    // senão for nenhuma das alternativas anteriores
    console.log("Voce NÃO pode votar!")

}







//-------------- Atividade -----------
let media = 7
 if(media >= 7){
     console.log("aprovado")
}else {
    console.log("reprovado")
}

let number1 = "4"
let number2 = "4"

if(number1 > number2){
    console.log("o numero1 é maior que o numero2")
}else if(number1 < number2){
    console.log("o numero1 é menor que o numero2 ")
}else{
    console.log("empate")
}

// ---- senha----
let senha = "senai123"
if(senha === "senai123"){
    console.log("Acesso autorizado")
}else{
    console.log("senha incorreta")
}




//------ temperatura ------
let temperatura1 = 18

if(temperatura1 <= 18){
    console.log("frio")
}else if(temperatura2 <= 27){
    console.log("Agradavel")
}else{
    console.log("quente")
}


//------- nota -------
let nota = 5
if(nota >= 9){
    console.log("Excelente")
}else if(nota >= 7){
    console.log("bom")
}else if(nota >=5){
    console.log("regular")
}else{
    console.log("insuficiente")
}







let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if(idadeDirigir >= 18 && temCNH == true && temCarro == true){
    console.log("Voce Pode Dirigir!")
}else{
    console.log("Voce Não Pode Dirigir!")
}

let ehProfessor = false;
let ehAluno = false;

if(ehProfessor == true || ehAluno == true){
    console.log("Voce tem direito a meia-entrada!")
}else{
    console.log("Voce não tem direito a meia-entrada!")
}

// && = e
// || = ou






//--------Atividade2--------


//----parte1/1-------
let numero = 50;

if(numero > 10 && numero < 50){
    console.log("Incluso!")
}else{
    console.log("Fora Do Intervalo!")
}




//-----parte1/2------
let numero3 = 30;

if(numero3 > 16 && numero3 < 24){ 
    console.log("Voce Atende Os Nossos Requisitos!")
}else{ 
    console.log("Voce Não Atende Os Nossos Requisitos!")
}




//-----parte2/1------
let Frete = 200
let assinantes = true
 
if(Frete >=200 || assinantes == true){
    console.log("Voce Ganhou Frete Gratis");
}else{
    console.log("voce Nao tem Direito Ao Frete Gratis");
}



//------parte2/2-----
let diaSemana = "sabado"

if(diaSemana == "sabado" || diaSemana == "domingo"){
    console.log("Fim de semana!")
}else{
    console.log("Dia útil!")
}



//--------parte3------
const valorCompra = 150
const assinante = true 
const cupom = true

const descontos = (valorCompra >= 150 && assinante == true || cupom == true )

if (descontos){
    total = valorCompra * 0,85;
    console.log("Voce Ganhou 15% De desconto")
}else{
    total = valorCompra
    console.log("Voce Não tem Desconto Nessa Compra")
}
console.log("Total Final R$:" + total.toFixed (2))









  


