/** Bar
 *  lan_bartender.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
var title = ["Bartender View",
             "Bartendersidan",
             "Vista Barista",
             "Vista Barista"]

var logout = ["Log Out",
    "Logga Ut",
    "Esci",
    "Desloguear"]

function translate (index) {
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}