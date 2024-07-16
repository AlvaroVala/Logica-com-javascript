let name = prompt("Digite o seu nome?")

let firstNote = prompt("Digite a a primeira nota:")
let secondNote = prompt("Digite a segunda nota:")
let thirdNote = prompt("Digite a terceira nota:")

firstNote = Number(firstNote)
secondNote = Number(secondNote)
thirdNote = Number(thirdNote)

const media = (firstNote + secondNote + thirdNote)/3

alert(`Estudante ${name} a sua media é ${media}`)

if(media >= 10){
    alert(`Estudante ${name } você aprovou na disciplina`)
}else{
    alert(`Estudante ${name} você reprovou na disciplina`)
}
