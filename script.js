const result = document.querySelector('.result')
const humanScore = document.querySelector('.human')
const machineScore = document.querySelector('.machine')

let myScoreNumber = 0
let machineScoreNumber = 0


let playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())


}
let playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]


}
const playTheGame = (human, machine) => {

    console.log('humano:' + human + 'Maquina' + machine)

    if (human === machine) {

        result.innerHTML = 'Deu empate 😒'

    } else if ((human === 'pedra' && machine === 'tesoura') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'tesoura' && machine === 'papel')) {

       myScoreNumber++
       humanScore.innerHTML = myScoreNumber 
        result.innerHTML = 'Você ganhou ! 😁'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa ! 😭'
    } 


}




