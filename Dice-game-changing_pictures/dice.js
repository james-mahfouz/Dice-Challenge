window.onload = function(){
    let first_dice = document.getElementById('first_dice')
    let second_dice = document.getElementById('second_dice')
    let status = document.getElementById('status')

    //generating two numbers between 1 and 6
    let dice_1 = Math.floor(Math.random() * 6) + 1;
    let dice_2 = Math.floor(Math.random() * 6) + 1;
    
    //changing the image source depending on the number generated
    first_dice.src = "images/dice-" + dice_1 + ".png"
    second_dice.src = "images/dice-" + dice_2 + ".png"

    //checking the bigger number to display the winner
    if (dice_1 > dice_2){
        status.innerHTML = "&#129322 Player 1 Wins!"
    }else if (dice_1<dice_2){
        status.innerHTML = "Player 2 Wins! &#129322;"
    }else {
        status.innerHTML = "Draw!"
    }
}