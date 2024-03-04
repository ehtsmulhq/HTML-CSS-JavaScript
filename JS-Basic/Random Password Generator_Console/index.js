function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol){
    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%&";


    let allowedChars ="";
    let password="";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";


    if(length<= 8){
        return `(Length must be above 8)`;
    }

    if (allowedChars.length === 0){
        return `( At least 1 set  of charachter needs to be selected)`;
    }

    for (let i =0; i< length; i++){

        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }


 
    
    return password;

}





const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbol = false;
const includeNumber =true;


const password = generatePassword(passwordLength,   
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbol);


console.log(`Generate Password: ${password}`);