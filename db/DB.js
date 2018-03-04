/** Bar
 *  DB.js
 *  Created by Mauro J. Pappaterra on 17 of February 2018.
 *  Updated by Hassan Odimi
 */

/*DB of all users saved as an array of objects, each object represents a single user*/
var DB_CUSTOMERS = [
    {
        "customer_id": "C00001",
        "password": "b690bc2447d40ea8a6f78345eb979a28",
        "username": "jorass",
        "first_name": "Jory",
        "last_name": "Assies",
        "email": "jory.assies@it.uu.se",
        "phone": "0704811411",
        "credit": 300
    },
    {
        "customer_id": "C00002",
        "password": "b612f428e4a53386fdb98f6c2164c16c",
        "username": "sulstr",
        "first_name": "Sulayman",
        "last_name": "Street",
        "email": "sulayman.street@it.uu.se",
        "phone": "0701517627",
        "credit": 650
    },
    {
        "customer_id": "C00003",
        "password": "c0d9251f9af5e7410c6a3932f696c449",
        "username": "orapan",
        "first_name": "Orabela",
        "last_name": "Panders",
        "email": "orabela.panders@it.uu.se",
        "phone": "0701503294",
        "credit": 840
    },
    {
        "customer_id": "C00004",
        "password": "4ec434994decffa3005b477cc7f992e6",
        "username": "kenolg",
        "first_name": "Kenan",
        "last_name": "Olguin",
        "email": "kenan.olguin@it.uu.se",
        "phone": "0706569560",
        "credit": 1250
    },
    {
        "customer_id": "C00005",
        "password": "971299fa95fe467db26e8bf01864d48d",
        "username": "saskru",
        "first_name": "Sa\u0161a",
        "last_name": "Kr\u00fcger",
        "email": "sasa.kruger@it.uu.se",
        "phone": "0705349276",
        "credit": 955
    },
    {
        "customer_id": "C00006",
        "password": "2a3db2cc165057da53ef13a348e9787f",
        "username": "ervtod",
        "first_name": "Ervin",
        "last_name": "Todd",
        "email": "ervin.todd@it.uu.se",
        "phone": "0702339018",
        "credit": 720
    },
    {
        "customer_id": "C00007",
        "password": "743444f0ff666f1f90580e7bc3af5099",
        "username": "aqulyn",
        "first_name": "Aquilina",
        "last_name": "Lyndon",
        "email": "aquilina.lyndon@it.uu.se",
        "phone": "0702611287",
        "credit": 135
    },
    {
        "customer_id": "C00008",
        "password": "fc4fd22287923f3b47b91fc5f0a85af5",
        "username": "lasnic",
        "first_name": "Lasse",
        "last_name": "Nicholson",
        "email": "lasse.nicholson@it.uu.se",
        "phone": "0703238992",
        "credit": 535
    },
    {
        "customer_id": "C00009",
        "password": "849d51ea793c93194952478aa85694af",
        "username": "maihon",
        "first_name": "Maiken",
        "last_name": "Honda",
        "email": "maiken.honda@it.uu.se",
        "phone": "0709533955",
        "credit": 1395
    },
    {
        "customer_id": "C00010",
        "password": "739d0d428ff99dc043e8955b5a4885bc",
        "username": "hirchr",
        "first_name": "Hiram",
        "last_name": "Christopherson",
        "email": "hiram.christopherson@it.uu.se",
        "phone": "0709599269",
        "credit": 1435
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00011",
        "password": "7e3f6af9d6c2385a79b49b03e87234e5",
        "username": "larsch",
        "first_name": "Lara",
        "last_name": "Schenck",
        "email": "lara.schenck@it.uu.se",
        "phone": "0702721289",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00012",
        "password": "1db930e727e73c027fc58b5554935be8",
        "username": "janhei",
        "first_name": "Jancsi",
        "last_name": "Heiman",
        "email": "jancsi.heiman@it.uu.se",
        "phone": "0707977965",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00013",
        "password": "f3e3fbabe1b745defda645e5d85a6ac7",
        "username": "svetor",
        "first_name": "Svetlana",
        "last_name": "Torres",
        "email": "svetlana.torres@it.uu.se",
        "phone": "0707459505",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00014",
        "password": "75f589d96b212b65298b31717a2641c9",
        "username": "pomgra",
        "first_name": "Pompeius",
        "last_name": "Graner",
        "email": "pompeius.graner@it.uu.se",
        "phone": "0701584121",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00015",
        "password": "9e44cc19b9f726583ccc93fa7908f7fd",
        "username": "valpag",
        "first_name": "Valeria",
        "last_name": "Pagani",
        "email": "valeria.pagani@it.uu.se",
        "phone": "0703156441",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00016",
        "password": "0f1903b5119eadb705ddba7f2750792f",
        "username": "domolh",
        "first_name": "Domen",
        "last_name": "Olhouser",
        "email": "domen.olhouser@it.uu.se",
        "phone": "0702459084",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00017",
        "password": "3fb65e8d64eb23e63c71a86ea97951e0",
        "username": "gollan",
        "first_name": "Golnar",
        "last_name": "Langley",
        "email": "golnar.langley@it.uu.se",
        "phone": "0702677189",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00018",
        "password": "3c244190040aedd134913562509a5ea0",
        "username": "hyrlap",
        "first_name": "Hyram",
        "last_name": "Lapointe",
        "email": "hyram.lapointe@it.uu.se",
        "phone": "0702177650",
        "credit": 0
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00019",
        "password": "84db5f68a5f2ad3f25bb4445148f434c",
        "username": "katfab",
        "first_name": "Katrien",
        "last_name": "Fabre",
        "email": "katrien.fabre@it.uu.se",
        "phone": "0705701344",
        "credit": 0
    },
    {
        "customer_id": "C00020",
        "password": "edc2623f10cd4d069e710653f3fc630c",
        "username": "sulpen",
        "first_name": "Sulis\u0142aw",
        "last_name": "Pender",
        "email": "sulis\u0142aw.pender@it.uu.se",
        "phone": "0709481365",
        "credit": 1465
    },
    {
        "customer_id": "C00021",
        "password": "9b0c08c58fdeb1b25525ac0cb8187eda",
        "username": "dansch",
        "first_name": "Danna",
        "last_name": "Schermer",
        "email": "danna.schermer@it.uu.se",
        "phone": "0709593528",
        "credit": 1690
    },
    {
        "customer_id": "C00022",
        "password": "1fcb15df01a8ca6a442058aca336b324",
        "username": "jovsit",
        "first_name": "Jove",
        "last_name": "Sitz",
        "email": "jove.sitz@it.uu.se",
        "phone": "0704408722",
        "credit": 245
    },
    {
        "customer_id": "C00023",
        "password": "27e4426409fa9a5b2917721e3aa636f2",
        "username": "elepic",
        "first_name": "Elektra",
        "last_name": "Pickle",
        "email": "elektra.pickle@it.uu.se",
        "phone": "0708681770",
        "credit": 2000
    },
    {
        "customer_id": "C00024",
        "password": "c8a458e5af7d03a2477b9d886ac98a77",
        "username": "muhtof",
        "first_name": "Muhammed",
        "last_name": "Toft",
        "email": "muhammed.toft@it.uu.se",
        "phone": "0708579214",
        "credit": 1885
    },
    {
        "customer_id": "C00025",
        "password": "94996b177550f4db4fe24ea556cbe75c",
        "username": "zulgor",
        "first_name": "Zuleika",
        "last_name": "Gorecki",
        "email": "zuleika.gorecki@it.uu.se",
        "phone": "0705595808",
        "credit": 865
    }
];

