/** The Flying Dutchman
 *  view_management.js
 *  Created by 'Pirates of the Caribbean' on 21 of February 2018.
 */

/* MANAGEMENT PAGE TEXTS
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

var title = ["Drink Delivery Database System",
             "Drink Delivery Database System",
             "Bere il sistema di database di consegna",
             "Sistema de base de datos de entrega",
             "Drink Delivery Database System"]

var stock_order = ["Stock Order",
                   "Lagerbeställning",
                   "Ordine di riserva",
                   "Orden de Stock",
                    "Stock Order"]

var login_as = ["Log in as:",
    "Logga in som:",
    "Accedi come:",
    "Iniciar sesión como:",
    "Log in as:"]

 var drinks_list = ["Full Drinks List",
    "Full drinklista",
    "Lista delle bevande complete",
    "Lista completa de bebidas",
    "Full Drinks List"]
    
var check_stock = ["Check Bar Stock",
    "Kontrollera Bar Lager",
    "Controlla il magazzino della barra",
    "Compruebe la acción de la barra",
    "Check Bar Stock"]

var shortage_alert = ["Shortage Alert (!)",
    "Bristvarning (!)",
    "Avviso di carenza (!)",
    "Alerta de escasez (!)",
    "Shortage Alert (!)"]

// The drink's details.
var drink_name = ["Name:",
    "Namn:",
    "Nome:",
    "Nombre:",
    "Name:"]

var type = ["Type:",
    "Typ:",
    "Tipo:",
    "El tipo:",
    "Type:"]

var price= ["Price:",
"Pris:",
"Prezzo:",
"Precio:",
"Price:"]

var country= ["Country:",
"Land:",
"Nazione:",
"País:",
"Country:"]

var volume= ["Volume:",
"Volym:",
"Volume:",
"Volumen:",
"Volume:"]

var alcohol=["Alcohol:",
"Alkohol:",
"Alcol:",
"Alcohol:",
"Alcohol:"]

var drink_id=["ID:",
"ID:",
"ID:",
"ID:",
"ID:"]

var producer=["Producer:",
"Producent:",
"Produttore:",
"Productor:",
"Producer:"]

var delivery=["Delivery:",
"Leverans:",
"La Consegna:",
"La Entrega:",
"Delivery:"]

var cost=["Cost per Liter:",
"Kostnad per liter:",
"Costo per litro:",
"Costo por litro:",
"Cost per Liter:"]
// <END> The drink's details.

var inStock=["In Stock:",
"I lager:",
"Disponibile:",
"En stock:",
"In Stock:"]

var add_one=["Add +1",
"Tillägga +1",
"Aggiungere +1",
"Agregar +1",
"Add +1"]

var add_ten=["Add +10",
"Tillägga +10",
"Aggiungere +10",
"Agregar +10",
"Add+10"]

var add_hundred=["Add +100",
"Tillägga +100",
"Aggiungere +100",
"Agregar +100",
"Add +100"]

var total= ["TOTAL:",
"TOTAL:",
"TOTALE:",
"TOTAL:",
"TOTAL:"
]

var pay= ["Place Stock Order",
"Placera lagerorder",
"Posizionare l'ordine",
"Realizar pedido",
"Place Stock Order"
]
var empty_order = ["You must select your drinks before placing an order!",
                   "Du måste välja dina drycker innan du gör din beställning!",
                   "È necessario selezionare le bevande prima di effettuare un ordine!",
                   "¡Debe seleccionar sus bebidas antes de realizar un pedido!",
                   "Ye must select yer drinks afore placin' an order!"
                  ]

var payed_order = ["Your order has been payed using your available credit, you can pick up your beverages in the VIP fridge.",
                   "Din beställning har blivit betalad med din tillgängliga kredit, du kan hämta dina drycker i VIP kylen.",
                   "Il tuo ordine è stato pagato utilizzando il tuo credito disponibile, puoi ritirare le tue bevande nel frigo VIP.",
                   "Su orden ha sido pagada usando su crédito disponible, puede recoger sus bebidas en el refrigerador VIP.",
                   "Yer order has been payed usin' yer available credit, ye can pick up yer beverages in th' VIP fridge."
                  ]

var placed_order = ["Your order has been placed! Direct to the counter and pay for your order before you can pick up your drinks.",
                    "Din beställning är skickad! Var vänlig betala vid disken innan du kan hämta dina drycker.",
                    "Il tuo ordine è stato inoltrato! Direttamente al banco e paga il tuo ordine prima di poter ritirare i tuoi drink.",
                    "¡Su orden ha sido puesta! Dirígete al mostrador y paga tu pedido antes de que puedas recoger tus bebidas.",
                    "Yer order has been placed! Direct t' th' counter 'n pay fer yer order afore ye can pick up yer drinks."         
                 ] 

var empty_order_msg = empty_order[0]
var payed_order_msg = payed_order[0]
var placed_order_msg = placed_order[0]




