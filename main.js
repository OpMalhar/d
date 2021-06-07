var menulistarray;
menulistarray= [
    "1.Chicken Tandoori Pizza",
    "2.Veg Supreme Pizza",
    "3.Paneer Tikka Pizza",
    "4.Double Chicken Pizza"
]
function getmenu(){
    document.getElementById("Pizza1").innerHTML=menulistarray[0];
    document.getElementById("Pizza2").innerHTML=menulistarray[1];
    document.getElementById("Pizza3").innerHTML=menulistarray[2];
    document.getElementById("Pizza4").innerHTML=menulistarray[3];
}
function addmenu(){
var htmldata
var item=document.getElementById("tb").value;
menulistarray.push(item);
menulistarray.sort();
htmldata="<section class='cards'>"
for (var i = 0; i < menulistarray.length; i++) {
    htmldata=htmldata+'<div class="card">'+'<img src="Chessy.jpg"/>'+menulistarray[i]+ '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("divide").innerHTML=htmldata
}
    
