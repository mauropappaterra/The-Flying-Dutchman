//const DB = require('../db/DB.js');
//import {tmp} from '../db/DB';

/* login functions */

var user = "blank";

function findByID(id, db) { // assuming 'id' is the first objectvalue
    for (i in db) {
        for (j in db[i]) {
            if(db[i][j] == id) {return db[i]}
            break;
        }
    }
}

function typeToDB(usertype) {
    if (usertype == 'customer')  { return DB_CUSTOMERS;}
    if (usertype == 'bartender') { return DB_BARTENDERS;}
    if (usertype == 'management')   { return DB_MANAGERS;}

   // else {alert("todo?: invalid userType")}
}


function goToUserPage(usertype) {
    if      (usertype == 'customer')  { window.location.href = "customer.html";}
    else if (usertype == 'bartender') { window.location.href = "bartender.html";}
    else if (usertype == 'management')   { window.location.href = "management.html";}
    else { window.location.href = "index.html";}
}

function loginDB(form) {
    var username = form.user_name.value;
    var password = form.password.value;
    var db = typeToDB(localStorage.getItem('usertype'));
    for (i in db) {
        if (db[i].username == username) {
            if (db[i].password == password) {
                user = db[i];
                for (j in db[i]) {                
                    localStorage.setItem('id', db[i][j]);
                    break;}
                goToUserPage(localStorage.getItem('usertype'));
                return;
            }
            else { alert("Wrong password"); } 
        }
    }
   alert("Wrong username");  // TODO: alert only when something is wrong or specify if its the pass/name? 
}

function checkAccess() { 
    var ut = localStorage.getItem('usertype');
    var page = window.location.pathname.split("/").pop().split(".")[0];
    if ((ut == page) || (ut == null && page == 'index') || (page == 'index')) {return;}
    else {
        alert("Acces Denied");
        goToUserPage(ut);
    }
}

function logOut() {  // TODO: pop asking to confirm?
    localStorage.clear();
    window.location.href = "index.html";
}

function isVIP(user) { // TODO: fix according to VIP bool
    return user.credit > 0;
}

$(function (){
    alert("wut");
    checkAccess();
    user = findByID(localStorage.getItem("id"), typeToDB(localStorage.getItem("usertype")));
    
    if (!isVIP(user)) {
        document.getElementById("specials").style.display = 'none';
        document.getElementById("creditDisplay").style.display = 'none';   
    }
   
    // TODO:setup differently depending on current page/user, depending on design
    document.getElementById("usr").innerHTML = user.first_name;
    document.getElementById("cre").innerHTML = user.credit; 
});

