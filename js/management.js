/** The Flying Dutchman
 *  management.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
 */

/*MANAGEMENT PAGE SCRIPTS
* All scripts related to the management page. Each page has their own scripts in a single js document.
* Method translate() is unique for each individual page and can be found at the bottom of each script.
*/

var big_orders = []; // keeps list of drinks ordered
var big_quantity = []; // keeps list of quantities with matching indexes
var big_total = 0; // calculates the big_total

var current_manager = localStorage.getItem('id');
var current_tab = "drinks_list";

/*UNDO-REDO ARRAYS*/
var done = new Array([]);    //keeps track of 'done' actions
var undone = new Array(); //keeps track of 'redone' actions

$(document).ready(function() {

    //addBackground();
    retrieveSystembolaget(); // load database on page load
    highlightTab("drinks_list");
    
    $("#drinks_list").click(function(){ /* Retrieve from Systembolaget*/
        highlightTab("drinks_list");
        $("#drink_database").empty();
        //addBackground();
        retrieveSystembolaget();
    });

    $("#specials_db").click(function(){ /* Retrieve from Mike's Specials*/
        highlightTab("specials_db");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_MIKES, function(element){
            printToDOM(this);
        });
    });

    $("#check_stock").click(function(){ /* Retrieve in stock*/
        highlightTab("check_stock");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_SYSTEMBOLAGET, function(element){
            if (checkStock(this.artikelid) > 0){
                printToDOM(this);
            };
        });
    });

    $("#shortage_alert").click(function(){ /* Retrieve on shortage alert*/
        highlightTab("shortage_alert");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_SYSTEMBOLAGET, function(element){
            if (checkStock(this.artikelid) > 0 && checkStock(this.artikelid) < 15){
                printToDOM(this);}
        });

        $.each(DB_MIKES, function(element){
            if (checkStock(this.artikelid) > 0 && checkStock(this.artikelid) < 15){
                printToDOM(this);}
        });
    });


    $(document).on('click','#add1',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 1);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $(document).on('click','#add10',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 10);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $(document).on('click','#add100',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 100);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $("#pay").click(function(){

        if (big_orders.length > 0){
            orders_counter ++;

            var newBigOrder = {
                "order_id": "R" + ((orders_counter + 100000).toString()).slice(1),
                "manager_id": current_manager,
                "order": big_orders,
                "quantities": big_quantity,
                "amount": big_total,
                "timestamp": formatDate(new Date($.now()))
            };
            SESSIONS_ORDERS.push(newBigOrder);

            var flag;
            for (i = 0 ; i < (big_orders.length); i++){
                flag = true;
                for (j = 0 ; j < (SESSION_STOCK_INFO.length); j++){
                    if (SESSION_STOCK_INFO[j].article_id == big_orders[i]){
                        flag = false;
                        SESSION_STOCK_INFO[j].in_stock += big_quantity[i]; // if already in stock update stock
                    }
                }

                if (flag){ // if not in stock add object to array
                    //alert("Not currently in stock!");

                    var drinkIndex= getDrinkIndex(big_orders[i]);

                    is_wine = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("fruktvin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("shiraz") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("pinot") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("rött vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vitt vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("champagne") >= 0);

                    is_beer = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("öl") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("larger") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("pale") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("stout") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("ale") >= 0 );

                    is_spirit = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vodka") >= 0) ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("cognac") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("bourbon") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("cider") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("gin") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("rom") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("sprit") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("blended") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("whiskey") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("whisky") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("sake") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("aquavit") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("chartreuse") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("likör") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("malt") >= 0;

                    var newObject = {
                        "article_id": DB_SYSTEMBOLAGET[drinkIndex].artikelid, // same as Sytembolaget
                        "name": DB_SYSTEMBOLAGET[drinkIndex].namn +  ' ' + DB_SYSTEMBOLAGET[drinkIndex].namn2,
                        "beer": is_beer,
                        "wine": is_wine,
                        "spirit":is_spirit,
                        "year": DB_SYSTEMBOLAGET[drinkIndex].year,
                        "country": DB_SYSTEMBOLAGET[drinkIndex].ursprunglandnamn,
                        "volume_ml": DB_SYSTEMBOLAGET[drinkIndex].volymiml,
                        "alcohol_percentage": DB_SYSTEMBOLAGET[drinkIndex].alkoholhalt,
                        "sale_price": DB_SYSTEMBOLAGET[drinkIndex].prisinklmoms,
                        "in_stock": big_quantity[i],
                        "kosher": (DB_SYSTEMBOLAGET[drinkIndex].kosher == "1"),
                        "ecologic": (DB_SYSTEMBOLAGET[drinkIndex].ekologisk == "1"),
                        "special": false // all special drinks are already on the database!
                    };
                    SESSION_STOCK_INFO.push(newObject);
                }
            }

            sessionStorage.setItem("SESSION_ORDERS",JSON.stringify(SESSIONS_ORDERS));
            sessionStorage.setItem("orders_counter", orders_counter);
            sessionStorage.setItem("SESSION_STOCK_INFO",JSON.stringify(SESSION_STOCK_INFO));

            //resetPage();
            alert(message_placed_order[localStorage.getItem("index")]);
//            alert("Order is placed message goes here!");

        } else { alert(message_empty_order[localStorage.getItem("index")]); }

    });

    $(document).on('click','.delete',function(){

        big_total-= $(this).closest('.order').find('.hiden_price_sum').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,big_orders);

        big_orders.splice(i, 1); // remove both order and quantity (same index)
        big_quantity.splice(i, 1);

        $(this).closest('.order').remove(); // remove from DOM

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    //UNDO REDO BUTTONS
    $(document).on('click','#undo',function() {
        var article_id = $(this).find('span').html();
        undo();
    });

    $(document).on('click','#redo',function() {
        var article_id = $(this).find('span').html();
        redo();
    });
});

