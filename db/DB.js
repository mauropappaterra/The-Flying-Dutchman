/** Bar
 *  DB.js
 *  Created by Mauro J. Pappaterra on 17 of February 2018.
 *  Updated by Hassan Odimi
 */

/*DB of all users saved as an array of objects, each object represents a single user*/
var DB_CUSTOMERS = [
    {
        "customer_id": "C00000",
        "password": "test",
        "username": "test",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.Doe@it.uu.se",
        "phone": "0000000000",
        "credit": 400,
        "vip": true
    },
    {
        "customer_id": "C00001",
        "password": "mauro123",
        "username": "mauro",
        "first_name": "Mauro",
        "last_name": "Pappaterra",
        "email": "Mauro.Pappaterra@it.uu.se",
        "phone": "0704811411",
        "credit": 1650,
        "vip": true
    },
    {
        "customer_id": "C00002",
        "password": "elsa123",
        "username": "elsa",
        "first_name": "Elsa",
        "last_name": "Slattegard",
        "email": "elsa.Slattegard@it.uu.se",
        "phone": "0701517627",
        "credit": 1530,
        "vip": true
    },
    {
        "customer_id": "C00003",
        "password": "jenny123",
        "username": "jenny",
        "first_name": "Jenny",
        "last_name": "Olsson",
        "email": "jenny.olsson@it.uu.se",
        "phone": "0701503294",
        "credit": 1700,
        "vip": true
    },
    {
        "customer_id": "C00004",
        "password": "yawen123",
        "username": "yawen",
        "first_name": "Yawen",
        "last_name": "Yi",
        "email": "Yawen.yi@it.uu.se",
        "phone": "0706569560",
        "credit": 1250,
        "vip": true
    },
    {
        "customer_id": "C00005",
        "password": "hassan123",
        "username": "hassan",
        "first_name": "Hassan",
        "last_name": "Odimi",
        "email": "hassan.odimi@it.uu.se",
        "phone": "0705349276",
        "credit": 955,
        "vip": true
    },
    {
        "customer_id": "C00006",
        "password": "c6",
        "username": "ervtod",
        "first_name": "Ervin",
        "last_name": "Todd",
        "email": "ervin.todd@it.uu.se",
        "phone": "0702339018",
        "credit": 720,
        "vip": true
    },
    {
        "customer_id": "C00007",
        "password": "c7",
        "username": "aqulyn",
        "first_name": "Aquilina",
        "last_name": "Lyndon",
        "email": "aquilina.lyndon@it.uu.se",
        "phone": "0702611287",
        "credit": 950,
        "vip": true
    },
    {
        "customer_id": "C00008",
        "password": "c8",
        "username": "lasnic",
        "first_name": "Lasse",
        "last_name": "Nicholson",
        "email": "lasse.nicholson@it.uu.se",
        "phone": "0703238992",
        "credit": 535,
        "vip": true
    },
    {
        "customer_id": "C00009",
        "password": "c9",
        "username": "maihon",
        "first_name": "Maiken",
        "last_name": "Honda",
        "email": "maiken.honda@it.uu.se",
        "phone": "0709533955",
        "credit": 1395,
        "vip": true
    },
    {
        "customer_id": "C00010",
        "password": "c10",
        "username": "hirchr",
        "first_name": "Hiram",
        "last_name": "Christopherson",
        "email": "hiram.christopherson@it.uu.se",
        "phone": "0709599269",
        "credit": 1635,
        "vip": true
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00011",
        "password": "c11",
        "username": "larsch",
        "first_name": "Lara",
        "last_name": "Schenck",
        "email": "lara.schenck@it.uu.se",
        "phone": "0702721289",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00012",
        "password": "1db930e727e73c027fc58b5554935be8",
        "username": "janhei",
        "first_name": "Jancsi",
        "last_name": "Heiman",
        "email": "jancsi.heiman@it.uu.se",
        "phone": "0707977965",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00013",
        "password": "c13",
        "username": "svetor",
        "first_name": "Svetlana",
        "last_name": "Torres",
        "email": "svetlana.torres@it.uu.se",
        "phone": "0707459505",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00014",
        "password": "75f589d96b212b65298b31717a2641c9",
        "username": "pomgra",
        "first_name": "Pompeius",
        "last_name": "Graner",
        "email": "pompeius.graner@it.uu.se",
        "phone": "0701584121",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00015",
        "password": "c15",
        "username": "valpag",
        "first_name": "Valeria",
        "last_name": "Pagani",
        "email": "valeria.pagani@it.uu.se",
        "phone": "0703156441",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00016",
        "password": "c16",
        "username": "domolh",
        "first_name": "Domen",
        "last_name": "Olhouser",
        "email": "domen.olhouser@it.uu.se",
        "phone": "0702459084",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00017",
        "password": "3fb65e8d64eb23e63c71a86ea97951e0",
        "username": "gollan",
        "first_name": "Golnar",
        "last_name": "Langley",
        "email": "golnar.langley@it.uu.se",
        "phone": "0702677189",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00018",
        "password": "c18",
        "username": "hyrlap",
        "first_name": "Hyram",
        "last_name": "Lapointe",
        "email": "hyram.lapointe@it.uu.se",
        "phone": "0702177650",
        "credit": 0,
        "vip": false
    },
    {   //Non-VIP customer with no credit.
        "customer_id": "C00019",
        "password": "84db5f68a5f2ad3f25bb4445148f434c",
        "username": "katfab",
        "first_name": "Katrien",
        "last_name": "Fabre",
        "email": "katrien.fabre@it.uu.se",
        "phone": "0705701344",
        "credit": 0,
        "vip": false
    },
    {
        "customer_id": "C00020",
        "password": "edc2623f10cd4d069e710653f3fc630c",
        "username": "sulpen",
        "first_name": "Sulis\u0142aw",
        "last_name": "Pender",
        "email": "sulis\u0142aw.pender@it.uu.se",
        "phone": "0709481365",
        "credit": 1465,
        "vip": true
    },
    {
        "customer_id": "C00021",
        "password": "9b0c08c58fdeb1b25525ac0cb8187eda",
        "username": "dansch",
        "first_name": "Danna",
        "last_name": "Schermer",
        "email": "danna.schermer@it.uu.se",
        "phone": "0709593528",
        "credit": 1690,
        "vip": true
    },
    {
        "customer_id": "C00022",
        "password": "c22",
        "username": "jovsit",
        "first_name": "Jove",
        "last_name": "Sitz",
        "email": "jove.sitz@it.uu.se",
        "phone": "0704408722",
        "credit": 245,
        "vip": true
    },
    {
        "customer_id": "C00023",
        "password": "c23",
        "username": "elepic",
        "first_name": "Elektra",
        "last_name": "Pickle",
        "email": "elektra.pickle@it.uu.se",
        "phone": "0708681770",
        "credit": 2000,
        "vip": true
    },
    {
        "customer_id": "C00024",
        "password": "c24",
        "username": "muhtof",
        "first_name": "Muhammed",
        "last_name": "Toft",
        "email": "muhammed.toft@it.uu.se",
        "phone": "0708579214",
        "credit": 1885,
        "vip": true
    },
    {
        "customer_id": "C00025",
        "password": "94996b177550f4db4fe24ea556cbe75c",
        "username": "zulgor",
        "first_name": "Zuleika",
        "last_name": "Gorecki",
        "email": "zuleika.gorecki@it.uu.se",
        "phone": "0705595808",
        "credit": 865,
        "vip": true
    }
];