var DB_BARTENDERS = [
    {
        "bartender_id": "B00001",
        "password": "ffc2364a0f7bedd01fd49f0eda069906",
        "username": "schjou",
        "first_name": "Schwanhild",
        "last_name": "Joubert",
        "email": "schwanhild.joubert@it.uu.se",
        "phone": "0705794586"
    },
    {
        "bartender_id": "B00002",
        "password": "237a09cf1964424441b0a07635029f10",
        "username": "livzha",
        "first_name": "Livianus",
        "last_name": "Zhao",
        "email": "livianus.zhao@it.uu.se",
        "phone": "0701524432"
    },
    {
        "bartender_id": "B00003",
        "password": "64b5a690561214c1ca40f8b906a47365",
        "username": "eulcou",
        "first_name": "Eul\u00e0lia",
        "last_name": "Coughlan",
        "email": "eulalia.coughlan@it.uu.se",
        "phone": "0702647034"
    },
    {
        "bartender_id": "B00004",
        "password": "6cbd7446fdb1803d62dd8d56277a736c",
        "username": "edraug",
        "first_name": "Edric",
        "last_name": "Augustin",
        "email": "edric.augustin@it.uu.se",
        "phone": "0707685685"
    },
    {
        "bartender_id": "B00005",
        "credentials": "3",
        "password": "694ba22ce8113e54e857a9712c753b6f",
        "username": "sivan",
        "first_name": "S\u0131d\u0131ka",
        "last_name": "Van",
        "email": "sidika.van@it.uu.se",
        "phone": "0704331612"
    },
];

var DB_MANAGERS =[
    {
        "manager_id": "M00001",
        "password": "88ab1f4dac9422a7ee3cb34eca3793b7",
        "username": "nikpro",
        "first_name": "Nika",
        "last_name": "Proulx",
        "email": "nika.proulx@it.uu.se",
        "phone": "0706412621"
    },
    {
        "manager_id": "M00002",
        "password": "83ceffee5f8939502d411b895d37d6d9",
        "username": "giamik",
        "first_name": "Giacinta",
        "last_name": "Mikkelsen",
        "email": "giacinta.mikkelsen@it.uu.se",
        "phone": "0703913087"
    }
]

