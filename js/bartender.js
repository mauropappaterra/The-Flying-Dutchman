/** The Flying Dutchman
 *  bartender.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
*/

/*BARTENDER PAGE SCRIPTS
* All scripts related to the bartender page. Each page has their own scripts in a single js document.
* Method translate() is unique for each individual page and can be found at the bottom of each script.
*/

var current_bartender = localStorage.getItem('id');
var current_tab = "all";

/*UNDO-REDO ARRAYS*/
var done = new Array(); // keeps track of 'done' actions
var undone = new Array();                    // keeps track of 'redone' actions

$(document).ready(function() {
    retrieveOrders(); // retrieve all orders from the database
    addBackground();
     highlightTab("*#all"); // highlight the 'all'-tab

    pushStateTo(done);  // push initial state to 'done' stack
    $("#redo").addClass("fade");
    $("#undo").addClass("fade");
    
    // check if a new order has been submitted
    t1 = window.setInterval(function() {checkOnOrders()}, 2000);
    function checkOnOrders() {
        if (localStorage.getItem("NEWORDER") != 0) {
            $("#retrieve_orders").css("background-color","red");                  
            localStorage.setItem("NEWORDER", 0);
        }          
    }

    // display new orders on click 
    $("#retrieve_orders").click(function() {
        if (localStorage.getItem("NEWORDER") == 1) {
            $("#retrieve_orders").css("background","");
            updateTransactions();
            clearUndone();
            clearDone();      }
    });
    
    // filter orders by category
    $("#all").click(function() {
        highlightTab("*#all");
        current_tab = "all";
        $("#all_orders").empty();
        retrieveOrders();
        addBackground();
    });

    $("#unpaid").click(function() {
        highlightTab("*#unpaid");
        current_tab = "unpaid";
        $("#all_orders").empty();
        $.each(SESSIONS_TRANSACTIONS, function(element){
            if (this.paid != true){ // filter only unpaid
                printToDOM(this);
            };
        });
        addBackground();
    });

    $("#paid").click(function() {
        highlightTab("*#paid");
        current_tab = "paid";
        $("#all_orders").empty();
        $.each(SESSIONS_TRANSACTIONS, function(element){
            if (this.paid == true){ // filter only unpaid
                printToDOM(this);
            };
        });
        addBackground();
    });

    /* Accordion Script*/
    $(document).on('click','body',function(){
        var acc = $(".accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                this.classList.toggle("zoom_out")
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    });

    $(document).on('click','.delete',function() {
        var find_transaction_id = $(this).attr('id');
        //alert("Ready to delete " + find_transaction_id);
        //alert(SESSIONS_TRANSACTIONS.toSource());

        for (i = (SESSIONS_TRANSACTIONS.length - 1); i > -1; i--) {
            //alert(SESSIONS_TRANSACTIONS[i].transaction_id + ' vs ' + find_transaction_id);
            if (SESSIONS_TRANSACTIONS[i].transaction_id == find_transaction_id) {
                break;
            }
        }

        /* If an order is canceled, the drinks should are put back in the stock and available
        for other customers to purchase them*/
        for (j = 0 ; j < (SESSIONS_TRANSACTIONS[i].order.length); j++){
            for (m = 0 ; m < (SESSION_STOCK_INFO.length); m++){
                //alert("j: " + j + " m: " + m);
               //alert (SESSIONS_TRANSACTIONS[i].order[j] + ' vs ' + SESSION_STOCK_INFO[m].article_id);
                if (SESSION_STOCK_INFO[m].article_id == SESSIONS_TRANSACTIONS[i].order[j]){
                    //alert("Item found, ready to retrieve!")
                    //alert(SESSION_STOCK_INFO[j].toSource())
                    SESSION_STOCK_INFO[m].in_stock += SESSIONS_TRANSACTIONS[i].quantities[j]; // return to stock
                    //alert(SESSION_STOCK_INFO[j].toSource())
                }
            }
        }
  
        SESSIONS_TRANSACTIONS.splice(i, 1);
        //alert(SESSIONS_TRANSACTIONS.toSource());

        /* Save changes to session storage */
        sessionStorage.setItem("SESSION_TRANSACTIONS",JSON.stringify(SESSIONS_TRANSACTIONS));
        sessionStorage.setItem("SESSION_STOCK_INFO",JSON.stringify(SESSION_STOCK_INFO));


        /* Remove from DOM */
        $(this).parent().parent().parent().remove();
        $('#' + find_transaction_id).remove();
        
        /* Undo-Redo */
        pushStateTo(done);  // update done stack
        clearUndone();      // clear undone stack after a 'proper' action

        /* Alert user*/
        alert(message_delete_order(find_transaction_id,parseInt(localStorage.getItem('index'))))
    });

    $(document).on('click','.pay',function() {
        var find_transaction_id = $(this).attr('id');     
        for (i = SESSIONS_TRANSACTIONS.length - 1; i > -1; i--) {
            //alert(SESSIONS_TRANSACTIONS[i].transaction_id + ' vs ' + find_transaction_id);
            if (SESSIONS_TRANSACTIONS[i].transaction_id == find_transaction_id) {
                break;
            }
        }
   
        //alert(SESSIONS_TRANSACTIONS[i].toSource())
        SESSIONS_TRANSACTIONS[i].paid = true;
        SESSIONS_TRANSACTIONS[i].bartender_id = current_bartender;
        //alert(SESSIONS_TRANSACTIONS[i].toSource())

        /* Save changes to session storage */
        sessionStorage.setItem("SESSION_TRANSACTIONS",JSON.stringify(SESSIONS_TRANSACTIONS));

        /* Update DOM */
        retrieveOrders(); // retrieve all orders from the database
        addBackground();
        current_tab = "all";
        
        /* Undo-Redo */
        pushStateTo(done);  // update done stack
        clearUndone();      // clear undone stack after a 'proper' action

        /* Alert user*/
        alert(message_mark_paid(find_transaction_id,parseInt(localStorage.getItem('index'))))
    });
    
    $(document).on('click','#undo',function() {
        var article_id = $(this).find('span').html();
        undo();
    });
    
    $(document).on('click','#redo',function() {
        var article_id = $(this).find('span').html();
        redo();
    });
    
});

function printToDOM (element) {
    var i = $.inArray(element,SESSIONS_TRANSACTIONS);

    var content = '<button class="accordion" id="'+ element.transaction_id +'"><b>ORDER #'+ element.transaction_id.slice(1) + '|    Customer:</b> '+
        getCustomerName(element.customer_id) +' ('+ element.customer_id +')' + '| <b>Date: </b>'+ element.timestamp + ' | <b>Total:</b> SEK '+ element.amount +':-  '
        + paidStamp(element.paid, element) + '</button>' +
        '<div class="panel">' +
        '<div class="order">' +

        printOrder(element.order,element.quantities) + // Contents of the order printed here

        '</div>';

    if (element.paid == false){ // this part is only printed to unpaid transactions
        content += '<div class="checkout">' +
            '<a><div class="small_button red delete cancel_order" id="' + element.transaction_id + '" >Cancel Order</div></a>' +
            '<a><div class="small_button light_green pay mark_paid" id="' + element.transaction_id + '" >Mark as Paid</div></a>' +
            '<a><div class="small_button total" id="total"><b>TOTAL:</b> SEK '+ element.amount +':-</div></a>' +
            '</div>';
    } else {
        content += '<div class="paidfor">' +
            '<h1><b>TOTAL PAID:</b> SEK '+ element.amount + ':-</h1>' +
            '</div>';
    }

    content += '</div>';

    $("#all_orders").prepend(content);
}

function retrieveOrders() {
    $.each(SESSIONS_TRANSACTIONS, function(element){
        printToDOM(this);
    });
}

function getBartenderName(bartender_id){
    var fullname = '';
    $.each(DB_BARTENDERS, function (element){
        if (this.bartender_id == bartender_id){
            fullname = this.first_name + ' ' + this.last_name;
        }
    });
    return fullname;
}

function getCustomerName(customer_id){
    var fullname = '';
    $.each(DB_CUSTOMERS, function (element){
        if (this.customer_id == customer_id){
            fullname = this.first_name + ' ' + this.last_name;
        }
    });
    return fullname;
}

function getBrevageName(brevage_id){
    var name = '';
    $.each(DB_STOCK, function (element){
        if (this.article_id == brevage_id){
            name = this.name;
        }
    });
    return name;
}

function getBrevagePrice(brevage_id){
    var price = 0;
    $.each(DB_STOCK, function (element){
        if (this.article_id == brevage_id){
            price = this.sale_price;
        }
    });
    return parseInt(price);
}

function paidStamp (boolean, element){
    var message ="";
    if(boolean){
        message = "<b class='textRed'>::: ORDER PAID ::: </b>  |    <b>Bartender:</b> " + getBartenderName(element.bartender_id) + " (" + element.bartender_id + ")";
    }
    return message;
}

function printOrder(order_array,quantities_array){
    //alert(order_array);
    var content = '';

    $.each(order_array, function (index,value){
        content += '<div class="order_details">' +
            '<h4>'+ getBrevageName(value) +' <span class="textRed">(x'+ quantities_array[index] +')</span></h4>' +
            '<img src="img/drinks/'+ value +'.png">' +
            '<h4 class="price">SEK '+ (getBrevagePrice(value) * quantities_array[index]) +':-</h4>' +
            '</div>';
    });
    return content;
}

function addBackground (){
    $("#all_orders").append('<div class="background_wallpaper"></div>');
}

/*ALL UNDO/REDO FUNCTIONS*/

function undo() {
    currentState = done.pop();
    previousState = done.pop();

    // change current state and update undo/redo stacks
    setStateTo(previousState);
    done.push(previousState);
    undone.push(currentState);

    // make sure undo/redo can/cant be clicked
    $("#redo").removeClass("fade");
    if (done.length <= 1) { $("#undo").addClass("fade"); }
  
    // reprint state
    rePrintTab();
}

function redo() {
    undoneState = undone.pop();

    // change current state and update undo/redo stacks
    setStateTo(undoneState);
    done.push(undoneState);

    // make sure undo/redo can/cant be clicked
    $("#undo").removeClass("fade");
    if (undone.length < 1) { $("#redo").addClass("fade"); }
    
    // reprint state
    rePrintTab();
}

function setStateTo(newState) {  // change the entire state beeing displayed
    // clear current state description
    SESSIONS_TRANSACTIONS = [];

    $("#all_orders").empty();

    // add the orders from the the newState
    $.each(newState, function(index, element) {        
        SESSIONS_TRANSACTIONS[index] = jQuery.extend(true, {}, this);      
    });
}

function pushStateTo(stack) {  // add an order instance to the done or undone stack
    var currentState = [];

    // clone every order in the session
    $.each(SESSIONS_TRANSACTIONS, function(index, element) {
        currentState[index] = jQuery.extend(true, {}, this); 
    });
    stack.push(currentState);
 
    // make sure undo/redo can/cant be clicked
    if (stack == done) { $("#undo").removeClass("fade");
    } else { $("#redo").removeClass("fade"); }
} 

function clearUndone() {
    undone = [];
    $("#redo").addClass("fade");
}

function rePrintTab() {   // reprint the currently displayed tab
    $("#all_drinks").empty();
    $.each(SESSIONS_TRANSACTIONS, function(element) {
        if (current_tab == "all" || ( current_tab == "paid" && this.paid == true) || (current_tab == "unpaid" && this.paid == false)) {    
            printToDOM(this);                
        };
    });
    addBackground();
}

// highlight the currently displayed tab 
function highlightTab(new_tab) {
    // reset previous tab display
    previous_tab = '*#' + current_tab;
    $(previous_tab).css("background", "");
    $(previous_tab).css("border-color", "#0C2924");
    $(previous_tab + 's').css("background", "");   // ugly solution...
    $(previous_tab + 's').css("border-color", "#0C2924"); 
    // highlight current tab
    $(new_tab).css("background", "#567973");
    $(new_tab).css("border-color", "#567973");
}

function updateTransactions() { // update the current transactions, local storage
    SESSIONS_TRANSACTIONS = JSON.parse(localStorage.getItem("SESSION"));  
    rePrintTab();
}

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
    $("#login_as").text(login_as[index]);
    $("#orders_q").text(orders_q[index]);
    $("#cancel_order").text(cancel_order[index]);
    $("#mark_paid").text(mark_paid[index]);
}
