Curso de JavaScript b�sico do Rodrigo Branas.

-----------------------------------------------------------------------------------------------------
Hist�ria do JS:

Seu primeiro nome foi "Mocha" por sugest�o do fundador do Netscap.
Foi lan�ado em 1995 com o Netscap Navigator 2.0 com o nome de LiveScript.
Em Dezembro em parceria com a SUN microsystems mudou para Javascript, com o objetivo de destruir a MS,
a SUN patenteou proibindo a MS de usar a linguagem. A MS fez uma "engenharia reversa" criando o JScript.
En 1997 a Netscape conseguiu padronizar a linguagem junto a ECMA, e ent�o o nome ECMAScript (oficial).


A linguagem JavaScript herdou de 4 linguagens:
Java: Sintaxe e algumas conven��es.
Scheme: Lambda, Closure e tipagem fraca.
Self: Heran�a baseada em prot�tipos, objetos din�micos.
Perl: Express�es regulares.

-----------------------------------------------------------------------------------------------------
Informa��es t�cnicas:
(1) O Javascript � interpretado pelo pr�prio Browser e n�o precisa de interpretador *.
(exceto que voc� queira rodar no backend, e ai voc� vai precisar de fato de um NodeJS ou outro).
(2) Possui O.O baseada em prot�tipos, n�o possuindo classes.
(3) Possui tipagem fraca e din�mica (aff) (ruim por que d� muito liberdade, ruim compilador fraco).
(4) Possui fun��es de primeira classe (ser� falado no epis�dio s� de fun��es). S�o fun��es que podem ser
atribuidas a vari�vel e passadas por parametros e retornando de outras fun��es.
(5) N�o oferece Multi-Thread.
(6) Atualmente est� na vers�o 6.0 (v�deo de Mar2015).

Vari�veis:
(1) Tipagem fraca (devem come�ar com var) e por uma letra, $ ou _ (evitar $ - usaremos pra frameworks e 
inje��o de depend�ncias) (evitar _ por que geralmente usamos pra vari�veis privadas dentro de m�todos).
(2) Ap�s a letra podemos usar n�meros.
(3) Pela conven��o: usar camelCase (primeira menor outras maiores). Cuidado - JS tamb�m � case-sensitive.

Eu posso declarar vari�veis das seguintes formas:

var name = "AgileCode";
var top10 = [1,2,3,4,5,6,7,8,9,0];
var $scope = {title: "Javascript", version: "6"};
var _person = "John"; //underline geralmente sinaliza uma vari�vel privada interna do m�todos
var numberCode= 876879876;
var a=10, b=9, c=8;
var language; //vai ficar undefined, mas tamb�m pode ser declarado assim.

Tipo de Dados:

