let first = getRandomCard()
let second = getRandomCard()
let cardss=[first,second]
let sum = first+second
let blackJack = false, isAlive=false
let message = ""
let messageEll=document.getElementById('messageEl')
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let a = 0 , bet = 10
let details = {
    name : "Amritansh",
    money : 200
}
let credit = document.getElementById("credits")
credit.textContent += details.money

function getRandomCard(){
    let randNo = Math.floor(Math.random()*13)+1
    if(randNo > 10){
        return 10
    }
    else if(randNo===1){
        return 11
    }
    else{
        return randNo
    }
}

function startt(){
    isAlive=true
    a++
    render()
}

function render(){
    sumEl.textContent= "Sum : "+sum
    cardsEl.textContent= "Cards : "
    for(let i=0;i<cardss.length;i++){
    cardsEl.textContent+= cardss[i] + " "
    }
    if(sum<=20){
        message= "next card?"
    }
    else if(sum === 21){
        message= "You've got BlackJack"
        blackJack=true
        if(a<(a+1)){
        details.money += bet*2
        credit.textContent = "Balance "+ " : $"+ details.money
        }
    }
    else{
        message= "You lose "
        isAlive=false
        if(a<(a+1)){
            details.money -= bet
            credit.textContent = "Balance " + " : $"+ details.money
        }
    }
    messageEll.textContent=message
}

function neww(){
    if(isAlive===true && blackJack===false){
    let newCard = getRandomCard()
    sum += newCard
    cardss.push(newCard)
    startt()
    }
}

function newGame(){
    for(let j=0;j<cardss.length+2;j++){
        cardss.pop()
    }
    for(let i=0;i<cardss.length;i++){
        console.log(cardss[i])
    }
    a++
    first = getRandomCard()
    second = getRandomCard()
    cardss=[first,second]
    sum = first+second
    startt()
    messageEll.textContent=" Want to play a round? "
    cardsEl.textContent = "Cards : "
    sumEl.textContent="Sum :" 
}

let bett = document.getElementById("bet")

function inc(){
    if(bet<details.money && (bet+5)<details.money){
        bet += 5
    }
    else{
        alert("Not enough Cash")
    }
    bett.textContent= "Bet : "+ bet +"$"
}

function dec(){
    if(bet>0 && (bet-5)>0){
    bet-=5
    }
    else{
        alert("Bet can't be 0")
    }
    bett.textContent= "Bet : "+ bet +"$"
}