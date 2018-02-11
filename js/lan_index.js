/** Bar
 *  language.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
var welcome = ["Welcome to The Flying Dutchman!",
               "Välkommen til Flygande Holländaren!",
               "Benvenuti al'Olandese Volante!",
               "Bienvenidos al Holandés Volador!"]

var customer = ["Customer login",
                "Logga in som gäst",
                "Accesso avventore",
                "Logueo cliente"]

var bartender = ["Bartender login",
                "Logga in som bartender",
                "Accesso barista",
                "Logueo barista"]

var management = ["Management login",
                  "Logga in som arbetledare",
                  "Accesso gestione",
                  "Logueo administración"]

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
    $("#welcome").text(welcome[index]);
    $("#customer").text(customer[index]);
    $("#bartender").text(bartender[index]);
    $("#management").text(management[index]);
}


