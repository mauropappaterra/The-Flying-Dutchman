/** Bar
 *  lan_customer.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
var title = ["Customer View",
    "Gäst Utsikt",
    "Vista Avventore",
    "Vista Cliente"]

var logout = ["Log Out",
    "Logga Ut",
    "Esci",
    "Desloguear"]

function translate (index) {
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}