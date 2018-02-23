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
};