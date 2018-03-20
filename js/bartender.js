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
    addBackground();

    // filter drinks by category
    $("#all").click(function(){
        $("#all_orders").empty();
        retrieveOrders();
        addBackground();
    });

    $("#unpaid").click(function(){
        $("#all_orders").empty();
        $.each(SESSIONS_TRANSACTIONS, function(element){
            if (this.paid != true){ // filter only unpaid
                printToDOM(this);
            };
        });
        addBackground();
    });

    $("#paid").click(function(){
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

        //alert ("Index found " + i);
        SESSIONS_TRANSACTIONS.splice(i, 1);
        //alert(SESSIONS_TRANSACTIONS.toSource());

        // Remove from DOM
        $(this).parent().parent().parent().remove();
        $('#' + find_transaction_id).remove();
    });

    $(document).on('click','.pay',function() {
        var find_transaction_id = $(this).attr('id');
        //alert("Ready to mark as paid " + find_transaction_id);

        for (i = SESSIONS_TRANSACTIONS.length - 1; i > -1; i--) {
            //alert(SESSIONS_TRANSACTIONS[i].transaction_id + ' vs ' + find_transaction_id);
            if (SESSIONS_TRANSACTIONS[i].transaction_id == find_transaction_id) {
                break;
            }
        }

        //alert ("Index found " + i);
        //alert(SESSIONS_TRANSACTIONS[i].toSource())
        SESSIONS_TRANSACTIONS[i].paid = true;
        SESSIONS_TRANSACTIONS[i].bartender_id = current_bartender;
        //alert(SESSIONS_TRANSACTIONS[i].toSource())

        // Update DOM
        retrieveOrders(); // retrieve all orders from the database
        addBackground();
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
