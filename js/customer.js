/** The Flying Dutchman
 *  customer.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
 *  Updated on 16 March
 */

/*CUSTOMER PAGE SCRIPTS
* All scripts related to the customer page. Each page has their own scripts in a single js document.
* Method translate() is unique for each individual page and can be found at the bottom of each script.
*/

var order = [];    // keeps list of drinks ordered
var quantity = []; // keeps list of quantities with matching indexes
var total = 0;     // calculates the total
var current_user = localStorage.getItem('id');

var current_tab = "all";

/*UNDO-REDO ARRAYS*/
var done = new Array([[], [], copyStock()]); //keeps track of 'done' actions
var undone = new Array(); //keeps track of 'redone' actions

$(document).ready(function() {
    retrieveDB();         // load database on page load
    highlightTab(".all"); // highlight the 'all'-tab
    
    $('body').css("height", $(window).height() - 16);  // set height of the body relative to the screen
    
    // filter drinks by category
    $(".all").click(function() {
        highlightTab("*#all");
        current_tab = "all";
        $("#drink_database").empty(); // empty current <div> contents
        retrieveDB();
     //   $(this).addClass('highlight');
    });

    $(".beers").click(function(){
        highlightTab("*#beers");
        current_tab = "beer";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.beer == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(".wines").click(function(){
        highlightTab("*#wines");
        current_tab = "wine";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.wine == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(".spirits").click(function(){
        highlightTab("*#spirits");
        current_tab = "spirit";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.spirit == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(".kosher").click(function(){
        highlightTab("*#kosher");
        current_tab = "kosher";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.kosher == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(".ecologic").click(function(){
        highlightTab("*#ecologic");
        current_tab = "ecologic";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.ecologic == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(".specials").click(function(){
        highlightTab("*#specials");
        current_tab = "special";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(SESSION_STOCK_INFO, function(element){
            if (this.special == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $(document).on('click','#undo',function() {
        var article_id = $(this).find('span').html();
        undo();
    });
    $(document).on('click','#redo',function() {
        var article_id = $(this).find('span').html();
        redo();
    });

    $(document).on('click','#pay',function() {
        
        if (order.length > 0) {
            transactions_counter ++;
            var newOrder = {
                "transaction_id": "T" + ((transactions_counter + 100000).toString()).slice(1),
                "bartender_id": null,
                "customer_id": current_user,
                "order":order,
                "quantities":quantity,
                "amount": total,
                "timestamp": formatDate(new Date($.now())),
                "paid":false
            };

            // 'pay' for order immediatly if possible
            if($("#cre").html() >= total) {
                $('#cre').html( $('#cre').html() - total);
                newOrder.paid = true;  // mark transaction as paid
                newOrder.bartender_id = "VIP Self-Service";
                alert(message_payed_order[localStorage.getItem("index")]);
            } else { alert(message_placed_order[localStorage.getItem("index")]); }

            SESSIONS_TRANSACTIONS.push(newOrder);

            localStorage.setItem("SESSION",JSON.stringify(SESSIONS_TRANSACTIONS));
            localStorage.setItem("NEWORDER", 1);

           /*Update user info for the session*/
            for (i = 0; i < (SESSION_USER_INFO.length - 1); i++) {

                if (SESSION_USER_INFO[i].customer_id == current_user){
                    SESSION_USER_INFO[i].credit -= total;
                    //alert(SESSION_USER_INFO[i].toSource())
                    break;
                }
            };

            /* Save all changes to session storage*/
            sessionStorage.setItem("SESSION_TRANSACTIONS", JSON.stringify(SESSIONS_TRANSACTIONS));
            sessionStorage.setItem("SESSION_USER_INFO",JSON.stringify(SESSION_USER_INFO));
            sessionStorage.setItem("SESSION_STOCK_INFO",JSON.stringify(SESSION_STOCK_INFO));
            sessionStorage.setItem("transaction_counter", transactions_counter);

            // Clear all fields
            resetPage();

        } else { alert(message_empty_order[localStorage.getItem("index")]); }
    });

    $(document).on('click','.drink',function(){
        var article_id = $(this).find('span').html();
        addOrder(article_id);
        
        updateStock(article_id, -1);  // update SESSION_STOCK_INFO accordingly
        
        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $(document).on('click','.delete',function(){

        total-= $(this).closest('.order').find('.hidden_price').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,order);
        $.each(order, function(index, element) { if (this == article_id) { i = index; return false;}});
        
        updateStock(article_id, quantity[i]); // update SESSION_STOCK_INFO accordingly
        
        order.splice(i, 1); // remove both order and quantity (same index)
        quantity.splice(i, 1);

        $(this).closest('.order').remove(); // remove from DOM       
        
        //Undo-Redo
        pushOrderTo(done);  // update done stack
        clearUndone();      // clear undone stack after a 'proper' action
    });
    
    // hover function for small screen
    $('.pay_button').hover(function() { $('.selection').css("display", "block")},
                           function() { $('.selection').css("display", "none") }
                          );
    
    // make sure the selection is displayed in bigscreen mode
    $(window).resize(function(){
        $('body').css("height", $(window).height() - 16);   // adjust the height accordingly
        if ($(window).width() > 768) { $('.selection').css("display", "block") }
        else { $('.selection').css("display", "none") }
    });
    
});

/*Call printToDOM() method on all elements in the DB*/
function retrieveDB () {
    $.each(SESSION_STOCK_INFO, function(element) {
        if (!this.special || (this.special && findByID(current_user, SESSION_USER_INFO).vip)) {
            
            printToDOM(this); // Call method to print to DOM
        }
    });
}

/*Prints content of DB to DOM*/
function printToDOM (element) {

    var stock_message = "";
    var classes = "";

    if (checkStock(element.article_id) < 10) {  // low items
        stock_message = "<br> <b class='textRed'>LOW STOCK!</b>";
    }

    if (checkStock(element.article_id) < 1) {  // out of stock
        stock_message = "<br><b class='textRed alert'>OUT OF STOCK</b>";
        classes = " fade";
    }

    $("#drink_database").append(
        '<div class="drink' + classes + '">' +
        '<h4>' + element.name + '</h4>' +
        '<img  src="img/drinks/' + element.article_id + '.png">' +
        '<h4>SEK ' + parseInt(element.sale_price) + ':- ' +  stock_message +'</h4>' +
        '<span hidden>' + element.article_id + '</span>' +
        '</div>');
}

function addOrder (article_id) {
    i = -1;//$.inArray(article_id,order);
    $.each(order, function(index, element) { if (this == article_id) { i = index; return false;}});
    if (i == -1) { // if drink is not already on the order print to DOM

        $.each(SESSION_STOCK_INFO, function(element){
            if (this.article_id == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order " id="'+ this.article_id +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="hidden_price">' + parseInt(this.sale_price) + '</span>:-</h4>' +
                    '<span class="sum" hidden>' + this.sale_price + '</span>' +
                    '<img src="img/drinks/' + this.article_id + '.png">' +
                    '<h4>' + this.name + '<span class="quantity textRed"></span></h4>' +
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
        $("#"+article_id).find('.hidden_price').empty().append(update_price);
    }
    updateTotal();
    //FOR TESTING PURPOSES
    //alert (order +' X '+quantity)
}

function updateTotal () {
    $('#total').empty().append('Total: SEK ' + Math.max(total,0) + ':-')
}


// return the number of in_stock for given article_id
function checkStock (article_id) {
    var counter = 0;
    $.each(SESSION_STOCK_INFO, function(element){
        if (this.article_id == article_id){
            counter = this.in_stock;
        }
    });
    return counter;
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
    
    rePrintTab();
}

function redo() {
    undoneOrder = undone.pop();

    // change current order and update undo/redo stacks
    setOrderTo(undoneOrder);
    done.push(undoneOrder);

    // make sure undo/redo can/cant be clicked
    $("#undo").removeClass("fade");
    if (undone.length < 1) { $("#redo").addClass("fade"); }
    
    rePrintTab();
}

function setOrderTo(newOrder) {  // change the entire order beeing displayed
    // clear current order description
    order = [];
    quantity = [];
    total = 0;
    setStockTo(newOrder[2]);    
    $(drink_selection).empty();

    // add the beers from the newOrder
    $.each(newOrder[0], function(i) {
        var q = newOrder[1][i];
        while(q > 0){
            addOrder(this);
            q--;
        }
    });
    updateTotal();
}

function pushOrderTo(stack) {  // add an order instance to the done or undone stack
    var currentOrder = [];
    currentOrder[0] = order.slice();
    currentOrder[1] = quantity.slice();
    currentOrder[2] = copyStock();
    
    stack.push(currentOrder);
    updateTotal();
    
    // make sure undo/redo can/cant be clicked
    if (stack == done) { $("#undo").removeClass("fade");
    } else { $("#redo").removeClass("fade"); }
} 

function clearUndone() {
    undone = [];
    $("#redo").addClass("fade");
}

/* updatestock */
function updateStock(article_id, add_quantity) {
    var rePrint = false;
    $.each(SESSION_STOCK_INFO, function(element) {
        if (this.article_id == article_id) {  // found the relevant aticle
            new_quantity = this.in_stock + add_quantity;

            // check if the beverages will need to be reprinted
            if ((this.in_stock < 10) != (new_quantity < 10) || (new_quantity < 1 || this.in_stock < 1)) { rePrint = true; } 
            this.in_stock = new_quantity;
            return false;
        } 
    });
    // reprint stock if a beverage has changed between out of stock/ low stock/ normal
    if (rePrint == true) { rePrintTab(); }
}

// make a list of the current in_stock values
function copyStock() {  
    stock_copy = [];
    $.each(SESSION_STOCK_INFO, function(index, element) { stock_copy[index] = this.in_stock; });
    return stock_copy;
}

function setStockTo(newStock) {  // set the current stock to a new given stock
    $.each(SESSION_STOCK_INFO, function(index, element) {
        this.in_stock = newStock[index];
    });
}

function rePrintTab() {  // reprint the currently displayed beverage tab
    $("#drink_database").empty();
    $.each(SESSION_STOCK_INFO, function(element) {
        if ((current_tab == "all" && ((!this.special || (this.special && findByID(current_user, SESSION_USER_INFO).vip)))) || this[current_tab] == true) {
            printToDOM(this);                
        };
    }); 
}

// resets the page after an order has been payed, this cannot be undone
function resetPage() {
    order = [];    
    quantity = [];
    total = 0;
    $(drink_selection).empty();
    done = new Array([[], [], copyStock()]);
    undone = new Array();
    $("#undo").addClass("fade");
    $("#redo").addClass("fade");
    updateTotal();
}

// highlight the currently displayed tab 
function highlightTab(new_tab) {
    // reset previous tab display
    previous_tab = '*#' + current_tab;
    $(previous_tab).css("background", "");
    $(previous_tab).css("border-color", "#567973");
    $(previous_tab + 's').css("background", "");   // ugly solution...
    $(previous_tab + 's').css("border-color", "#567973"); 
    // highlight current tab
    $(new_tab).css("background", "#A4B9B6");   
    $(new_tab).css("border-color", "#A4B9B6");
}

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("*#logout").text(logout[index]);
    $("#customer").text(customer[index]);
    $("#credit").text(credit[index]);
    $("#drink_list").text(drink_list[index]);
    $("*#all").text(all[index]);    
    $("*#beers").text(beers[index]);
    $("*#wines").text(wines[index]);
    $("*#spirits").text(spirits[index]);
    $("*#kosher").text(kosher[index]);
    $("*#ecologic").text(ecologic[index]);
    $("*#specials").text(specials[index]);
    $("#your_order").text(your_order[index]);
    $("#total").text(total[index]);
    $("*#pay").text(pl_order[index]);
    $("#hello").text(hello[index]);		
    $("#your_credit").text(your_credit[index]);		
}