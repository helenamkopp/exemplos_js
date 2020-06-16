// Dados das pessoas 

const pessoas = [
    {
        nome: 'Helena',
        peso: 55.6,
        altura: 1.65
    },
    {
        nome: 'Romulo',
        peso: 84,
        altura: 1.73
    },
    {
        nome: 'Pedro',
        peso: 58,
        altura: 1.80
    },
    {
        nome: 'Silvia',
        peso: 150,
        altura: 1.64
    }
];

// Função que calcula o IMC

function calculoDoImc(peso, altura) {
    return peso / (altura * altura)   
}

// Laço de repetição - o que garante que vai passar por cada pessoa do grupo de pessoas declarado! 

for(let pessoa of pessoas){ // poderiamos chamar tambem de cada indice dentro de pessoas {0,1,2..} 
   const indice = calculoDoImc(pessoa.peso, pessoa.altura) //acesso ao peso e a altura de cada pessoa individualmente. 

   if(indice < 18.5) {
       console.log(`${pessoa.nome} possui IMC ${indice.toFixed(1)} - nível MAGREZA.`)
   } else if(indice >= 18.5 && indice < 24.9) {
       console.log(`${pessoa.nome} possui IMC ${indice.toFixed(1)} - nível NORMAL.`)
   } else if(indice >= 25 && indice < 29.9) {
       console.log(`${pessoa.nome} possui IMC ${indice.toFixed(1)} - nível SOBREPESO.`)
   } else if(indice >= 30 && indice < 39.9) {
    console.log(`${pessoa.nome} possui IMC ${indice.toFixed(1)} - nível OBESIDADE.`)
   } else {
    console.log(`${pessoa.nome} possui IMC ${indice.toFixed(1)} - nível OBESIDADE GRAVE.`)
   }
}

