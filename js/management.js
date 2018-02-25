/** Bar
 *  management.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */

/*MANAGEMENT PAGE SCRIPTS
* All scripts related to the management page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
    $("#stock_order").text(stock_order[index]);
    $("#login_as").text(login_as[index]);

    $("#drinks_list").text(drinks_list[index]);
    $("#check_stock").text(check_stock[index]);
    $("#shortage_alert").text(shortage_alert[index]);

    // Translating the drink's details
    $("#drink_name").text(drink_name[index]);
    $("#type").text(type[index]);
    $("#price").text(price[index]);
    $("#country").text(country[index]);
    $("#volume").text(volume[index]);
    $("#alcohol").text(alcohol[index]);
    $("#drink_id").text(drink_id[index]);
    $("#producer").text(producer[index]);
    $("#delivery").text(delivery[index]);
    $("#cost").text(cost[index]);
    // <end> Translating the drink's details

    $("#inStock").text(inStock[index]);
    $("#add_one").text(add_one[index]);
    $("#add_ten").text(add_ten[index]);
    $("#add_hundred").text(add_hundred[index]);

    $("#total").text(total[index]);
    $("#pay").text(pay[index]);
}

function responsive() {
    //var size = $(document).width();

    if ($(window).width() < 640) { /* Small size */
        //alert("Small Size! -> " + size + " px!");
    }

    if ($(window).width() > 641 && $(window).width() < 1007){/* Medium size */
        //alert("Medium Size! -> " + size + " px!");

    }

    if ($(window).width() > 1008){/* Large size */
        //alert("Large Size! -> " + size + " px!");

    }
};