const max=100;
const min=1;
const answer= Math.floor(Math.random()*(max-min)+1)+min;

const myP=document.getElementById('myP'); 
const mySubmit= document.getElementById('mySubmit')

let attempts=0;
let guess;
let run= true;


mySubmit.onclick=function(){
    while(run){
        let myInput= document.getElementById('myInput');
        guess=Number(myInput.value);

        if (guess==NaN){
            myP.textContent='Please Input Valid Number.';
        }

        else if(guess > max || guess < min){

            myP.textContent='Plase Input Valid Number.';
        }
        else{
            attempts++;
            if(guess<answer){
                myP.textContent=`Your Guess is too Low. Submit again. Attempt-${attempts}` ;

                break;
                }
            else if(guess>answer){
                myP.textContent=`Your Guess is too High. Submit again. Attempt-${attempts}`;
                break;
                }
            else if(guess== answer){
                myP.textContent=`Your Guess is correct. The number is ${answer} and total attempts are ${attempts} `;
                run=false;
                }
        }

    }
    
}
