/** The Flying Dutchman
 *  index.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
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

// login/gif related functions
function openLogin(elem, show, user) {
    localStorage.setItem('usertype', user);
    $('#loginBox').show();
}
function changeDisplay(elem, show) {
        document.getElementById(elem).style.display = show;
}

function picToGif(ev) {
    ev.preventDefault();
    if($('#piratePic').css('display') == 'block') { // the logo is currently displayed
        $('#piratePic').hide();
        $('#great').show();
      //  $('#great').gifplayer('play');
        document.getElementById('great').play();
        $('body').css('background-color', "#62CB62");
        $('body').css('background-image', 'none');
    } else { // the gif is currently displayed
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
;
