function generatePassword(){
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById ("includeLowercase");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeSymbol = document.getElementById("includeSymbol");
    const includeNumber =document.getElementById("includeNumber");
    const result = document.getElementById("result");

    
    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%&";


    let allowedChars ="";
    let password="";

    allowedChars += includeLowercase.checked ? lowerCaseChars : "";
    allowedChars += includeUppercase.checked ? upperCaseChars : "";
    allowedChars += includeNumber.checked ? numberChars : "";
    allowedChars += includeSymbol.checked ? symbolChars : "";


    if (allowedChars.length === 0){
        result.textContent=`At least 1 set  of charachter needs to be selected`;
         
    }
    else{

        for (let i =0; i< passwordLength; i++){

            const randomIndex= Math.floor(Math.random()*allowedChars.length);
            password += allowedChars[randomIndex];
            
        }
        result.textContent=`Generate Password: ${password}`;
       
    }
}