/*DB of customers transactions saved as an array of objects, each object represents a single transaction*/
var DB_TRANSACTIONS = [
    {
        "transaction_id": "T00001",
        "bartender_id": "B00001",
        "customer_id": "C00001",
        "amount": 160,
        "timestamp": "2014-10-10 19:04:13",
        "paid":"true"
    },
    {
        "transaction_id": "T00002",
        "bartender_id": "B00001",
        "customer_id": "C00002",
        "amount": 230,
        "timestamp": "2014-10-10 19:36:43",
        "paid":"false"
    },
    {
        "transaction_id": "T00003",
        "bartender_id": "B00001",
        "customer_id": "C00003",
        "amount": 415,
        "timestamp": "2014-10-10 19:46:18",
        "paid":"true"
    },
    {
        "transaction_id": "T00004",
        "bartender_id": "B00002",
        "customer_id": "C00004",
        "amount": 615,
        "timestamp": "2014-10-10 20:06:52",
        "paid":"true"
    },
    {
        "transaction_id": "T00005",
        "bartender_id": "B00002",
        "customer_id": "C00005",
        "amount": 175,
        "timestamp": "2014-10-10 20:18:32",
        "paid":"false"
    },
    {
        "transaction_id": "T00006",
        "bartender_id": "B00003",
        "customer_id": "C00005",
        "amount": 220,
        "timestamp": "2014-10-12 20:33:43",
        "paid":"false"
    },
    {
        "transaction_id": "T00007",
        "bartender_id": "B00003",
        "customer_id": "C00006",
        "amount": 115,
        "timestamp": "2014-10-12 21:34:45",
        "paid":"true"
    },
    {
        "transaction_id": "T00008",
        "bartender_id": "B00003",
        "customer_id": "C00007",
        "amount": 40,
        "timestamp": "2014-10-12 21:07:57",
        "paid":"true"
    },
    {
        "transaction_id": "T00008",
        "bartender_id": "B00004",
        "customer_id": "C00008",
        "amount": 335,
        "timestamp": "2014-10-13 21:08:08",
        "paid":"false"
    },
    {
        "transaction_id": "T00009",
        "bartender_id": "B00004",
        "customer_id": "C00009",
        "amount": 435,
        "timestamp": "2014-10-10 21:09:04",
        "paid":"true"
    },
    {
        "transaction_id": "T00010",
        "bartender_id": "B00001",
        "customer_id": "C00010",
        "amount": 655,
        "timestamp": "2014-10-10 21:09:16",
        "paid":"true"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00011",
        "bartender_id": "B00005",
        "customer_id": "C00011",
        "amount": 375,
        "timestamp": "2014-10-12 00:05:15",
        "paid":"true"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00012",
        "bartender_id": "B00005",
        "customer_id": "C00016",
        "amount": 685,
        "timestamp": "2014-10-12 00:25:28",
        "paid":"false"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00013",
        "bartender_id": "B00004",
        "customer_id": "C00018",
        "amount": 296,
        "timestamp": "2014-10-12 00:05:37",
        "paid":"false"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00014",
        "bartender_id": "B00001",
        "customer_id": "C00015",
        "amount": 595,
        "timestamp": "2014-10-15 22:53:09",
        "paid":"false"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00015",
        "bartender_id": "B00002",
        "customer_id": "C00013",
        "amount": 845,
        "timestamp": "2014-10-15 23:15:28",
        "paid":"false"
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00016",
        "bartender_id": "B00003",
        "customer_id": "C00011",
        "amount": 465,
        "timestamp": "2014-10-15 22:54:22",
        "paid":"true"
    },
    {
        "transaction_id": "T00017",
        "bartender_id": "B00001",
        "customer_id": "C00022",
        "amount": 100,
        "timestamp": "2014-10-15 22:56:38",
        "paid":"true"
    },
    {
        "transaction_id": "T00018",
        "bartender_id": "B00002",
        "customer_id": "C00023",
        "amount": 1115,
        "timestamp": "2014-10-15 23:57:11",
        "paid":"false"
    },
    {
        "transaction_id": "T00019",
        "bartender_id": "B00002",
        "customer_id": "C00024",
        "amount": 485,
        "timestamp": "2014-10-15 22:57:30",
        "paid":"true"
    },
    {
        "transaction_id": "T00020",
        "bartender_id": "B00004",
        "customer_id": "C00025",
        "amount": 260,
        "timestamp": "2014-10-15 23:48:38",
        "paid":"true"
    }
]

