// File:   random.js 
// Author: Dave Reed 
// Date:   1/10/02
// 
// This file contains several routines for generating random values 
////////////////////////////////////////////////////////////////////////  

function randomNum(low, high) 
// Given   : low <= high 
// Returns : a random number in the range [low, high) 
{ 
    return Math.random()*(high-low) + low; 
}  

function randomInt(low, high) 
// Given   : low <= high 
// Returns : a random integer in the range [low, high] 
{ 
    return Math.floor(Math.random()*(high-low+1)) + low; 
}  

function randomChar(str) 
// Given  : str is a nonempty string 
// Returns: a random character from the string 
{  
    return str.charAt(randomInt(0, str.length-1)); 
}  

function randomOneOf(list) 
// Given  : list is a nonempty list (array) 
// Returns: a random item from the list 
{    
    return list[randomInt(0, list.length-1)]; 
} 