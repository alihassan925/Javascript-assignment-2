// input btn for clear statement 
document.getElementById("clearInputBtn").onclick = function(){
  document.getElementById("input-box").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutputBtn").onclick = function(){
  document.getElementById("output-box").innerHTML = " "
}

// concatenation 
document.getElementById("concatenation").onclick = function () {

  let message = "THE OP WEB DEVELOPER IS"
  let userName = "ALI HASSAN"
  let sum = (message + " " + userName )
  document.getElementById("input-box").innerHTML = '<p>"THE OP WEB DEVELOPER IS" + " " + "ALI HASSAN"</p>'
  document.getElementById("output-box").innerHTML = sum;
}

// ask name from user 
document.getElementById("askName").onclick = function(){
let name = prompt("Please enter your name");
document.getElementById("output-box").innerHTML =  name;
}

// comparison operator 
document.getElementById("comparisonOperator").onclick = function (){

  let num1 = +prompt("please enter first number")
  let num2 = +prompt("please enter second number")
  if (num1 === num2){
      document.getElementById("input-box").innerHTML = "num1 == num2"
      document.getElementById("output-box").innerHTML = "<span class='text-success'>Condition is true &#128522;<span/>"
  }
  else {
      document.getElementById("input-box").innerHTML = "num1 !== num2"
      document.getElementById("output-box").innerHTML = "<span class='text-danger'>Condition is false &#128554;</span."
  }
}

// if else if
document.getElementById("ifElseIf").onclick = function (){
  document.getElementById("input-box").innerHTML = " ";
  let marks = +prompt("please enter your marks")
  if (marks >= 90){
      document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
  }
  else if (marks >=80){
      document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
  }
  else if (marks >=70){
      document.getElementById("output-box").innerHTML = "<span class='text-warning'>you got B Grade</span>"
  }
  else if (marks >=50){
      document.getElementById("output-box").innerHTML = "<span class='text-warning'>you are barely passed</span>"
  }
  else {
      document.getElementById("output-box").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
  }
}


// sets of conditions 
document.getElementById("setsOfConditions").onclick = function (){
  document.getElementById("input-box").innerHTML = " ";
  let age = prompt("please enter your age")
  let weight = prompt("please enter your weight")
  if (age <= 10 && weight <= 25) {
      document.getElementById("output-box").innerHTML = "you are a baby"
  }
  else if (age <= 18 && weight <= 50) {
      document.getElementById("output-box").innerHTML = "you are teenager and healthy"
  }
  else if (age <= 25 && weight <= 60) {
      document.getElementById("output-box").innerHTML = "you are a youngman and fatty"
  }
  else if (age <= 30 && weight <= 59) {
      document.getElementById("output-box").innerHTML = "you are a youngman and healthy"
  }
  else {
      document.getElementById("output-box").innerHTML = "you are a Senior Citizen and fatty"
  }

}

// if statement nested 
document.getElementById("ifStatementNested").onclick = function(){
  let userName = prompt("please enter user name")
  if(userName === "ALI HASSAN"){
      let password = prompt("please enter password")
      if(password == 123){
          document.getElementById("output-box").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
      }
      else{
          document.getElementById("output-box").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>123</span>`
      }
  }
  else{
      document.getElementById("output-box").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "ALI HASSAN"</span>`
  }
}


// login 
document.getElementById("login").onclick = function (){
  document.getElementById("input-box").innerHTML = " ";
  let userName = prompt("please enter username")
  let passWord = +prompt("please enter password")
  if (userName === "ALI HASSAN" && passWord === 123 ){
      document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
      document.getElementById("output-box").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
  }
  else {
      document.getElementById("output-box").innerHTML = "Try Again"
  }

}