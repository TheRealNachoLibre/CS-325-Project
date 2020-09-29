
//initializing variables 
var weight = 0; 
var target = 0;
var gain = false; 
var maintain = false;
var diet = false; 
var strenth = false; 
var new_message = ''; 

//calculate - a function to evaluate the user's target weight and current weight in order to set workout plan 
function calculate() { 
    weight = document.getElementById('fweight');
    target = document.getElementById('ftarget');
    document.getElementById('workout-plan').style.visibility = "visible"; 
    if (target.value < 0 || weight.value < 0) {
        strenth = false; 
        diet = false; 
    }
    else if (target.value >= weight.value) {
        strenth = true; 
        diet = false; 
    } else {
        diet = true; 
        strenth = false; 
    }  
    console.log(weight.value, target.value); 
    updateMessage(diet, strenth); 
}
//updateMessage - function to update the message (workoutplan) based off of the users input. 
function updateMessage(diet, strenth) {
    let element = document.getElementById("message"); 
    console.log(strenth, diet); 
    if(!diet && !strenth) {
        new_message = 'Please put a valid input into the calculator'; 
        element.textContent = new_message; 
    }
    else if (diet) {
        new_message = 'There is no need to focus on strength conditioning. A light run and streching should be sufficient. Focus on taking in less calories than what is required by your weight.';
        element.textContent = new_message;

    } else if (strenth) {
        new_message = 'A regular diet is recommended, but a more consistent strength routine is more important. Look for examples of a routine that I give below.';
        element.textContent = new_message;
    } else {
        new_message = 'Error please recalculate';
    }
    element.textContent = new_message; 
}
 