var DB_BARTENDERS = [
    {
        "bartender_id": "B00000",
        "password": "test",
        "username": "test",
        "first_name": "Bart",
        "last_name": "Ender",
        "email": "bart.ender@it.uu.se",
        "phone": "0000000000"
    },
    {
        "bartender_id": "B00001",
        "password": "hassan123",
        "username": "hassan",
        "first_name": "HASSAN",
        "last_name": "Blackjack",
        "email": "hassan.odimi@it.uu.se",
        "phone": "0705794586"
    },
    {
        "bartender_id": "B00002",
        "password": "elsa123",
        "username": "elsa",
        "first_name": "Elsa",
        "last_name": "Larsson",
        "email": "livianus.zhao@it.uu.se",
        "phone": "0701524432"
    },
    {
        "bartender_id": "B00003",
        "password": "mauro123",
        "username": "mauro",
        "first_name": "Mauro",
        "last_name": "The Godfather",
        "email": "eulalia.coughlan@it.uu.se",
        "phone": "0702647034"
    },
    {
        "bartender_id": "B00004",
        "password": "jenny123",
        "username": "jenny",
        "first_name": "Jenny",
        "last_name": "Augustin",
        "email": "edric.augustin@it.uu.se",
        "phone": "0707685685"
    },
    {
        "bartender_id": "B00005",
        "password": "yawen123",
        "username": "yawen",
        "first_name": "Yawen",
        "last_name": "Van",
        "email": "sidika.van@it.uu.se",
        "phone": "0704331612"
    },
];

