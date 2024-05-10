function askQuestion(){
    var q = prompt('How many drivers championships does Lewis Hamilton have?');
    if (q != null){
        document.getElementById('question').innerHTML='That is a lot of championships, he is tied for most ever with Michael Schumacher who also has 7';
    }
}
function showImage(){
    var image=document.getElementById('surprise');
    image.src="images/lh44_7champ.jpg"
}