/*DB of orders saved as an array of objects, each object represents a single order*/
var DB_ORDERS = [
    {
        "order_id": "R00001",
        "manager_id": "M00001",
        "amount": 250,
        "timestamp": "2014-10-10 19:04:13"
    },
    {
        "order_id": "R00002",
        "manager_id": "M00001",
        "amount": 60,
        "timestamp": "2014-10-10 19:36:43"
    },
    {
        "order_id": "R00003",
        "manager_id": "M00001",
        "amount": 75,
        "timestamp": "2014-10-10 19:46:18"
    },
    {
        "order_id": "R00004",
        "manager_id": "M00001",
        "amount": 34,
        "timestamp": "2014-10-11 22:06:52"
    },
    {
        "order_id": "R00005",
        "manager_id": "M00001",
        "amount": 85,
        "timestamp": "2014-10-11 20:18:32"
    },
    {
        "order_id": "R00006",
        "manager_id": "M00001",
        "amount": 125,
        "timestamp": "2014-10-14 20:33:43"
    },
    {
        "order_id": "R00007",
        "manager_id": "M00001",
        "amount": 195,
        "timestamp": "2014-10-16 20:34:45"
    },
    {
        "order_id": "R00008",
        "manager_id": "M00001",
        "amount": 230,
        "timestamp": "2014-10-20 21:07:57"
    },
    {
        "order_id": "R00009",
        "manager_id": "M00001",
        "amount": 80,
        "timestamp": "2014-10-21 10:15:08"
    },
    {
        "order_id": "R00010",
        "manager_id": "M00001",
        "amount": 110,
        "timestamp": "2014-10-22 09:20:04"
    },
    {
        "order_id": "R00011",
        "manager_id": "M00002",
        "amount": 70,
        "timestamp": "2014-10-23 13:09:16"
    },
    {
        "order_id": "R00012",
        "manager_id": "M00002",
        "amount": 25,
        "timestamp": "2014-10-25 08:05:15"
    },
    {
        "order_id": "R00013",
        "manager_id": "M00002",
        "amount": 85,
        "timestamp": "2014-10-25 16:05:28"
    },
    {
        "order_id": "R00014",
        "manager_id": "M00002",
        "amount": 24,
        "timestamp": "2014-10-26 00:05:37"
    },
    {
        "order_id": "R00015",
        "manager_id": "M00002",
        "amount": 46,
        "timestamp": "2014-10-26 22:53:09"
    },
    {
        "order_id": "R00016",
        "manager_id": "M00002",
        "amount": 92,
        "timestamp": "2014-10-27 21:03:28"
    },
    {
        "order_id": "R00017",
        "manager_id": "M00002",
        "amount": 20,
        "timestamp": "2014-10-27 21:54:22"
    },
    {
        "order_id": "R00018",
        "manager_id": "M00002",
        "amount": 60,
        "timestamp": "2014-10-28 08:56:38"
    },
    {
        "order_id": "R00019",
        "manager_id": "M00002",
        "amount": 46,
        "timestamp": "2014-11-02 09:57:11"
    },
    {
        "order_id": "R00020",
        "manager_id": "M00002",
        "amount": 260,
        "timestamp": "2014-11-02 10:57:30"
    },
    {
        "order_id": "R00021",
        "manager_id": "M00001",
        "amount": 65,
        "timestamp": "2014-11-02 20:57:38"
    }
]

/*DB of Bar's Stock saved as an array of objects, each object represents a beverage*/
var DB_STOCK = [
    {
        "article_id": "25053",
        "name": "Braastad XO",
        "description": "Cognac",
        "year": "",
        "country": "France",
        "producer": "Tiffon",
        "volume_ml": null,
        "alcohol_percentage": "40%",

        "cost_per_liter": null,
        "cost_per_unit": "442.00",

        "sale_price_per_liter": null,
        "sale_price_per_unit": "700.00",

        "in_stock": 0
    },
    {
        "article_id": "25053",
        "name": "Braastad XO",
        "description": "Cognac",
        "year": "",
        "country": "Frankrike",
        "producer": "Tiffon",
        "volume_ml": null,
        "alcohol_percentage": "40%",

        "cost_per_liter": null,
        "cost_per_unit": "442.00",

        "sale_price_per_liter": null,
        "sale_price_per_unit": "700.00",

        "img_src": "img/xxxx.jpg",
        "in_stock": 0
    },
    {
        "article_id": "25053",
        "name": "Braastad XO",
        "description": "Cognac",
        "year": "",
        "country": "Frankrike",
        "producer": "Tiffon",
        "volume_ml": null,
        "alcohol_percentage": "40%",

        "cost_per_liter": null,
        "cost_per_unit": "442.00",

        "sale_price_per_liter": null,
        "sale_price_per_unit": "700.00",

        "img_src": "img/xxxx.jpg",
        "in_stock": 0
    }
]