var DB_MANAGERS =[
    {
        "manager_id": "M00000",
        "password": "test",
        "username": "test",
        "first_name": "Mana",
        "last_name": "Ger",
        "email": "mana.ger@it.uu.se",
        "phone": "0000000000"
    },
    {
        "manager_id": "M00001",
        "password": "man1",
        "username": "man1",
        "first_name": "Nika",
        "last_name": "Proulx",
        "email": "nika.proulx@it.uu.se",
        "phone": "0706412621"
    },
    {
        "manager_id": "M00002",
        "password": "man2",
        "username": "man2",
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
        "order":[166018,37500,411],
        "quantities":[3,5,2],
        "amount": 800,
        "timestamp": "2014-10-10 19:04:13",
        "paid":true
    },
    {
        "transaction_id": "T00002",
        "bartender_id": "B00001",
        "customer_id": "C00002",
        "order":[733051,817010],
        "quantities":[2,1],
        "amount": 205,
        "timestamp": "2014-10-10 19:36:43",
        "paid":true
    },
    {
        "transaction_id": "T00003",
        "bartender_id": "B00001",
        "customer_id": "C00003",
        "order":[1134,1132,166018],
        "quantities":[10,5,5],
        "amount": 1300,
        "timestamp": "2014-10-10 19:46:18",
        "paid":true
    },
    {   // start from here Hassan
        "transaction_id": "T00004",
        "bartender_id": "B00002",
        "customer_id": "C00004",
        "order":[166018,1134,1132,1194,205747],
        "quantities":[1,2,2,1,1],
        "amount": 415,
        "timestamp": "2014-10-10 20:06:52",
        "paid":true
    },
    {
        "transaction_id": "T00005",
        "bartender_id": "B00002",
        "customer_id": "C00005",
        "order":[733051,817010,723428,1132,166018,1194], 
        "quantities":[1,1,1,2,1,4],
        "amount": 615,
        "timestamp": "2014-10-10 20:18:32",
        "paid":true
    },
    {
        "transaction_id": "T00006",
        "bartender_id": "B00003",
        "customer_id": "C00005",
        "order":[1132,1134,166018,37500], 
        "quantities":[4,1,2,1],
        "amount": 505,
        "timestamp": "2014-10-12 20:33:43",
        "paid":true
    },
    {
        "transaction_id": "T00007",
        "bartender_id": "B00003",
        "customer_id": "C00006",
        "order":[1132],
        "quantities":[2],
        "amount": 100,
        "timestamp": "2014-10-12 21:34:45",
        "paid":true
    },
    {
        "transaction_id": "T00008",
        "bartender_id": "B00003",
        "customer_id": "C00007",
        "order":[1134,1132,205747,37500], 
        "quantities":[1,5,2,1],
        "amount": 495,
        "timestamp": "2014-10-12 21:07:57",
        "paid":false
    },
    {
        "transaction_id": "T00009",
        "bartender_id": "B00004",
        "customer_id": "C00009",
        "order":[1132,1134,166018,1194,205747,37500,411], 
        "quantities":[5,3,2,5,2,1,1],
        "amount": 1140,
        "timestamp": "2014-10-10 21:09:04",
        "paid":false
    },
    {
        "transaction_id": "T00010",
        "bartender_id": "B00001",
        "customer_id": "C00010",
        "order":[1132,1134,166018,37500,1194,733051,205747,411,723428,817010],
        "quantities":[5,3,2,2,6,1,2,1,1,1],
        "amount": 1490,
        "timestamp": "2014-10-10 21:09:16",
        "paid":true
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00011",
        "bartender_id": "B00005",
        "customer_id": "C00011",
        "order":[166018,1134,1132,1194],
        "quantities":[1,1,2,1],
        "amount": 300,
        "timestamp": "2014-10-12 00:05:15",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00012",
        "bartender_id": "B00005",
        "customer_id": "C00016",
        "order":[1132,1134,166018,37500,1194,733051,205747,411,817010,723428,828902],
        "quantities":[2,1,3,2,2,2,2,4,2,2,1],
        "amount": 17525,
        "timestamp": "2014-10-12 00:25:28",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00013",
        "bartender_id": "B00004",
        "customer_id": "C00018",
        "order":[166018,1134,1132,1194,37500,205747],
        "quantities":[1,2,2,2,1,1],
        "amount": 550,
        "timestamp": "2014-10-12 00:05:37",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00014",
        "bartender_id": "B00001",
        "customer_id": "C00015",
        "order":[411,723428,817010],
        "quantities":[2,1,1],
        "amount": 310,
        "timestamp": "2014-10-15 22:53:09",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00015",
        "bartender_id": "B00002",
        "customer_id": "C00013",
        "order":[1132,1134,166018],
        "quantities":[6,2,2],
        "amount": 590,
        "timestamp": "2014-10-15 23:15:28",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00016",
        "bartender_id": "B00003",
        "customer_id": "C00011",
        "order":[1132,1134,37500,817010,723428], 
        "quantities":[2,1,1,1,2],
        "amount": 470,
        "timestamp": "2014-10-15 22:54:22",
        "paid":true
    },
    {
        "transaction_id": "T00017",
        "bartender_id": "B00001",
        "customer_id": "C00022",
        "order":[1134,1132],
        "quantities":[2,2],
        "amount": 230,
        "timestamp": "2014-10-15 22:56:38",
        "paid":false
    },
    {
        "transaction_id": "T00018",
        "bartender_id": "B00002",
        "customer_id": "C00023",
        "order":[1134,1132,166018,37500,1194,733051,411,723428],
        "quantities":[5,2,5,3,7,1,1,2],
        "amount": 1745,
        "timestamp": "2014-10-15 23:57:11",
        "paid":false
    },
    {
        "transaction_id": "T00019",
        "bartender_id": "B00002",
        "customer_id": "C00024",
        "order":[1194],
        "quantities":[15],
        "amount": 825,
        "timestamp": "2014-10-15 22:57:30",
        "paid":true
    },
    {
        "transaction_id": "T00020",
        "bartender_id": "B00004",
        "customer_id": "C00025",
        "order":[205747],
        "quantities":[1],
        "amount": 50,
        "timestamp": "2014-10-15 23:48:38",
        "paid":false
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
var DB_STOCK = [{
        "article_id": "1132", // same as Sytembolaget
        "name": "Heineken",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Netherlands",
        "volume_ml": 350,
        "alcohol_percentage": 5.0,
        "sale_price": 50.0,
        "in_stock": 100,
        "kosher": false,
        "ecologic": false,
        "special": true // FALSE!!!
    },{
        "article_id": "1134", // same as Sytembolaget
        "name": "Newcastle Brown Ale",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Australia",
        "volume_ml": 350,
        "alcohol_percentage": 7.0,
        "sale_price": 65.0,
        "in_stock": 10,
        "kosher": false,
        "ecologic": true, // FALSE!!!
        "special": false
    },{
        "article_id": "166018", // same as Sytembolaget
        "name": "Brooklyn Lager",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "United States",
        "volume_ml": 350,
        "alcohol_percentage": 6.0,
        "sale_price": 80.0,
        "in_stock": 50,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "593104", // same as Sytembolaget
        "name": "Chang Beer",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Thailand",
        "volume_ml": 320,
        "alcohol_percentage": 4.5,
        "sale_price": 75.0,
        "in_stock": 0,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
    "article_id": "1194", // same as Sytembolaget
    "name": "Corona",
    "beer": true,
    "wine": false,
    "spirit": false,
    "year": null,
    "country": "Mexico",
    "volume_ml": 320,
    "alcohol_percentage": 4.55,
    "sale_price": 55.0,
    "in_stock": 500,
    "kosher": false,
    "ecologic": false,
    "special": false
    },

    /*ADD +25 MORE BEERS HERE*/
    {
        "article_id": "37500", // same as Sytembolaget
        "name": "Lindemans Chardonnay",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Australia",
        "volume_ml": 300,
        "alcohol_percentage": 13.5,
        "sale_price": 80.0,
        "in_stock": 10,
        "kosher": true, // FALSE!!!!
        "ecologic": false,
        "special": false
    },{
        "article_id": "166487", // same as Sytembolaget
        "name": "Passo",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "France",
        "volume_ml": 300,
        "alcohol_percentage": 17.0,
        "sale_price": 80.0,
        "in_stock": 0, //10
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "205747", // same as Sytembolaget
        "name": "Foot of Africa",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "South Africa",
        "volume_ml": 300,
        "alcohol_percentage": 14.0,
        "sale_price": 50.0,
        "in_stock": 100,
        "kosher": false,
        "ecologic": false,
        "special": false
    },
    /*ADD +15 MORE WINES HERE*/
    {
        "article_id": "733051", // same as Sytembolaget
        "name": "Rhum J. M",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "France",
        "volume_ml": 50,
        "alcohol_percentage": 46.6,
        "sale_price": 65.0,
        "in_stock": 12,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "723428", // same as Sytembolaget
        "name": "Kullados",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Sweden",
        "volume_ml": 45,
        "alcohol_percentage": 40.0,
        "sale_price": 75.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "817010", // same as Sytembolaget
        "name": "Strane London Dry Gin",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "United Kingdom",
        "volume_ml": 45,
        "alcohol_percentage": 47.4,
        "sale_price": 75.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "411", // same as Sytembolaget
        "name": "Johnnie Walker",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Scotland",
        "volume_ml": 45,
        "alcohol_percentage": 40.0,
        "sale_price": 80.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "828902", // same as Sytembolaget
        "name": "Bocchino Riserva Cantina Privata",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Italy",
        "volume_ml": 50,
        "alcohol_percentage": 45.0,
        "sale_price": 200.0,
        "in_stock": 3,
        "kosher": false,
        "ecologic": false,
        "special": false
    }
    /*ADD +25 MORE SPIRITS HERE*/
]
;

