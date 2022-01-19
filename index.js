
document.getElementById("loginEmail").style.display = "none";
document.getElementById("registerPassword").style.display = "none";
document.getElementById("loginPassword").style.display = "none";
document.getElementById("registrato").style.display = "none";
document.getElementById("loggato").style.display = "none";

var chiave= document.getElementById("emailRegistrazione")
var valore= document.getElementById("passwordRegistrazione")

var email=document.getElementById("emailLogin")
var password=document.getElementById("passwordLogin")

var users = []





function registraemail(){


document.getElementById("loginEmail").style.display = "none";
document.getElementById("registerPassword").style.display = "none";
document.getElementById("loginPassword").style.display = "none";
document.getElementById("registerEmail").style.display = "block";
document.getElementById("registrato").style.display = "none";
document.getElementById("loggato").style.display = "none";



}

function registrapassword (){


    

    let str=document.getElementById("emailRegistrazione").value
    var pattern = "@";
    if(str.match(pattern) && str.match("\\.")){   //[0-9] "\\."
        alert("Email valida")
        
    

document.getElementById("loginEmail").style.display = "none";
document.getElementById("registerPassword").style.display = "block";
document.getElementById("loginPassword").style.display = "none";
document.getElementById("registerEmail").style.display = "none";
document.getElementById("registrato").style.display = "none";
document.getElementById("loggato").style.display = "none";

    }else {

        alert("Devi inserire almeno @ e .")
        return
    }

}

function registrato (){


    save()
    document.getElementById("loginEmail").style.display = "none";
    document.getElementById("registerPassword").style.display = "none";
    document.getElementById("loginPassword").style.display = "none";
    document.getElementById("registerEmail").style.display = "none";
    document.getElementById("registrato").style.display = "block";
    document.getElementById("loggato").style.display = "none";


}

function loginEmail() {

    
    document.getElementById("loginEmail").style.display = "block";
    document.getElementById("registerPassword").style.display = "none";
    document.getElementById("loginPassword").style.display = "none";
    document.getElementById("registerEmail").style.display = "none";
    document.getElementById("registrato").style.display = "none";
    document.getElementById("loggato").style.display = "none";
    

}

function loginPassword(){


    var x= JSON.parse(localStorage.users)
    console.log(x[0].email)


    if(email.value==""){
        alert("Attenzione, non mettere un campo vuoto")
        var x= JSON.parse(localStorage.users)
        // var found = x.find(element => element = email.value);
        console.log(x[0].email)
        return
    }   
    
    if ( email.value != x[0].email){

        alert ("L'email non esiste")
        return
    }

    if (email.value == x[0].email){

    document.getElementById("loginEmail").style.display = "none";
    document.getElementById("registerPassword").style.display = "none";
    document.getElementById("loginPassword").style.display = "block";
    document.getElementById("registerEmail").style.display = "none";
    document.getElementById("registrato").style.display = "none";
    document.getElementById("loggato").style.display = "none";
    

    }
}

function loggato(){


    var x= JSON.parse(localStorage.users)
    console.log(x[0].password)


    if(password.value==""){
        alert("Attenzione, non mettere una password vuota")
        var x= JSON.parse(localStorage.users)
        // var found = x.find(element => element = email.value);
        console.log(x[0].password)
        return
    }   
    
    if ( password.value != x[0].password){

        alert ("La password non è corretta")
        return
    }

    if (password.value == x[0].password){


    document.getElementById("loginEmail").style.display = "none";
    document.getElementById("registerPassword").style.display = "none";
    document.getElementById("loginPassword").style.display = "none";
    document.getElementById("registerEmail").style.display = "none";
    document.getElementById("registrato").style.display = "none";
    document.getElementById("loggato").style.display = "block";
    }
}



function save(){

    if(chiave.value==""){
        alert("attenzione devi inserire una chiave")
        return

    } if (valore.value==""){
        alert("attenzione devi inserire un valore")
        return
    }  




    let user = {

        email: chiave.value,
        password: valore.value
    }

    

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users) )
    alert("il salvataggio è avvenuto correttamente, benvenuto!")

    

}


//leggi e posto la chiave

function read(){

    if(chiave.value==""){
        alert("attenzione devi inserire una email decente")
        return
    }   
    
    if (!localStorage.getItem(chiave.value)){

        alert (" l'email  non esiste")
        return
    }
    var email= localStorage.getItem(chiave.value)
}



//  console.log(localStorage.users)


/*

function loggato(){


    if(password.value==""){
        alert("Non hai scritto nietne nel campo password")
        return
    }   
    
    if (!localStorage.getItem(password.value)){

        alert ("password errata")
        return
    }

    if (localStorage.getItem(valore.value)){


    document.getElementById("loginEmail").style.display = "none";
    document.getElementById("registerPassword").style.display = "none";
    document.getElementById("loginPassword").style.display = "none";
    document.getElementById("registerEmail").style.display = "none";
    document.getElementById("registrato").style.display = "none";
    document.getElementById("loggato").style.display = "block";
    }
}

*/

// var dataStr = localStorage.users;