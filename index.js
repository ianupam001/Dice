var ranNum1=Math.floor((Math.random()*6)+1);
var ranNum2=Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src","./images/dice"+ranNum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+ranNum2+".png");

if(ranNum1>ranNum2)
{
    document.querySelector(".winner").innerHTML="<em>Player 1 wins 🚩</em>";
}
else if(ranNum1<ranNum2)
{
    document.querySelector(".winner").innerHTML="<em>Player 2 wins 🚩</em>";
}
else{
    document.querySelector(".winner").innerHTML="<em>Draw !</em>";
}