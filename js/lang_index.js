/** Bar
 *  language.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
/* INDEX PAGE TEXTS */
var welcome = ["Welcome to The Flying Dutchman!",
               "Välkommen til Flygande Holländaren!",
               "Benvenuti al'Olandese Volante!",
               "Bienvenidos al Holandés Volador!",
               "Ahoy t' th' Flyin' Dutchman!"]

var customer = ["Customer login",
                "Logga in som gäst",
                "Accesso avventore",
                "Acceso cliente",
                "Ahoy Buccaneers"]

var bartender = ["Bartender login",
                "Logga in som bartender",
                "Accesso barista",
                "Acceso barista",
                "Ahoy Powder Monkeys"]

var management = ["Management login",
                  "Logga in som arbetledare",
                  "Accesso gestione",
                  "Acceso administración",
                  "Kin' o' th' Pirates"]

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#welcome").text(welcome[index]);
    $("#customer").text(customer[index]);
    $("#bartender").text(bartender[index]);
    $("#management").text(management[index]);
}