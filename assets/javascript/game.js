

function generateNumber(){
    var randomNumber = Math.floor(Math.random()*100)+19;
    console.log(randomNumber);
    return randomNumber;
}

function crystalNumbers(){
    var randomNumber = Math.floor(Math.random()*11)+1;
    return randomNumber;
}

function getNumbers(){
    var array = [];
    var c1 = crystalNumbers();
    var c2 = crystalNumbers();
    var c3 = crystalNumbers();
    var c4 = crystalNumbers();
    array.push(c1,c2,c3,c4);
    return array;
}

var win = 0;
var lose = 0;

var storeValue = getNumbers();
console.log(storeValue);

var score = 0;
var storeScore = [];



//console.log(c1, c2, c3, c4);

$(document).ready(function(){
    var number = generateNumber();
   $("#randomNumber").html("<h2>Target: "+number+"</h2>");
   $("#score").html("<h2>You're score is: 0");
   $("#winLoss").html("<h2>Wins: 0 Loss: 0</h2>");
   storeScore.push(number);
})

function addToScore(value){
    score = score+value;
    $("#score").html("<h2>You're score is: "+score+"</h2>");

    if(score > storeScore[0]){
        score = 0;
        $("#score").html("<h2>You're score is: "+score+"</h2>");
        alert("You Lose!");
        lose++;
        $("#winLoss").html("<h2>Wins: "+win+" Loss: "+lose+"</h2>");
        storeValue = getNumbers();
        var number = generateNumber();
        $("#randomNumber").html("<h2>Target: "+number+"</h2>");
        storeScore.length=0;
        storeScore.push(number);
    }else if(score === storeScore[0]){
        score = 0;
        $("#score").html("<h2>You're score is: "+score+"</h2>");
        alert("You Win!");
        win++;
        $("#winLoss").html("<h2>Wins: "+win+" Loss: "+lose+"</h2>");
        storeValue = getNumbers();
        var number = generateNumber();
        $("#randomNumber").html("<h2>Target: "+number+"</h2>");
        storeScore.length=0;
        storeScore.push(number);   
    }
}

$("#c1").on("click", function(){
    addToScore(storeValue[0]);
})

$("#c2").on("click", function(){
    addToScore(storeValue[1]);
})

$("#c3").on("click", function(){
    addToScore(storeValue[2]);
})

$("#c4").on("click", function(){
    addToScore(storeValue[3]);
})