'user strict';

let score=0 ;

alert('welcome to Osama Momani page') ;

let Qus= prompt('what\'s your name ?');

con= confirm('wlcome '+ Qus+' , lets see how mutch you know about me ') ;

function fun1(){

let Qus1= prompt('Do you know who I\'m ?');
switch (Qus1.toLowerCase()) {

    case 'yes':
    case 'y' : 
    alert('you get that')
    score++;
break;
    case 'no':
    case 'n' : 
    alert ('runge answer')
break;
default:
    alert('invalid answer')
}

let Qus2= prompt('Do you think I\'m a gamer ?') ;

switch (Qus2.toLowerCase()) {

    case 'yes':
    case 'y' : 
    alert('you get that')
    score++;
break;
    case 'no':
    case 'n' : 
    alert ('runge answer')
break;
default:
    alert('invalid answer')
}

let Qus3= prompt('Do you think I\'m 24 yers old  ?') ;

switch (Qus3.toLowerCase()) {

    case 'yes':
    case 'y' : 
    alert('you get that')
    score++;
break;
    case 'no':
    case 'n' : 
    alert ('runge answer')
break;
default:
    alert('invalid answer')
}

let Qus4= prompt('Do you think i\'m an engineer ?');

switch (Qus4.toLowerCase()) {

    case 'yes':
    case 'y' : 
    alert('you get that')
    score++;
break;
    case 'no':
    case 'n' : 
    alert ('runge answer')
break;
default:
    alert('invalid answer')
}

let Qus5= prompt('Do you know where I live ?')

switch (Qus5.toLowerCase()) {

    case 'yes':
    case 'y' : 
    alert('you get that')
    score++;
break;
    case 'no':
    case 'n' : 
    alert ('runge answer')
break;
default:
    alert('invalid answer')
}
}

conf= confirm('Thank you '+ Qus+' ,you can know more about me here ') ;

function fun2(){
let correct_answer=7;
let i;

//Qus6 = parseInt(Qus6)
for (i = 0; i<4 ; i++) {
    let Qus6 = prompt('what is my favorite number between (1-10) you have four opportunities');
    Qus6 = parseInt(Qus6);
    if (Qus6 !== correct_answer ) {
        if (Qus6<correct_answer) {
            alert('your answer is too low , please try again');
            continue;
        }
        if (Qus6>correct_answer) {
            alert('your answer is too high, please try again');
            continue;

        }
    }
    if (Qus6 === correct_answer){
        alert('you answer is correct');
        score++;
        break;
    }
}
if (i==4){
    alert('you use all of your chances to guess my favorite number , the answer is 7');
}
}

function fun3(){

let favAnime;
favAnime = ['attack on titan','death note','hunterxhunter'];
let value = false;

for (let i=0 ; i<6 ; i++){
    let Qus7 = prompt('guess one of my favorite 3 anime, you have 6 attempts');
    for (let j=0 ; j<3; j++){
        if (Qus7.toLowerCase() === favAnime[j]){
            value = true;
            break;
        }
        
    }
    if (value==true){
        alert('youe answer is correct');
        score++;
        break; 
    }
    else {
        alert ('your answer is not correct ,please try again');
    }
}   
}

fun1();
fun2();
fun3();
alert('your score is '+score+' from 7')