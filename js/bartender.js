/** Bar
 *  bartender.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 *  Updated by Hassan Odimi on 23 of February 2018.
 */

/*BARTENDER PAGE SCRIPTS
* All scripts related to the bartender page. Each page has their own scripts in a single js document.
* Methods translate() and responsive() are unique for each individual page.
*/

if (localStorage.getItem("SESSION") == null){
    localStorage.setItem("SESSION",JSON.stringify(DB_TRANSACTIONS));
    //alert("This is happening!")
}

var SESSIONS_TRANSACTIONS = JSON.parse(localStorage.getItem("SESSION"));
//alert(SESSIONS_TRANSACTIONS.toSource());

var current_bartender = localStorage.getItem('id');


$(document).ready(function() {

    retrieveOrders(); // retrieve all orders from the database

    // filter drinks by category
    $("#all").click(function(){
        $("#all_orders").empty();
        retrieveOrders();
    });

    $("#unpaid").click(function(){
        $("#all_orders").empty();
        $.each(SESSIONS_TRANSACTIONS, function(element){
            if (this.paid != true){ // filter only unpaid
                printToDOM(this);
            };
        });
    });

    $("#paid").click(function(){
        $("#all_orders").empty();
        $.each(SESSIONS_TRANSACTIONS, function(element){
            if (this.paid == true){ // filter only unpaid
                printToDOM(this);
            };
        });
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
        var the_transaction = $(this).find(".hiddenid").html();
        alert("Ready to delete " + the_transaction)
    });

    $(document).on('click','.pay',function() {
        var the_transaction = $(this).closest('.hiddenid').html();
        alert("Ready to mark as paid " + the_transaction)
    });

});

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
    $("#login_as").text(login_as[index]);
    $("#orders_q").text(orders_q[index]);
    $("#cancel_order").text(cancel_order[index]);
    $("#mark_paid").text(mark_paid[index]);
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
        message = "<b class='textRed'>::: ORDER PAID ::: </b>  |    <b>Bartender:</b> " + getBartenderName(current_bartender) + "(" + current_bartender + ")";
    }
    return message;
}

function printToDOM (element) {
    var i = $.inArray(element,SESSIONS_TRANSACTIONS);

    var content = '<button class="accordion"><b>ORDER #'+ element.transaction_id.slice(1) +'<span hidden class="hiddenid">' + element.transaction_id + '</span> |    Customer:</b> '+
        getCustomerName(element.customer_id) +' ('+ element.customer_id +')' + '| <b>Date: </b>'+ element.timestamp + ' | <b>Total:</b> SEK '+ element.amount +':-  '
        + paidStamp(element.paid, element) + '</button>' +
        '<div class="panel">' +
        '<div class="order">' +

        printOrder(element.order,element.quantities) + // Contents of the order printed here

        '</div>';

    if (element.paid == false){ // this part is only printed to unpaid transactions
        content += '<div class="checkout">' +
            '<a href=""><div class="small_button red delete" id="cancel_order">Cancel Order</div></a>' +
            '<a href=""><div class="small_button blue pay" id="mark_paid">Mark as Paid</div></a>' +
            '<a href=""><div class="small_button light_orange total" id="total"><b>TOTAL:</b> SEK '+ element.amount +':-</div></a>' +
            '</div>';
    }

    content += '</div>';

    $("#all_orders").prepend(content);
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
