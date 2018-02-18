/** Bar
 *  script.js
 *  Created by Mauro J. Pappaterra on 09 of February 2018.
 */
/* ALL COMMON PAGE TEXTS */
var page_title = ["The Flying Dutchman",
    "Flygande Holländaren",
    "L'Olandese Volante",
    "El Holandés Volador",
    "Th' Flyin' Dutchman"]

var logout = ["Log Out",
    "Logga Ut",
    "Esci",
    "Desloguear",
    "Scuttle"]

/* LANGUAGE SELECTION CONTROL*/

window.onload = translate(localStorage.getItem("index"));

$(document).ready(function () {

    $("#eng").click(function(){
        translate(0)
        localStorage.setItem("index",0);
    })

    $("#sve").click(function(){
        translate(1)
        localStorage.setItem("index",1);
    })

    $("#ita").click(function(){
        translate(2)
        localStorage.setItem("index",2);
    })

    $("#esp").click(function(){
        translate(3)
        localStorage.setItem("index",3);
    })

    $("#pirate").click(function(){
        translate(4)
        localStorage.setItem("index",4);
    })
})