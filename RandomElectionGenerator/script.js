
const arrayParties = ["Miljöpartiet", "Socialdemokraterna", "Moderaterna", "Centerpartiet", "Feministiskt initiativ", "Kristdemokraterna", "Liberalerna", "Vänsterpartiet", ];

function setArray(){
     const result = arrayParties[Math.floor(Math.random() * arrayParties.length)];
    
     switch (result) {
          case "Miljöpartiet":
              document.getElementById('text').innerHTML = window.open("https://www.mp.se/");
              break;

          case "Socialdemokraterna":
               document.getElementById('text').innerHTML = window.open("https://www.socialdemokraterna.se/");
               break;

          case "Moderaterna":
               document.getElementById('text').innerHTML = window.open("https://moderaterna.se/");
               break;
               
          case "Centerpartiet":
               document.getElementById('text').innerHTML = window.open("https://www.centerpartiet.se/");
               break;   

          case "Feministiskt initiativ":
               document.getElementById('text').innerHTML = window.open("https://feministisktinitiativ.se/");
               break; 

          case "Kristdemokraterna":
               document.getElementById('text').innerHTML = window.open("https://kristdemokraterna.se/");
               break;

          case "Liberalerna":
               document.getElementById('text').innerHTML = window.open("https://www.liberalerna.se/");
               break;

          case "Vänsterpartiet":
               document.getElementById('text').innerHTML = window.open("https://www.vansterpartiet.se/");
               break;}
     return result;}
    

function setName (){
     document.getElementById('randomName').innerText = setArray();}

document.getElementById('generate').addEventListener("click", setName);


























