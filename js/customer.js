/** Bar
 *  customer.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 *  Updated by Hassan Odimi on 23 of February 2018.
 */

/*CUSTOMER PAGE SCRIPTS
* All scripts related to the customer page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

var order = []; // keeps list of drinks ordered
var quantity = []; // keeps list of quantities with matching indexes
var total = 0; // calculates the total

$(document).ready(function() {

    retrieveDB(); // load database on page load

    // filter drinks by category
    $("#all").click(function(){
        $("#drink_database").empty();
        retrieveDB();
    });

    $("#beers").click(function(){
        $("#drink_database").empty();
        retrieveBeers();
    });

    $("#wines").click(function(){
        $("#drink_database").empty();
        retrieveWines();
    });

    $("#spirits").click(function(){
        $("#drink_database").empty();
        retrieveSpirits();
    });

    $("#kosher").click(function(){
        $("#drink_database").empty();
        retrieveKosher();
    });

    $("#ecologic").click(function(){
        $("#drink_database").empty();
        retrieveEcologic();
    });

    if (true) {$("#specials").click(function(){ // HERE
        $("#drink_database").empty();
        retrieveSpecial();
    })};

    $(document).on('click','.drink',function(){
        var article_id = $(this).find('span').html();
        //alert("You have chosen: " + article_id);
        addOrder(article_id);
    });

    $(document).on('click','.delete',function(){

        total-= $(this).closest('.order').find('.loreen').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,order);

        order.splice(i, 1); // remove both order and quantity (same index)
        quantity.splice(i, 1);

        //alert(article_id)
        //alert(order)
        $(this).closest('.order').remove(); // remove from DOM
    });
});

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
    $("#customer").text(customer[index]);
    $("#credit").text(credit[index]);
    $("#drink_list").text(drink_list[index]);
    $("#all").text(all[index]);
    $("#beers").text(beers[index]);
    $("#wines").text(wines[index]);
    $("#spiritis").text(spiritis[index]);
    $("#kosher").text(kosher[index]);
    $("#ecologic").text(ecologic[index]);
    $("#specials").text(specials[index]);
    $("#your_order").text(your_order[index]);
    $("#total").text(total[index]);
    $("#pay").text(pl_order[index]);
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
    $.each(DB_STOCK, function(element){
        printToDOM(this);
    });
}

function retrieveBeers () {
    $.each(DB_STOCK, function(element){
        if (this.beer == true){ // filter only beers
            printToDOM(this);
        };
    });
}

function retrieveWines () {
    $.each(DB_STOCK, function(element){
        if (this.wine == true){ // filter only wines
            printToDOM(this);
        };
    });
}

function retrieveSpirits () {

    $.each(DB_STOCK, function(element){

        if (this.spirit == true){ // filter only spirits
            printToDOM(this);
        };
    });
}

function retrieveKosher () {

    $.each(DB_STOCK, function(element){

        if (this.kosher == true){ // filter only kosher
            printToDOM(this);
        };
    });
}

function retrieveEcologic () {
    $.each(DB_STOCK, function(element){

        if (this.ecologic == true){ // filter only ecologic
            printToDOM(this);
        };
    });
}

function retrieveSpecial () {
    $.each(DB_STOCK, function(element){

        if (this.special == true){ // filter only specials
            printToDOM(this);
        };
    });
}

function printToDOM (element){
    $("#drink_database").append(
        '<div class="drink">' +
        '<h4>' + element.name + '</h4>' +
        '<img src="img/drinks/' + element.article_id + '.png">' +
        '<h4>SEK ' + element.sale_price + ':-</h4>' +
        '<span hidden>' + element.article_id + '</span>'+
        '</div>');
}

function addOrder (article_id) {
    i = $.inArray(article_id,order);

    if (i == -1){ // if drink is not already on the order print to DOM

        $.each(DB_STOCK, function(element){
            if (this.article_id == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order " id="'+ this.article_id +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="loreen">' + this.sale_price + '</span>:-</h4>' +
                    '<span class="sum" hidden>' + this.sale_price + '</span>' +
                    '<img src="img/drinks/' + this.article_id + '.png">' +
                    '<h4>' + this.name + '<span class="quantity"></span></h4>' +
                    '</div>'
                )
                total += parseInt(this.sale_price);
                ;}
        });

        order.push(article_id);
        quantity.push(1);
    } else { // if the drink is already in the order, update counter on DOM
        quantity[i]++;
        total += parseInt($("#"+article_id).find('.sum').html());

        $("#"+article_id).find('.quantity').empty().append(" ( x " + quantity[i] + ")");

        update_price = parseInt($("#"+article_id).find('.sum').html()) * quantity[i];
        $("#"+article_id).find('.loreen').empty().append(update_price);
    }

    updateTotal();
    //FOR TESTING PURPOSES
    //alert (order +' X '+quantity)
}

function updateTotal () {
    $('#total').empty().append('Total: SEK ' + total + ':-')
}
;
