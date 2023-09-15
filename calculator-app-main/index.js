var x = document.querySelector(".ball");
var initale = 0;
let id;
firstNumber = "";
secondNumber = "";
sign = "";
num = "";

var numberLength = document.querySelector(".display h1").innerHTML;

$(".toggleArea ").on("click", function () {
  if (initale > 20) {
   
    id = setInterval(addMarginLess, 1);
  } else if (initale > 10) {
    id = setInterval(addMarginMore, 1);
  } else id = setInterval(addMargin, 2);
  changeBackgroundColor(initale);
  console.log("The ball moved over"+initale+"px")
});



function changeBackgroundColor(initale) {
  var body = document.body;
  var titleArea =document.querySelector(".titleArea")
  var toggleArea=document.querySelector(".toggleArea")
  var ball = $(".ball")
  var attribution =document.querySelector(".attribution")
  var display=document.querySelector(".display")
  var equal=document.querySelector(".equal")
  var keypad=document.querySelector(".keypad")
  var key=document.querySelectorAll(".key")
  var colorChanger=document.querySelectorAll(".colorChanger")




    if(initale==0){
      body.classList.add('theme2')
      toggleArea.classList.add('toggleAreaTheme2')
      titleArea.classList.add('titleAreaTheme2')
      display.classList.add('displayAreaTheme2')
      keypad.classList.add('keypadAreaTheme2')
      equal.classList.add('equalAreaTheme2')
      for(const pads of colorChanger){
        pads.classList.add('colorChangerAreaTheme2')
      }
      for(const keys of key){
        keys.classList.add('keyAreaTheme2')
      }
      attribution.classList.add("attributionAreaTheme2")

    }else if(initale==14){
      //remove the previous theme
      body.classList.remove("theme2")
      toggleArea.classList.remove('toggleAreaTheme2')
      titleArea.classList.remove('titleAreaTheme2')
      display.classList.remove('displayAreaTheme2')
      keypad.classList.remove('keypadAreaTheme2')
      equal.classList.remove('equalAreaTheme2')
      for(const pads of colorChanger){
        pads.classList.remove('colorChangerAreaTheme2')
      }
      for(const keys of key){
        keys.classList.remove('keyAreaTheme2')
      }
      attribution.classList.remove("attributionAreaTheme2")
      
      //add the next theme
      body.classList.add("theme3")
      toggleArea.classList.add('toggleAreaTheme3')
      ball.addClass("ballAreaTheme3")
      titleArea.classList.add('titleAreaTheme3')
      display.classList.add('displayAreaTheme3')
      keypad.classList.add('keypadAreaTheme3')
      equal.classList.add('equalAreaTheme3')
      for(const pads of colorChanger){
        pads.classList.add('colorChangerAreaTheme3')
      }
      for(const keys of key){
        keys.classList.add('keyAreaTheme3')
      }
      
    }else if(initale==28){
      body.classList.remove("theme3")
      toggleArea.classList.remove('toggleAreaTheme3')
      ball.removeClass("ballAreaTheme3")

      titleArea.classList.remove('titleAreaTheme3')
      display.classList.remove('displayAreaTheme3')
      keypad.classList.remove('keypadAreaTheme3')
      equal.classList.remove('equalAreaTheme3')
      for(const pads of colorChanger){
        pads.classList.remove('colorChangerAreaTheme3')
      }
      for(const keys of key){
        keys.classList.remove('keyAreaTheme3')
      }
      
      //add the next theme
      display.classList.add("displayAreaTheme1")
      equal.classList.add('equalAreaTheme1')
      for(const pads of colorChanger){
        pads.classList.add('colorChangerAreaTheme1')
      }
      for(const keys of key){
        keys.classList.add('keyAreaTheme1')
      }
    
    }
  }


function addMargin() {
  if (initale == 14) {
    clearInterval(id);
  } else {
    initale++;
    x.style.marginLeft = initale + "px";
    
  }
}

function addMarginMore() {
  if (initale == 28) {
    clearInterval(id);
  } else {
    initale++;
    x.style.marginLeft = initale + "px";
  }
}

function addMarginLess() {
  if (initale == 0) {
    clearInterval(id);
  } else {
    initale--;
    x.style.marginLeft = initale + "px";
  }
}

