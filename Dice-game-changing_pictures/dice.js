window.onload = function(){
    let point_1 = document.getElementsByClassName('point-1');
    let point_2 = document.getElementsByClassName('point-3');
    let point_3 = document.getElementsByClassName('point-4');
    let point_4 = document.getElementsByClassName('point-5');
    let point_5 = document.getElementsByClassName('point-6');
    let point_6 = document.getElementsByClassName('point-7');
    let point_7 = document.getElementsByClassName('point-9');

    const dice_1 = Math.floor(Math.random() * 6) + 1;
    const dice_2 = Math.floor(Math.random() * 6) + 1;

    let status = document.getElementById('status')
    
    if (dice_1 > dice_2){
        status.innerHTML = "&#129322 Player 1 Wins!"
    }else if (dice_1<dice_2){
        status.innerHTML = "Player 2 Wins! &#129322;"
    }else {
        status.innerHTML = "Draw"
    }

    roll_dice(0 ,dice_1)
    roll_dice(1 ,dice_2)

    function roll_dice(dice, number){
        if (number == 1){
            point_1[dice].style.opacity = "0";
            point_2[dice].style.opacity = "0";
            point_3[dice].style.opacity = "0";
            point_5[dice].style.opacity = "0";
            point_6[dice].style.opacity = "0";
            point_7[dice].style.opacity = "0";
        }

        if (number == 2){
            point_2[dice].style.opacity = "0";
            point_3[dice].style.opacity = "0";
            point_4[dice].style.opacity = "0";
            point_5[dice].style.opacity = "0";
            point_6[dice].style.opacity = "0";
        }

        if (number == 3){
            point_2[dice].style.opacity = "0";
            point_3[dice].style.opacity = "0";
            point_5[dice].style.opacity = "0";
            point_6[dice].style.opacity = "0";
        }

        if (number == 4){
            point_3[dice].style.opacity = "0";
            point_4[dice].style.opacity = "0"
            point_5[dice].style.opacity = "0";
        }

        if (number == 5){
            point_3[dice].style.opacity = "0";
            point_5[dice].style.opacity = "0";
        }

        if (number == 6){
            point_4[dice].style.opacity = "0";
        }
    }      
}