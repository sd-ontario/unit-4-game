var randomNumber = Math.floor(Math.random()*100)+19;

console.log(randomNumber);

window.onload = function(){
    $("#randomNumber").html(randomNumber);
}