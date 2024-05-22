//alert("javascript works")
function magic8ball(){
    askAQuestion();
    shake();
    getFortune();
}
function askAQuestion(){
    //this does nothing
    alert("Ask a yes or no question to get a fortune")
}
function shake(){
    alert("I'm shaking...")
}
function getFortune(){
   var fortunes = ["yes","no","maybe"]
    var num = randomNumber(fortunes.length)
    displayFortune(fortunes[num])
}
function displayFortune(fortune){
    document.getElementById("fortune").innerHTML = fortune
}
function randomNumber(n){
    return Math.floor(Math.random() * n)
}