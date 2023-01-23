var user = 0;
var computer = 0;

function game(x)
{
    var list = ["Rock", "Paper", "Scissor"];

    var computer_value = Math.floor(Math.random()*3);
    document.getElementById('computer').innerHTML =list[computer_value];

    (x == computer_value ) ? "": "";
    
    (x == 0 && computer_value == 1 ) ? computer++ : "";
    (x == 0 && computer_value == 2) ? user++ : "";

    (x == 1 && computer_value == 0) ? user++ : "";
    (x == 1 && computer_value == 2) ? computer++ : "";

    (x == 2 && computer_value == 0) ? computer++ : "";
    (x == 2 && computer_value == 1) ? user++ : "";

    document.getElementById('user_score').innerHTML = user;
    document.getElementById('computer_score').innerHTML = computer;

}