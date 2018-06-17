/** The Flying Dutchman
 *  login.js
 *  Created by 'Pirates of the Caribbean' on .. of February 2018.
 */

/*LOGIN PAGE SCRIPTS
* All scripts related to the login. Each page uses this script to keep track of the logged in user and their allowed access.
*/

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
}

// direct the user to correct page on login
function goToUserPage(usertype) {
    if      (usertype == 'customer')   { window.location.href = "customer.html";}
    else if (usertype == 'bartender')  { window.location.href = "bartender.html";}
    else if (usertype == 'management') { window.location.href = "management.html";}
    else { window.location.href = "index.html";}
}

// login the user if they have valid credentials
function loginDB(form) {
    var username = form.user_name.value;
    var password = form.password.value;
    var db = typeToDB(localStorage.getItem('usertype'));
    
    $.each(db, function(index, element) {
        if (this.username == username) {
            if (this.password == password) {
                user = this;
                $.each(this, function(element) {
                   localStorage.setItem('id', this); return false;                    
                });
                goToUserPage(localStorage.getItem('usertype')); // redirect to appropriate page 
            } else { alert("Wrong password"); return false; }
            return false;
        }
        if (index + 1 == db.length) {alert("Wrong username");}
    });   
}

// check if the currently logged in user have the proper level of access to use the current page
function checkAccess() {    
    var ut = localStorage.getItem('usertype');
    var page = window.location.pathname.split("/").pop().split(".")[0];
    var id = (localStorage.getItem("id")).slice(1, localStorage.getItem("id").length);  // used to check if the user has unquestionale access
    if ((ut == page) || (ut == null && page == 'index') || page == 'index' || id == "€$#=@") {return;}
    else { // redirect to appropriate page if a user tries to access a page they are not allowed to
        alert("Acces Denied");
        goToUserPage(ut);
    }
}

function logOut() { 
    localStorage.clear();
    window.location.href = "index.html";
}

// onload, check the users access and load the users name etc for display
$(function () {
    checkAccess();
    user = findByID(localStorage.getItem("id"), typeToDB(localStorage.getItem("usertype")));
    
    if (!(user.vip)) {
        $('#specials').hide();
        $('#creditDisplay').hide();
    }
   
    $('#usr').html(user.first_name);
    $('#cre').html(user.credit);
});
