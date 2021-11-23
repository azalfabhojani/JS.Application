// alert("azal");
function chngTextColour() {
    var chngTextClr = prompt("What color do you want to change for the text?");
    document.getElementById("chngClr").style.color = chngTextClr;
    if (chngTextClr === "") {
      alert("Please enter a color name");
    }
  }
  
  function chngBgClr() {
    var chngBgClr = prompt("What color do you want to change for the background?");
    document.getElementById("chngClr").style.backgroundColor = chngBgClr;
    if (chngBgClr === "") {
      alert("Please enter a color name");
    }
  }
  
  function showImg() {
    document.getElementById("img").style.visibility = "visible";
    document.getElementById("txt").style.visibility = "hidden";
  }
  
  function bigImg() {
    document.getElementById("img").style.width = "560px";
    document.getElementById("img").style.height = "380px";
  }
  
  function smallImg() {
    document.getElementById("img").style.width = "250px";
    document.getElementById("img").style.height = "200px";
  }
  
  function hideImg() {
    document.getElementById("img").style.visibility = "hidden";
    document.getElementById("txt").style.visibility = "visible";
  }
  
  function bulbToggler(id, element) {
    if (id == 1) {
      element.src = "./img/bulb.jfif";
    } else {
      element.src = "./img/bulboff.jfif";
    }
  }
  
  function chngParaColour1(){
      var paraColour1 = prompt("Write a color name for 1 para")
      var paraColour2 = prompt("Write a color name for 2 para")
      var paraColour3 = prompt("Write a color name for 3 para")
      var paraColour4 = prompt("Write a color name for 4 para")
      document.getElementsByTagName("P")[0].style.color = paraColour1;
      document.getElementsByTagName("P")[1].style.color = paraColour2;
      document.getElementsByTagName("P")[2].style.color = paraColour3;
      document.getElementsByTagName("P")[3].style.color = paraColour4;
  }

function changeParaColor2(){
  var paraColour5 = prompt("Write a color name for 1 para")
  var paraColour8 = prompt("Write a color name for 3 para")
  document.getElementsByTagName("P")[4].style.color = paraColour5;
  document.getElementsByTagName("P")[7].style.color = paraColour8;
  
}










