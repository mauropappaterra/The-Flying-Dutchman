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

$(document).ready(function () {

    $("#eng").click(function(){
        translate(0)
    })

    $("#sve").click(function(){
        translate(1)
    })

    $("#ita").click(function(){
        translate(2)
    })

    $("#esp").click(function(){
        translate(3)
    })
})

function translate (index) {
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}