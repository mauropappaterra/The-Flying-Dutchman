/** The Flying Dutchman
 *  index.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
 */

/*INDEX PAGE SCRIPTS
* All scripts related to the index page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

if (localStorage.getItem("index") == null){
    localStorage.setItem("index",0)
}

// login/gif related functions
function openLogin(elem, show, user) {
    localStorage.setItem('usertype', user);
    $('#loginBox').show();
}

// change between displaying picture/gif
function picToGif(ev) {
    ev.preventDefault();
    if($('#piratePic').css('display') == 'block') { // if the logo is currently displayed
        $('#piratePic').hide();
        $('#great').show();
   
        document.getElementById('great').play();
        $('body').css('background-color', "#62CB62");
        $('body').css('background-image', 'none');
    } else { // if the gif is currently displayed
        $('#piratePic').show();
        $('#great').hide();
        document.getElementById('great').pause();
        $('body').css('background-color', "white");
        $('body').css('background-image', 'url("img/background/back12.png")');
    }
}

function allowDrop(ev) { ev.preventDefault(); }

function drag(ev) { ev.dataTransfer.setData("text", ev.target.id);}

function drop(ev) {
    ev.preventDefault();
    var data = ev.target.id;
    alert(data);
    document.getElementById(ev).style.display = "none";
}

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
