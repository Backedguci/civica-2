const pass = "32MPar"
var tried =window.prompt("pune parola")
if (pass == tried){
alert("parola corecta")
  


function getVote(int) {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("poll").innerHTML=this.responseText;
    }
                      }
  xmlhttp.open("GET","poll_vote.php?vote="+int,true);
  xmlhttp.send();
}


}else {
alert("parola incorecta")
}