** Number. Uso da API:
var nota = 10;
nota.toExponencial(2); //100
nota.toFixed(2); //10.00
nota.toPrecision(1); //1e+1
nota.toString(); //"10"
nota.valueOf(); //10
Math.cin(nota) //d� Math. e dois TABS que vai listar tudo
(Tem os prints na pasta usando Console com Node. Pode chamar tamb�m o "Math." e fazer opera��es matem�ticas.

** String. Uso da API:
S�o imutaveis.
Podem ser declaradas com aspas simples ou duplas - tanto faz.

var nome = "AgileCode";
nome.charAt(2); //"i"
nome.chatCodeAt(0); //65
nome.concat("!") //"AgileCode!"
nome.IndexOf('e') //4
nome.replace('Code', '!'); //"Agile!"
nome.split('e') //['Agil', 'Cod', ''];

** Boolean
var isento = true;
var estudante = false;

isento.ToString(); //"true"
estudante.valueOf(); //false

Nota: ! no Javascript � "nega��o" (false). !! � a nega��o da nega��o - ent�o � VERDADEIRO. (PQP).

** Undefined e null

O tipo "undefined" � retornado caso uma propriedade de um determinado objeto seja consultada e n�o exista.
O tipo "null" � a aus�ncia - a propriedade est� null, mas ela existe (o objeto, a vari�vel, enfim).

** Objeto:
� uma cole��o din�mica de chaves e valores de qualquer tipo de dado. � poss�vel adicionar ou remover propriedades
a qualquer momento. N�o temos construtor, n�o temos classe, n�o temos m�todos. � diferente de C# ou Java.

var pessoa = {}; //nesse caso ao abrir e fechar chaves crio um novo objeto, nesse caso vazio.
var pessoa = {
	nome:"Jo�o"
	};
	
var pessoa = {
	nome:"Jo�o",
	idade: 20,
	telefone: null,
	endereco: {
	logradouro: "anamao",
	numero: 70,
	bairro: "anow"
	}
};

-----------------------------------------------------------------------------------------------------

A linguagem JavaScript n�o tem:

* Classe
* Construtor
* M�todo
* M�dulo

O poder da linguagem vem das FUN��ES. Uma fun��o � um objeto que cont�m um bloco de c�digo execut�vel. Esse bloco �
isolado n�o sendo poss�vel acess�-lo externamente. No JS as fun��es s�o de primeira classe: Aquelas que podem ser 
atribuidas a uma vari�vel, passada como par�metro ou ser retornada de uma outra fun��o. Existem duas maneiras de 
declarar fun��es:

** Function declaration (forma 1):

function soma(a,b){
return a+b;
}

** Function expression (forma 2):
var soma = function(a,b){
return a+b;
}

(nota - tamb�m poderia fazer uma Named Function Expression):
var soma = function soma(a,b){
return a+b;
} //desse jeito fica melhor pois aparece no stack trace, listas de breakpoints e demais ferramentas de debbuging
//um segundo ponto positivo � que a NAMED � carregada antes da execu��o, ou seja, posso fazer a chamada dela (soma())
//l� em cima, antes da declara��o dela... por isso � melhor

//nesse segundo caso ocorre a atribui��o, ent�o "soma" � o nome da fun��o e tamb�m a vari�vel soma.

DICA Importante: Dentro de qualquer fun��o, se eu quiser ver os argumentos (parametros passados) eu posso imprimir:

console.log(arguments);

-----------------------------------------------------------------------------------------------------

** CHAMANDO FUN��ES, VOC� TEM 4 MANEIRAS. Veja o arquivo "funcoes.js" na pasta que est� todo documentado.
Nota: tem mais exemplos no funcoes2.js, e depois o funcoes2Encapsulado � o 2 "re-escrito" com encapsulamento.

-----------------------------------------------------------------------------------------------------

** Aula 9 sobre Arrays: N�o existem arrays no JS como em C# ou Java. O que existem s�o objetos especiais que oferecem
meios para acessar e manipular suas propriedades por meio de �ndices. Ver arquivo "arrays.js" na pasta.

Nota: V�rios exemplos de Arrays, filtros, For, Foreach e tudo mais no arrays.js (exemplos Map, Reduce).

-----------------------------------------------------------------------------------------------------

** EXPRESS�ES REGULARES: S�o estruturas formadas por uma sequ�ncia de caracters que especificam um padr�o formal.
RegExp � Muito �til para: Valida��o de campos, extra��o de dados, substitui��o de caracteres em textos.

Em Javascript usamos duas barras pra criar express�es regulares: var regExp = /<expressao regular>/;
Tamb�m � poss�vel usar o new - ent�o: var regExp = new RegExp("<expressao regular>");

RegExp API:
exec - executa a regexp, retornando os detalhes.
test - testa a regexp, retornando true ou false.

Agora iremos criar 12 passos: Primeiro reconheceremos um telefone, e depois evoluir para novos cen�rios mais complexos
para estimular utiliza��o de grupos, metacaracteres, quantificadores e muito mais. Ver arquivo regexp.js

-----------------------------------------------------------------------------------------------------

** DATE: Apesar de parecer mais simples, a data n�o � representada dessa forma... Como assim?
A Data � representada pela quantidade de milissegundos desde o in�cio da era Unix. Existem 4 maneiras de se criar uma
data, verificar classe 

-----------------------------------------------------------------------------------------------------

Sobre Operadores, Statements e Heran�a deixarei os exemplos nas classes. Olhar l�.

-----------------------------------------------------------------------------------------------------