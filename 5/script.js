let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1 

while (Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente:")
    xAttempts++
}

alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas `)