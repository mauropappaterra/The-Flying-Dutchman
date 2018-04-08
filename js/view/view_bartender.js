/** The Flying Dutchman
 *  view_bartender.js
 *  Created by 'Pirates of the Caribbean' on 21 of February 2018.
 *  Updated on 23 of February 2018.
 */

/* BARTENDER PAGE TEXTS
*  The indexes and their corresponding languages: [0] English , [1] Swedish, [2] Italian, [3] Spanish, [4] Pirate
*  1. First create an array, follow this template:
*
*  var redundant_name = ["ENGLISH",
*                        "SWEDISH",
*                        "ITALIAN",
*                        "SPANISH",
*                        "PIRATE"]
*
*  Do not skip any indexes! Follow indentation!
*  2. Locate HTML object on the corresponding HTML file -> add id="unique_id"
*  3. Then update translate() method on the corresponding js script page!
*/

var title = ["Bartender View",
            "Bartendersidan",
            "Vista Barista",
            "Vista de barman",
            "Bartender View"];

var orders_q= ["Orders Queue",
                "Beställningar kö",
                "Coda ordini",
                "Pedidos en cola",
                "Orders Queue"];

var cancel_order= ["Cancel Order",
                    "Avbryt beställning",
                    "Annulla Ordine",
                    "Cancelar orden",
                    "Cancel Order"];

var mark_paid= ["Mark as Paid",
                "Markera som betald",
                "Contrassegna come pagato",
                "Marcar como pagado",
                "Mark as Paid"];


// Alert pop-up messages

function message_mark_paid (order_id, index) {
    switch (index){
        case 0:
            return "The order #" + order_id.slice(1) + " has been marked as paid!";
        case 1:
            return "Beställningen #" + order_id.slice(1) + " har markerats som betald!";
        case 2:
            return "La ordine #" + order_id.slice(1) + " si ha stampato como pagata";
        case 3:
            return "La orden #" + order_id.slice(1) + " se ha marcado como paga!";
        case 4:
            return "Th' debt' #" + order_id.slice(1) + " been pai'!";
    }
}

function message_delete_order (order_id, index) {
    switch (index){
        case 0:
            return "The order #" + order_id.slice(1) + " has been deleted!";
        case 1:
            return "Beställningen #" + order_id.slice(1) + " har markerats som betald!";
        case 2:
            return "La ordine #" + order_id.slice(1) + " si ha cancellato";
        case 3:
            return "La orden #" + order_id.slice(1) + " se ha eliminado!";
        case 4:
            return "Th' debt' #" + order_id.slice(1) + " been forgotten!";
    }
}