function retrieveSystembolaget() {
    $.each(DB_SYSTEMBOLAGET, function(element) { printToDOM(this); });
}

// check in_stock for the given article_id
function checkStock (article_id) {
    var counter = 0;
    $.each(SESSION_STOCK_INFO, function(element) {
        if (this.article_id == article_id) {
            counter = this.in_stock;
        }
    });
    return counter;
}

function printToDOM (element) {

    var classes = '';

    if (checkStock(element.artikelid) < 15) {
        classes = ' class ="textRed"';
    }

    if (checkStock(element.artikelid) == 0) {
        classes = ' class ="textLightGreen"';
    }

    if (checkStock(element.artikelid) >= 15) {
        classes = ' class ="textDarkGreen"';
    }

    $("#drink_database").append(
        '<div class="drink">'+

        '<div class="c1">' +
        '<img src="img/drinks/' + element.artikelid + '.png">' +
        '</div>' +

        '<div class="c2">'+
        '<b class="drink_name">Name:</b> ' + element.namn + ' ' + element.namn2 + '<br>' +
        '<b class="type">Type:</b> ' + element.varugrupp + '<br>' +
        '<b class="price">Price:</b> SEK ' + parseInt(element.prisinklmoms) + ':-<br>' +
        '<b class="country">Country:</b> ' + element.ursprunglandnamn + '<br>' +
        '<b class="volume">Volume:</b> ' + element.volymiml + '<br>' +
        '<b class="alcohol">Alcohol:</b> ' + element.alkoholhalt + '<br>' +
        '<b class="drink_id">ID:</b> '+ element.artikelid +'<br>' +
        '<b class="producer">Producer:</b> '+ element.producent +'<br>' +
        '<b class="delivery">Delivery:</b> '+ element.leverantor +'<br>' +
        '<b class="cost">Cost per Liter:</b> SEK '+ element.prisperliter + '<br>' +
        '</div>' +

        '<div class="c3">' +
        '<br><br><br>' +
        '<h2 '+ classes +'><span class="inStock">Current Stock</span> <br> '+ checkStock(element.artikelid) +'</h2>' +
        '</div>' +

        '<div class="c4">' +
        '<a class="add_button" id="add1"><h4 class="add_one">Add +1</h4></a>' +
        '<a class="add_button" id="add10"><h4 class="add_ten">Add +10</h4></a>' +
        '<a class="add_button" id="add100"><h4 class="add_hundred">Add +100</h4></a>' +
        '<span hidden>' + element.artikelid + '</span>'+
        '<span hidden>' + element.prisinklmoms +'</span>'+
        '</div>'+
        '</div>'
    );
}

