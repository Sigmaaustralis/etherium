//estou criando uma função chamada getAverage
//(basicamente é uma função que vai calcular a médias da turma pra mim), 
//para fazer essa funçao preciso de alguns componentes.
function getAverage(scores) {

// aqui eu declaro uma variavel, é como uma gaveta onde eu vou guardar os componentes
//que vou usar para a minha função, no caso as notas
let sum = 0;

// este é um loop, e uma repetição, 
//ele vai olha cada componente repetidamente até percorrer todos
//começando da primeira nota que esta na posição 0, i=0
//e vou olhando  enquanto (for) eu não tiver passado por todas as notas i < scores.length; (pense que  scores.length é uma lista, vc ta listando todas as notas da turma)
//depois de ver e listar uma nota, passo para a próxima nota 
for (let i = 0; i < scores.length; i++) {

//Pego a lista que fiz, scores[i],
//e coloco ela na variavel (ou gaveta) chamada sum 
// todas as notas da lista vão sendo somadas a medida que entra na gaveta e a gaveta vai aumentando
  sum += scores[i];
  } // fim, já somei todas as notas da lista  

//agora  vamos fazer o calculo de media com a soma de todas as notas
  const average = sum / scores.length; // pego o valor da soma total e divido pela quantidade de notas que tinha na lista score.length
   return average; // Retorna a média // a media é o resultado da divisão, o avarage (retorne a média

}
//agora vamos conferir a media de todas as notas 
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
