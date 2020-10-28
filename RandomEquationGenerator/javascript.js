'use strict'
var answer=0;

//get random number
function getRandomizer(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
function getRandomNumber() {
    return getRandomizer( 1, 20 );
    
}



//generating random equation
function randomequation(){
	
var level;
//getting level of the game
	if (document.getElementById('level').checked) 
		level= document.getElementById('level').value;
	else if (document.getElementById('level1').checked) 
		level= document.getElementById('level1').value;
	else
		level= document.getElementById('level2').value;


//7 random number generate
var num_7 = getRandomNumber(),
        num_6 = getRandomNumber(),
        num_5 = getRandomNumber(),
        num_4 = getRandomNumber(),
        num_3 = getRandomNumber(),
        num_2 = getRandomNumber(),
        num_1 = getRandomNumber();

//15 random equations representation 0 to 4 for 'easy' 5 to 9 for 'medium' 10 to 14 for 'hard' level
var equation_rep_s = [num_1+" + "+num_2+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7,
        num_7+" - "+num_1 +" ÷ ("+num_2+" - "+num_3+")  "+num_4+" + "+ num_5 ,
        num_2+" ÷ ("+num_1+" + "+num_3+" * "+num_5+") - "+num_7,
        num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6,
        num_1+" + ("+num_7+" ÷ "+num_3+")"+num_4+" ÷ "+num_2+" - "+num_6,
		
		num_1+" + "+num_2+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7 + " + "+num_2+" * ("+num_3+" + "+num_4+")+ "+num_6+" - "+num_7,
        num_7+" - "+num_1 +" ÷ ("+num_2+" - "+num_3+") * "+num_4+" + "+ num_5+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7+" + "+num_2,
        num_2+" ÷ ("+num_1+" + "+num_3+" * "+num_5+") - "+num_7+" - "+num_1+" + ("+num_7+" ÷ "+num_3+")*"+num_4+" ÷ "+num_2+" - "+num_6,
        num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6+" + "+num_7+" - "+num_1 +" ÷ ("+num_2+" - "+num_3+") * "+num_4,
        num_1+" + ("+num_7+" ÷ "+num_3+")"+num_4+" ÷ "+num_2+" - "+num_6+" ÷ "+num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" × "+num_6,
		
		num_1+" + "+num_2+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7 +  " + "+num_2+" * ("+num_3+" + "+num_4+")+ "+num_6+" - "+num_7+" + "+ num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6,
        num_7+" - "+num_1 +" ÷ ("+num_2+" - "+num_3+") * "+num_4+" + "+ num_5+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7+" + "+num_2+" + "+num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6,
        num_2+" ÷ ("+num_1+" + "+num_3+" * "+num_5+") - "+num_7+" - "+num_1+" + ("+num_7+" ÷ "+num_3+")"+num_4+" ÷ "+num_2+" - "+num_6+" + "+num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6,
        num_4+" * "+num_1+" ÷ "+num_5+" + "+num_2+" − "+num_3+" * "+num_6+" + "+num_7+" - "+num_1+" ÷ ("+num_2+" - "+num_3+")"+num_4+" + "+num_1+" + "+num_2+" * ("+num_3+" + "+num_4+") + "+num_6+" - "+num_7,
        num_1+" + ("+num_7+" / "+num_3+")"+num_4+" / "+num_2+" - "+num_6+" / "+num_4+" * "+num_1+" / "+num_5+" + "+num_2+" − "+num_3+" * " +num_4+" * "+num_1+" / "+num_5+" + "+num_2+" − "+num_3+" * "+num_6];
		
//answers of random equations		
var eq=[num_1+num_2*(num_3+num_4)+num_6-num_7,
        num_7-num_1/(num_2-num_3)*num_4+num_5,
        num_2/(num_1+num_3*num_5)-num_7,
        num_4*num_1/num_5+num_2-num_3*num_6,
        num_1+(num_7/num_3)*num_4/num_2-num_6,
		
		num_1+ num_2* (num_3 + num_4) + num_6 - num_7 +  num_2 * (num_3 + num_4)+ num_6 - num_7,
        num_7 - num_1  / (num_2 - num_3) * num_4 +  num_5* (num_3 + num_4) + num_6 - num_7 +  num_2,
        num_2 / (num_1 + num_3 * num_5) - num_7-num_1 + (num_7 / num_3)*num_4 / num_2 - num_6,
        num_4*num_1/num_5+num_2-num_3*num_6+num_7-num_1 /(+num_2-num_3)*num_4,
        num_1+(num_7/num_3)*num_4/num_2-num_6/num_4*num_1/num_5+num_2-num_3*num_6,
		
		num_1 + num_2 * (num_3 + num_4) + num_6 - num_7 +  num_2 * (num_3 + num_4)+ num_6 - num_7 + num_4 * num_1 / num_5 + num_2-num_3 * num_6,
        num_7 - num_1  / (num_2 - num_3) * num_4 + num_5* (num_3 + num_4) + num_6 - num_7 +  num_2 + num_4* num_1 /num_5 + num_2 - num_3 * num_6,
        num_2 / (num_1 + num_3 * num_5) - num_7-num_1 + (num_7 / num_3)*num_4 / num_2 - num_6 + num_4* num_1 / num_5 + num_2 - num_3 * num_6,
        num_4 * num_1 / num_5 +num_2 - num_3 * num_6+num_7 - num_1  / (num_2 - num_3) * num_4 + num_1 + num_2 * (num_3 + num_4) + num_6 - num_7,
        num_1 + (num_7 / num_3)*num_4 / num_2 - num_6/num_4 * num_1 / num_5 + num_2 - num_3 *  num_4 * num_1 / num_5 + num_2 - num_3 * num_6];
		
//random equation generator
var random_equation_number=0;
if(level==1)
{	
	random_equation_number=getRandomizer( 0, 4 );
}
else if(level==2)
{
	random_equation_number=getRandomizer( 5, 9 );
}
else
{
	random_equation_number=getRandomizer( 10, 14 );
}

//console.log (random_equation_number);

//displaying equation on screen
 document.getElementById("generate").innerHTML = equation_rep_s[random_equation_number];
 
 //if input field already exist it will clear else create new input field
 if(document.getElementById('answ')!=null)
	{
		document.getElementById('answ').value="";
	}
	else
	{
		var x=document.createElement("INPUT");
		x.setAttribute("type","text");
		x.setAttribute("id","answ");
		x.setAttribute("oninput","input_check(event)");
		x.setAttribute("style","width:87%; border-radius:2px; border-color:blue; height:20px;");
		document.getElementById("answer").appendChild(x);
	}
//if span doesn't exist it will  create span tag
 if(document.getElementById('image')==null)
 {
	var x=document.createElement("span");
	x.setAttribute("id","image");
	document.getElementById("answer").appendChild(x);
 }
  
  if(document.getElementById('check_button')==null)
	{
		 var y=document.createElement("button");
		 y.setAttribute("onclick","check()");
		 y.setAttribute("id","check_button");
		 x=document.createTextNode("Check");
		 y.appendChild(x);
		 document.getElementById("buton").appendChild(y);
	}
  
 
answer=Math.ceil(eq[random_equation_number]);
console.log(answer);
}



document.addEventListener('DOMContentLoaded',function(){
	randomequation();
})
function change() {
	
    randomequation();
	
}

function check() {
	
    if(document.getElementById('correct')!=null)
	{
		document.getElementById('correct').parentNode.removeChild(document.getElementById('correct'));
	}
	var a= document.getElementById('answ').value;
	
	var x=document.createElement("img");
	if(a==answer)
	{
		 x.setAttribute("src","ticks.png");
		 document.getElementById("answ").style.borderColor='green';
	}
	else{
		 x.setAttribute("src","cross.png");
		 document.getElementById("answ").style.borderColor='red';
	}
	x.setAttribute("width","22px");
	x.setAttribute("height","18px");
	x.setAttribute("id","correct");
	document.getElementById("image").appendChild(x);
	//console.log(answer);
	//console.log(a);
}
function next()
{
	if(document.getElementById('correct')!=null)
	{
		document.getElementById('correct').parentNode.removeChild(document.getElementById('correct'));
	}
	document.getElementById('answ').style.borderColor='blue';
    randomequation();
}
function input_check(event)
{
	let elem = document.getElementById('answ')
	console.log(elem.value.length)
	let inputStr = elem.value
	let inputStrLen = inputStr.length
	
	if(inputStrLen == 1)
	{
		if ((inputStr[0] != '-') && (Number.isNaN(Number.parseInt(inputStr))))
		{
			elem.value = ""
		}
	}
	else
	{
		if (Number.isNaN(Number.parseInt(inputStr[inputStrLen - 1])))
		{
			elem.value = inputStr.substring(0, inputStrLen - 1)
		}
	}
}
