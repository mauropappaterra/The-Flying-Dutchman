/** Bar
 *  script.js
 *  Created by Mauro J. Pappaterra on 09 of February 2018.
 */
/* ALL COMMON PAGE TEXTS */
var page_title = ["The Flying Dutchman",
    "Flygande Holländaren",
    "L'Olandese Volante",
    "El Holandés Volador"]

var logout = ["Log Out",
    "Logga Ut",
    "Esci",
    "Desloguear"]

/* LANGUAGE SELECTION CONTROL */
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