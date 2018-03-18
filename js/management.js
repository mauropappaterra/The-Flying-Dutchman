/** Bar
 *  management.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */

/*MANAGEMENT PAGE SCRIPTS
* All scripts related to the management page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

var big_orders = []; // keeps list of drinks ordered
var big_quantity = []; // keeps list of quantities with matching indexes
var big_total = 0; // calculates the big_total

var done = new Array([]);    //keeps track of 'done' actions
var undone = new Array();  //keeps track of 'redone' actions

$(document).ready(function() {

    retrieveDB(); // load database on page load

    //filter drinks by category
    $("#drinks_list").click(function(){
        $("#drink_database").empty();
        retrieveDB();
    });

    $("#check_stock").click(function(){
        $("#drink_database").empty();
        retrieveStock();
    });

    $("#shortage_alert").click(function(){
        $("#drink_database").empty();
        retrieveShortage();
    });

    $("#pay").click(function(){
        alert(big_orders);
        alert(big_quantity);
    });

    $(document).on('click','#add1',function(){
        var article_id = $(this).parent().find('span').html();
        //alert("You have chosen: " + article_id);
        addOrder(article_id, 1);
    });

    $(document).on('click','#add10',function(){
        var article_id = $(this).parent().find('span').html();
        //alert("You have chosen: " + article_id);
        addOrder(article_id, 10);
    });

    $(document).on('click','#add100',function(){
        var article_id = $(this).parent().find('span').html();
        //alert("You have chosen: " + article_id);
        addOrder(article_id, 100);
    });

    $(document).on('click','.delete',function(){

        big_total-= $(this).closest('.order').find('.loreen').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,big_orders);

        big_orders.splice(i, 1); // remove both order and quantity (same index)
        big_quantity.splice(i, 1);

        //alert($(this).closest('.order').html());
        $(this).closest('.order').remove(); // remove from DOM
    });
    $(document).on('click','.undo',function() {
        var article_id = $(this).find('span').html();     
        undo();
    });
    $(document).on('click','.redo',function() {
        var article_id = $(this).find('span').html();
        redo();
    });
});

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

    $("#big_total").text(big_total[index]);
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
}

function retrieveDB () {
    $.each(DB_SYSTEMBOLAGET, function(element){
        printToDOM(this);
    });
}

function retrieveStock() {
    $.each(DB_SYSTEMBOLAGET, function(element){
        if (checkStock(this.artikelid) > 0){
            printToDOM(this);
        };
    });
}

function retrieveShortage() {
    $.each(DB_SYSTEMBOLAGET, function(element){
        if (checkStock(this.artikelid) > 0 && checkStock(this.artikelid) < 15){
            printToDOM(this);}
    });
}

function checkStock (article_id) {
    var counter = 0;
    $.each(DB_STOCK, function(element){
        if (this.article_id == article_id){
            counter = this.in_stock;
        }
    });

    return counter;
}

function printToDOM (element){

    var classes = '';

    if (checkStock(element.artikelid) < 15){
        classes = ' class ="textRed"';
    }

    if (checkStock(element.artikelid) == 0){
        classes = ' class ="textGrey"';
    }

    $("#drink_database").append(
        '<div class="drink">'+

        '<div class="c1">' +
        '<img src="img/drinks/' + element.artikelid + '.png">' +
        '</div>' +

        '<div class="c2">'+
        '<b>Name:</b> ' + element.namn + ' ' + element.namn2 + '<br>' +
        '<b>Type:</b> ' + element.varugrupp + '<br>' +
        '<b>Price:</b> SEK ' + parseInt(element.prisinklmoms) + ':-<br>' +
        '<b>Country:</b> ' + element.ursprunglandnamn + '<br>' +
        '<b>Volume:</b> ' + element.volymiml + '<br>' +
        '<b>Alcohol:</b> ' + element.alkoholhalt + '<br>' +
        '<b>ID:</b> '+ element.artikelid +'<br>' +
        '<b>Producer:</b> '+ element.producent +'<br>' +
        '<b>Delivery:</b> '+ element.leverantor +'<br>' +
        '<b>Cost per Liter:</b> SEK '+ element.prisperliter + '<br>' +
        '</div>' +

        '<div class="c3">' +
        '<br><br><br>' +
        '<h2 '+ classes +'>In Stock: '+ checkStock(element.artikelid) +'</h2>' +
        '</div>' +

        '<div class="c4">' +
        '<a class="add_button" id="add1"><h4>Add +1</h4></a>' +
        '<a class="add_button" id="add10"><h4>Add +10</h4></a>' +
        '<a class="add_button" id="add100"><h4>Add +100</h4></a>' +
        '<span hidden>' + element.artikelid + '</span>'+
        '<span hidden>' + element.prisinklmoms +'</span>'+
        '</div>'+
        '</div>'
    );
}

function addOrder (article_id, number) {
    i = $.inArray(article_id, big_orders);

    if (i == -1){ // if drink is not already on the big_orders print to DOM

        $.each(DB_SYSTEMBOLAGET, function(element){
            if (this.artikelid == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order" id="'+ this.artikelid +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="loreen">' + parseInt(this.prisinklmoms * number) + '</span>:-</h4>' +
                    '<span class="sum" hidden>' + parseInt(this.prisinklmoms) + '</span>' +
                    '<img src="img/drinks/' + this.artikelid + '.png">' +
                    '<h4>' + this.namn + ' ' + this.namn2 + '<span class="quantity textRed"> ( x ' + number + ')</span></h4>' +
                    '</div>'
                )
                big_total += parseInt(this.prisinklmoms * number);
                ;}
        });
        big_orders.push(article_id);
        big_quantity.push(number);

    } else { // if the drink is already in the big_orders, update counter on DOM
        big_quantity[i]+= number;

        big_total += parseInt($("#"+article_id).find('.sum').html()) * number;

        $("#"+article_id).find('.quantity').empty().append(" ( x " + big_quantity[i] + ")");

        update_price = parseInt($("#"+article_id).find('.sum').html()) * big_quantity[i];
        $("#"+article_id).find('.loreen').empty().append(update_price);
    }

    updateTotal();
    //FOR TESTING PURPOSES
    //alert (big_orders +' X '+big_quantity)
}

function updateTotal (){
    $('#total').empty().append('Total: SEK ' + Math.max(big_total,0) + ':-')
};
