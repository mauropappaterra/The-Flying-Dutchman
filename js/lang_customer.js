/** Bar
 *  lan_customer.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
/* CUSTOMER PAGE TEXTS */
var title = ["Customer View",
             "Gästsidan",
             "Vista Avventore",
             "Vista Cliente",
             "Buccaneers"]

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}