function addOrder (article_id, number) {
    i = -1;//$.inArray(article_id, big_orders);
    $.each(big_orders, function(index, element){ if (this == article_id) { i = index; return false;}});

    if (i == -1){ // if drink is not already on the big_orders print to DOM

        $.each(DB_SYSTEMBOLAGET, function(element){
            if (this.artikelid == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order" id="'+ this.artikelid +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="hiden_price_sum">' + (this.prisinklmoms * number) + '</span>:-</h4>' +
                    '<span class="sum" hidden>' + parseInt(this.prisinklmoms) + '</span>' +
                    '<img src="img/drinks/' + this.artikelid + '.png">' +
                    '<h4>' + this.namn + ' ' + this.namn2 + '<span class="quantity textRed"> ( x ' + number + ')</span></h4>' +
                    '</div>'
                )
                big_total += parseInt(this.prisinklmoms * number);
                ;}
        });

        //For specials
        $.each(DB_MIKES, function(element){
            if (this.artikelid == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order" id="'+ this.artikelid +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="hiden_price_sum">' + (this.prisinklmoms * number) + '</span>:-</h4>' +
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

    } else { // if the drink is already in the order, update counter on DOM
        big_quantity[i]+= number;

        big_total += parseInt($("#"+article_id).find('.sum').html()) * number;

        $("#"+article_id).find('.quantity').empty().append(" ( x " + big_quantity[i] + ")");

        update_price = parseInt($("#"+article_id).find('.sum').html()) * big_quantity[i];
        $("#"+article_id).find('.hiden_price_sum').empty().append(update_price);
    }

    updateTotal();
    //FOR TESTING PURPOSES
    //alert (big_orders +' X '+big_quantity)
}

function updateTotal (){
    $('#total').empty().append('Total: SEK ' + Math.max(big_total,0) + ':-')
};

function formatDate (date) {
    /* Returns formatted date as follows: "2018-03-19 21:00:00" */
    var formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
        + date.getDate() +" "+ date.getHours() +":"+ date.getMinutes()+ ":" + date.getSeconds();
    return formatted_date;
}

/*ALL UNDO/REDO FUNCTIONS*/

function undo() {
    currentOrder = done.pop();
    previousOrder = done.pop();

    // change current order and update undo/redo stacks
    setOrderTo(previousOrder);
    done.push(previousOrder);
    undone.push(currentOrder);

    // make sure undo/redo can/cant be clicked
    $("#redo").removeClass("fade");
    if (done.length <= 1) { $("#undo").addClass("fade"); }
}

function redo() {
    undoneOrder = undone.pop();

    // change current order and update undo/redo stacks
    setOrderTo(undoneOrder);
    done.push(undoneOrder);

    // make sure undo/redo can/cant be clicked
    $("#undo").removeClass("fade");
    if (undone.length < 1) { $("#redo").addClass("fade"); }
}


function setOrderTo(newOrder) {  // change the entire order beeing displayed
    // clear current order description
    big_orders = [];
    big_quantity = [];
    big_total = 0;
    $(drink_selection).empty();

    // add the beers from the newOrder
    $.each(newOrder[0], function(i) {addOrder(this, newOrder[1][i]); });
    updateTotal();
}

function pushOrderTo(stack) {  // add an order instance to the done or undone stack
    var currentOrder = [];
    currentOrder[0] = big_orders.slice();
    currentOrder[1] = big_quantity.slice();
    stack.push(currentOrder);
    updateTotal();

    // make sure undo/redo can/cant be clicked
    if (stack == done) { $("#undo").removeClass("fade");
    } else { $("#redo").removeClass("fade"); }
}

function getDrinkIndex (id) { // get the id of a beverage in the DB_SYSTEMBOLAGET
    for (index = 0; index < DB_SYSTEMBOLAGET.length; index++){
        if (parseInt(DB_SYSTEMBOLAGET[index].artikelid) == id){
            return index;
        }
    }
    return -1;
}

function clearUndone() {
    undone = [];
    $("#redo").addClass("fade");
}

/*
function addBackground () {
    $("#drink_database").append('<div class="background_wallpaper"></div>');
}*/

function resetPage() {
    big_orders = [];
    big_quantity = [];
    total = 0;

    $(drink_selection).empty();

    done = new Array([[], [], copyStock()]);
    undone = new Array();
    $("#undo").addClass("fade");
    $("#redo").addClass("fade");

    $("#drink_selection").empty();
    $("#drink_database").empty();
    //addBackground();
    retrieveSystembolaget();
}

// highlight the currently displayed tab 
function highlightTab(new_tab) {
    // reset previous tab display
    previous_tab = '#' + current_tab;
    $(previous_tab).css("background", "");
    $(previous_tab).css("border-color", "#567973");
    // highlight current tab
    $('#' + new_tab).css("background", "#A4B9B6");
    $('#' + new_tab).css("border-color", "#A4B9B6");
    current_tab = new_tab;
}

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
    $(".drink_name").text(drink_name[index]);
    $(".type").text(type[index]);
    $(".price").text(price[index]);
    $(".country").text(country[index]);
    $(".volume").text(volume[index]);
    $(".alcohol").text(alcohol[index]);
    $(".drink_id").text(drink_id[index]);
    $(".producer").text(producer[index]);
    $(".delivery").text(delivery[index]);
    $(".cost").text(cost[index]);
    // <end> Translating the drink's details

    $(".inStock").text(inStock[index]);
    $(".add_one").text(add_one[index]);
    $(".add_ten").text(add_ten[index]);
    $(".add_hundred").text(add_hundred[index]);

    $("#big_total").text(big_total[index]);
    $("#pay").text(pay[index]);
}