/** Bar
 *  lan_bartender.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
/* BARTENDER PAGE TEXTS */
var title = ["Bartender View",
             "Bartendersidan",
             "Vista Barista",
             "Vista Barista",
             "Powder Monkeys"]

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}