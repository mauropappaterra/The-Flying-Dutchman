/** Bar
 *  lan_management.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
var title = ["Management View",
    "Arbetledare Utsikt",
    "Vista Gestione",
    "Vista Administración"]

var logout = ["Log Out",
    "Logga Ut",
    "Esci",
    "Desloguear"]

function translate (index) {
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}