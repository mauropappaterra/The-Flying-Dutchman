/** Bar
 *  multilanguage.js
 *  Created by Mauro J. Pappaterra on 09 of February 2018.
 */

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