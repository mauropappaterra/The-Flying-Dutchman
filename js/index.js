/** Bar
 *  index.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */

/*INDEX PAGE SCRIPTS
* All scripts related to the index page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#welcome").text(welcome[index]);
    $("#customer").text(customer[index]);
    $("#bartender").text(bartender[index]);
    $("#management").text(management[index]);
    $("#user_name").text(user_name[index]);
    $("#password").text(password[index]);
    $("#login").text(login[index]);
}

function responsive() {
    //var size = $(document).width();

    if ($(window).width() < 640) { /* Small size */
        //alert("Small Size! -> " + size + " px!");
        $('.welcome_pirate').addClass('welcome_pirate_small');
        $('.welcome_pirate').removeClass('welcome_pirate_medium');
        $('.welcome_pirate').removeClass('welcome_pirate_large');

        $('.big_button').addClass('big_button_small');
        $('.big_button').removeClass('big_button_medium');
        $('.big_button').removeClass('big_button_large');
    }

    if ($(window).width() > 641 && $(window).width() < 1007){/* Medium size */
        //alert("Medium Size! -> " + size + " px!");
        $('.welcome_pirate').addClass('welcome_pirate_medium');
        $('.welcome_pirate').removeClass('welcome_pirate_small');
        $('.welcome_pirate').removeClass('welcome_pirate_large');

        $('.big_button').addClass('big_button_medium');
        $('.big_button').removeClass('big_button_small');
        $('.big_button').removeClass('big_button_large');
    }

    if ($(window).width() > 1008){/* Large size */
        //alert("Large Size! -> " + size + " px!");
        $('.welcome_pirate').addClass('welcome_pirate_large');
        $('.welcome_pirate').removeClass('welcome_pirate_medium');
        $('.welcome_pirate').removeClass('welcome_pirate_small');

        $('.big_button').addClass('big_button_large');
        $('.big_button').removeClass('big_button_medium');
        $('.big_button').removeClass('big_button_small');
    }
}

// login related functions
function openLogin(elem, show, user) {
  //  userType = user;
    //TODO: affect which page to open after login
    changeDisplay(elem, show);
}
function changeDisplay(elem, show) {
    document.getElementById(elem).style.display = show;
}

//var user = "John Doe";
//var userType = "guest";

function getUser(){
 //   return user;
}
 
function checkLogin(form) {
    event.preventDefault();  // disable normal form submit behavior
    if (form.user_name.value=="1") { 
        if (form.password.value=="2") {
            alert("Succesfull login!")
  //        document.getElementById(form).action=customer.html  // obviously not right ^^'
        } else {  alert("Invalid Password") }
        
    } else {  alert("Invalid UserID") } 
}

function picToGif1(pic, gif) {
    changeDisplay(pic, 'none');
    changeDisplay(gif, 'block');
    document.getElementById(gif).play();
}

function picToGif(ev) {
    ev.preventDefault();
    changeDisplay('piratePic', 'none');
    changeDisplay('great', 'block');
    document.getElementById('great').play();
    document.body.style.background="#62CB62";
}

function changeGif(ev) {
    changeDisplay('gifSwe', 'block');
    alert("cmon");
    ev.preventDefault();

    elements = document.getElementsByClassName('gif');
    document.getElementById('ori').style.display = "none";
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display="none";
        //elements[i].style.backgroundColor="blue";
    }
    var data = event.dataTransfer.getData("Text");
    alert(data);
    changeisplay(document.getElementById(data), 'block');
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    //ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.target.id;
    alert(data);
    document.getElementById(ev).style.display = "none";
}
;
