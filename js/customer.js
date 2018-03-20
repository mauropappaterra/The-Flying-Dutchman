/** Bar
 *  customer.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 *  Updated by Hassan Odimi on 23 of February 2018.
 *  Updated on 16 March
 */

/*CUSTOMER PAGE SCRIPTS
* All scripts related to the customer page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

/*LOAD CURRENT SECTION DATA*/
if (localStorage.getItem("SESSION") == null){
    localStorage.setItem("SESSION_TRANSACTIONS",JSON.stringify(DB_TRANSACTIONS));
    localStorage.setItem("transaction_counter",20);
    //alert("This is happening!")
}
var SESSIONS_TRANSACTIONS = JSON.parse(localStorage.getItem("SESSION_TRANSACTIONS"));
var transactions_counter = parseInt(localStorage.getItem("transaction_counter"));
//alert(SESSIONS_TRANSACTIONS.toSource());

var order = [];    // keeps list of drinks ordered
var quantity = []; // keeps list of quantities with matching indexes
var total = 0;     // calculates the total
var current_user = localStorage.getItem('id');

var current_stock = DB_STOCK;  // TODO: store this in localstorage or similair, to keep it consistent between customer/bartender/manager
var current_tab = "all";

/*UNDO-REDO ARRAYS*/
var done = new Array([[], [], copyStock()]); //keeps track of 'done' actions
var undone = new Array(); //keeps track of 'redone' actions

$(document).ready(function() {

    retrieveDB(); // load database on page load

    // filter drinks by category
    $("#all").click(function() {
        $("#drink_database").empty(); // empty current <div> contents
        retrieveDB();
        $(this).addClass('highlight');
    });

    $("#beers").click(function(){
        current_tab = "all";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
            if (this.beer == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $("#wines").click(function(){
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
            if (this.wine == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $("#spirits").click(function(){
        current_tab = "spirit";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
            if (this.spirit == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $("#kosher").click(function(){
        current_tab = "kosher";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
            if (this.kosher == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $("#ecologic").click(function(){
        current_tab = "ecologic";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
            if (this.ecologic == true){
                printToDOM(this);// Call method to print to DOM
            };
        });
    });

    $("#specials").click(function(){
        current_tab = "special";
        $("#drink_database").empty(); // empty current <div> contents
        $.each(current_stock, function(element){
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

//    $("#pay").click(function() {
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

            //alert("NEW ORDER " + newOrder.toSource());

            SESSIONS_TRANSACTIONS.push(newOrder);
            //alert(SESSIONS_TRANSACTIONS.toSource());

            localStorage.setItem("SESSION",JSON.stringify(SESSIONS_TRANSACTIONS));
            localStorage.setItem("transaction_counter", transactions_counter);

            if($("#cre").html() >= total) {
                alert("Your order has been payed, you can pick up your beverages in the VIP fridge");
                $('#cre').html( $('#cre').html() - total);             
            }

            resetPage();
            
        } else {
            alert("You must select your drinks before placing an order!")
        }

    });

    $(document).on('click','.drink',function(){
        var article_id = $(this).find('span').html();
        //alert("You have chosen: " + article_id);
        addOrder(article_id);
        
        updateStock(article_id, -1);  // update current_stock accordingly
        
        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone(); // clear undone stack after a 'proper' action
    });

    $(document).on('click','.delete',function(){

        total-= $(this).closest('.order').find('.loreen').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,order);
        $.each(order, function(index, element) { if (this == article_id) { i = index; return false;}});
        
        updateStock(article_id, quantity[i]); // update current_stock accordingly
        
        order.splice(i, 1); // remove both order and quantity (same index)
        quantity.splice(i, 1);

        $(this).closest('.order').remove(); // remove from DOM       
        
        //Undo-Redo
        pushOrderTo(done);  // update done stack
        clearUndone(); // clear undone stack after a 'proper' action
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

/*Call printToDOM() method on all elements in the DB*/
function retrieveDB () {
    $.each(current_stock, function(element) {
        if (!this.special || (this.special && findByID(current_user, DB_CUSTOMERS).vip)) {
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

        $.each(current_stock, function(element){
            if (this.article_id == article_id){ // retrieve article from the database
                $("#drink_selection").prepend(
                    '<div class="order " id="'+ this.article_id +'">' +
                    '<a class="delete">X</a>' +
                    '<h4 class="price">SEK <span class="loreen">' + parseInt(this.sale_price) + '</span>:-</h4>' +
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
        $("#"+article_id).find('.loreen').empty().append(update_price);
    }
    updateTotal();
    //FOR TESTING PURPOSES
    //alert (order +' X '+quantity)
}

function updateTotal () {
    $('#total').empty().append('Total: SEK ' + Math.max(total,0) + ':-')
}

function checkStock (article_id) {
    var counter = 0;
    $.each(current_stock, function(element){
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
//    current_stock = [];
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
    $.each(current_stock, function(element) {
        if (this.article_id == article_id) {
            new_quantity = this.in_stock + add_quantity;
    //        alert("new: " + new_quantity + ", old: " + this.in_stock + ", dif: " + add_quantity);
            
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
    $.each(current_stock, function(index, element) { stock_copy[index] = this.in_stock; });
    return stock_copy;
}

function setStockTo(newStock) {
    $.each(current_stock, function(index, element) {
        // if (this.name == "Minttu") {alert("Minttu in stock before: " + this.in_stock);}
        this.in_stock = newStock[index];
       // if (this.name == "Minttu") {alert("Minttu in stock after: " + this.in_stock);}
    });
    
}

function rePrintTab() {
    $("#drink_database").empty();
    $.each(current_stock, function(element) {
        if ((current_tab == "all" && ((!this.special || (this.special && findByID(current_user, DB_CUSTOMERS).vip)))) || this[current_tab] == true) {  
            printToDOM(this);                
        };
    }); 
}


// resets the page after a order has been payed, this cannot be undone
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
