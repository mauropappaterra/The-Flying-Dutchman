/** Bar
 *  lan_management.js
 *  Created by Mauro J. Pappaterra on 11 of February 2018.
 */
/* MANAGEMENT PAGE TEXTS */
var title = ["Management View",
    "Arbetledarsidan",
    "Vista Gestione",
    "Vista Administración",
    "Kin' o' th' Pirates"]

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#title").text(title[index]);
    $("#logout").text(logout[index]);
}