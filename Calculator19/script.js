
let ev;
let result;
let a;
let b;


function getResult() {
  document.getElementById('result').classList.remove('resultError');
  document.querySelector('.calc').classList.remove('resultError');


  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
  switch (ev) {
    case '+':
      result = Calculator.sum(a,b);
      if (Number.isNaN(result)) {
        document.getElementById('result').innerHTML="Введите числа!";
        document.getElementById('result').classList.add('resultError');
      } else
      document.getElementById("result").innerHTML = result;
      break;
    case '-':
      result = Calculator.sub(a,b);
      if (Number.isNaN(result)) {
        document.getElementById('result').innerHTML="Введите числа!";
        document.getElementById('result').classList.add('resultError');
      } else
      document.getElementById("result").innerHTML = result;
      break;
    case '*':
      result = Calculator.mul(a,b);
      if (Number.isNaN(result)) {
        document.getElementById('result').innerHTML="Введите числа!";
        document.getElementById('result').classList.add('resultError');
      } else
      document.getElementById("result").innerHTML = result;
      break;
    case '/':
      if (b==0) {
        document.getElementById('result').innerHTML="На ноль делить нельзя!";
        document.getElementById('result').classList.add('resultError');
        document.querySelector('.calc').classList.add('resultError');

        break;
      }
      else {
        result = Calculator.div(a,b);
        if (Number.isNaN(result)) {
          document.getElementById('result').innerHTML="Введите числа!";
          document.getElementById('result').classList.add('resultError');
        } else
        document.getElementById("result").innerHTML = result;
      }
      document.getElementById("a").value = "";
      document.getElementById("b").value = "";

      
}
}

class Calculator {
  static sum(a, b) {
      return a + b
  }
  static sub(a, b) {
      return a - b
  }
  static mul(a, b) {
      return a * b
  }
  static div(a, b) {
      return a / b
  }
  static getClean() {
    document.getElementById('result').innerHTML="";
    document.getElementById('a').value="";
    document.getElementById('b').value="";
    document.getElementById("check").innerHTML = "";
  };
}


equall = document.getElementById("equall").addEventListener( "click" , getResult);


let clean = document.getElementById('reset');
clean.onclick = Calculator.getClean;