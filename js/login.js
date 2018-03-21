//const DB = require('../db/DB.js');
//import {tmp} from '../db/DB';

/* login functions */

var user = "blank";

function findByID(id, db) { // assuming 'id' is the first objectvalue
    
    var new_user;
    $.each(db, function(element) {
        var found = false;
        $.each(this, function(element) {
            if (this == id) { found = true; return false;}            
        });
        if (found == true) { new_user = this; return false; }
    });
    return new_user;
}

function typeToDB(usertype) {
    if (usertype == 'customer')   { return DB_CUSTOMERS;}
    if (usertype == 'bartender')  { return DB_BARTENDERS;}
    if (usertype == 'management') { return DB_MANAGERS;}

   // else {alert("todo?: invalid userType")}
}


function goToUserPage(usertype) {
    if      (usertype == 'customer')   { window.location.href = "customer.html";}
    else if (usertype == 'bartender')  { window.location.href = "bartender.html";}
    else if (usertype == 'management') { window.location.href = "management.html";}
    else { window.location.href = "index.html";}
}

function loginDB(form) {
    var username = form.user_name.value;
    var password = form.password.value;
    var db = typeToDB(localStorage.getItem('usertype'));
    var wrong =  "Wrong username";  // TODO: alert only when something is wrong or specify if its the pass/name?
    
    $.each(db, function(element) {
        if (this.username == username) {
            if (this.password == password) {
                user = this;
                $.each(this, function(element) {
                   localStorage.setItem('id', this); return false;                    
                });
                goToUserPage(localStorage.getItem('usertype'));
            } else { wrong = "Wrong password"; return false; }
            return false;
        }
    });
    
    alert(wrong);
}

function checkAccess() {
    
    var ut = localStorage.getItem('usertype');
    var page = window.location.pathname.split("/").pop().split(".")[0];
    if ((ut == page) || (ut == null && page == 'index') || page == 'index' || localStorage.getItem("id").length < 2 ) {return;}
    else {
        alert("Acces Denied");
        goToUserPage(ut);
    }
}

function logOut() {  // TODO: pop asking to confirm?
    localStorage.clear();
    window.location.href = "index.html";
}

function isVIP(user) {
    return user.vip;
}

$(function () {
    checkAccess();
    user = findByID(localStorage.getItem("id"), typeToDB(localStorage.getItem("usertype")));
    
    if (!isVIP(user)) {
        $('#specials').hide();
        $('#creditDisplay').hide();
    }
   
    // TODO:setup differently depending on current page/user, depending on design
    $('#usr').html(user.first_name);
    $('#cre').html(user.credit);
});