$(".key").on("click", function (event) {
  calculator(this.id);
});

function calculator(number) {
  numberLength = document.querySelector(".display h1").innerHTML;

  switch (number) {
    case "seven":
      if(num.length!=10){
      if(sign==""){
        firstNumber+='7'
      }else{
        secondNumber +='7'
      }
      num = num + "7";
      document.querySelector(".display h1").innerHTML = num;
    }
      break;
    case "eight":
        if(sign==""){
        firstNumber+="8"
       
      }else{
        secondNumber +="8"
      }
      num += "8";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "nine":
        if(sign==""){
        firstNumber+='9'
      }else{
        secondNumber +='9'
      }
      num += "9";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "delete":
      num = "";
      if (numberLength.length == "1") {
        document.querySelector(".display h1").innerHTML = 0;
      } else {
        document.querySelector(".display h1").innerHTML = numberLength.slice(
          0,
          numberLength.length - 1
        );
        numberLength = document.querySelector(".display h1").innerHTML;
      }
      break;
    case "four":
        if(sign==""){
        firstNumber+='4'
      }else{
        secondNumber +='4'
      }
      num += "4";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "five":
        if(sign==""){
        firstNumber+='5'
      }else{
        secondNumber +='5'
      }
      num += "5";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "six":
        if(sign==""){
        firstNumber+='6'
      }else{
        secondNumber +='6'
      }
      num += "6";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "plus":
    
      sign= "+";
      num+="+"
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "one":
        if(sign==""){
        firstNumber+='1'
      }else{
        secondNumber +='1'
      }
      num += "1";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "two":
        if(sign==""){
        firstNumber+='2'
      }else{
        secondNumber +='2'
      }
      num += "2";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "three":
        if(sign==""){
        firstNumber+='3'
      }else{
        secondNumber +='3'
      }
      num += "3";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "minus":
      if (sign != "-") {
        num.slice(0, -1);
        document.querySelector(".display h1").innerHTML = num.slice(0, -1);
        num = num.slice(0, -1);
        // document.querySelector(".display h1").innerHTML += sign;
        // num += "-";
        // sign = "-";
        // document.querySelector(".display h1").innerHTML += sign;
      }
      break;
    case "dot":
      num += ".";
      if(sign==""){
        firstNumber+="."
      }else{
        secondNumber+="."
      }
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "zero":
      if(sign==""){
        if(firstNumber.charAt(1)=="."||firstNumber.charAt(0)>=1){
          firstNumber+="0"
          num+="0"
      document.querySelector(".display h1").innerHTML = num;
    }
      }
      else{
        if(secondNumber.charAt(1)=="."||secondNumber.charAt(0)>1){
          secondNumberNumber+="0"
          num+= "0"
        }
      document.querySelector(".display h1").innerHTML = num;

      }
      

      break;
    case "slash":
      num += "÷";
      sign = "/";
      document.querySelector(".display h1").innerHTML = num;

      break;
    case "multiple":
      num += "*";
      sign = "*";
      document.querySelector(".display h1").innerHTML = num;


      break;
    case "reset":
      document.querySelector(".display h1").innerHTML = 0;
      num = "";
      firstNumber="";
      secondNumber=""
      sign=""
      break;
    case "equal":
      if (num == "") {
      } else if (secondNumber != "")
        finalResult(firstNumber, sign, secondNumber);
      else {
        document.querySelector(".display h1").innerHTML = "ERROR";
        num = "";
      }
      break;
    default:
      break;
  }


}

function finalResult(n1, s, n2) {
  firstNumber = parseFloat(n1);
  secondNumber = parseFloat(n2);
  switch (s) {
    case "+":
      document.querySelector(".display h1").innerHTML =
        firstNumber + secondNumber;
      break;
    case "-":
      document.querySelector(".display h1").innerHTML =
        firstNumber - secondNumber;
      break;
    case "*":
      document.querySelector(".display h1").innerHTML =
        firstNumber * secondNumber;
      break;
    case "/":
      document.querySelector(".display h1").innerHTML =
        firstNumber / secondNumber;
      break;

    default:
      break;
  }
  sign=""
  firstNumber=""
  secondNumber=""
  num = "";
}
