/** The Flying Dutchman
 *  DB.js
 *  Created by 'Pirates of the Caribbean' on 17 of February 2018.
 *  Updated by Hassan Odimi
 */

/*DB of all users saved as an array of objects, each object represents a single user*/
var DB_CUSTOMERS = [
    {
        "customer_id": "C€$#=@",
        "password": "sudo",
        "username": "sudo",
        "first_name": "Super",
        "last_name": "Duper",
        "email": "Super.Duper@it.uu.se",
        "phone": "0000000000",
        "credit": 4444,
        "vip": true
    },
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
        "credit": 1000000000,
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
        "password": "nonvip123",
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
        "bartender_id": "B€$#=@",
        "password": "sudo",
        "username": "sudo",
        "first_name": "Super",
        "last_name": "Duper",
        "email": "Super.Duper@it.uu.se",
        "phone": "0000000000"

    },
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
        "manager_id": "M€$#=@",
        "password": "sudo",
        "username": "sudo",
        "first_name": "Super",
        "last_name": "Duper",
        "email": "Super.Duper@it.uu.se",
        "phone": "0000000000"
    },
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
        "password": "mauro123",
        "username": "mauro",
        "first_name": "Mauro",
        "last_name": "Pappaterra",
        "email": "mauro.pappaterra@gmail.com",
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
        "bartender_id": "B00000",
        "customer_id": "C00001",
        "order":[166018,37500,411],
        "quantities":[3,5,2],
        "amount": 800,
        "timestamp": "2014-10-10 19:04:13",
        "paid":true
    },
    {
        "transaction_id": "T00002",
        "bartender_id": "B00000",
        "customer_id": "C00002",
        "order":[733051,817010],
        "quantities":[2,1],
        "amount": 205,
        "timestamp": "2014-10-10 19:36:43",
        "paid":true
    },
    {
        "transaction_id": "T00003",
        "bartender_id": "B00000",
        "customer_id": "C00003",
        "order":[1134,1132,166018],
        "quantities":[10,5,5],
        "amount": 1300,
        "timestamp": "2014-10-10 19:46:18",
        "paid":true
    },
    {
        "transaction_id": "T00004",
        "bartender_id": "B00000",
        "customer_id": "C00004",
        "order":[166018,1134,1132,1194,205747],
        "quantities":[1,2,2,1,1],
        "amount": 415,
        "timestamp": "2014-10-10 20:06:52",
        "paid":true
    },
    {
        "transaction_id": "T00005",
        "bartender_id": "B00001",
        "customer_id": "C00005",
        "order":[733051,817010,723428,1132,166018,1194], 
        "quantities":[1,1,1,2,1,4],
        "amount": 615,
        "timestamp": "2014-10-10 20:18:32",
        "paid":true
    },
    {
        "transaction_id": "T00006",
        "bartender_id": "B00001",
        "customer_id": "C00005",
        "order":[1132,1134,166018,37500], 
        "quantities":[4,1,2,1],
        "amount": 505,
        "timestamp": "2014-10-12 20:33:43",
        "paid":true
    },
    {
        "transaction_id": "T00007",
        "bartender_id": "B00002",
        "customer_id": "C00006",
        "order":[1132],
        "quantities":[2],
        "amount": 100,
        "timestamp": "2014-10-12 21:34:45",
        "paid":true
    },
    {
        "transaction_id": "T00008",
        "bartender_id": null,
        "customer_id": "C00007",
        "order":[1134,1132,205747,37500], 
        "quantities":[1,5,2,1],
        "amount": 495,
        "timestamp": "2014-10-12 21:07:57",
        "paid":false
    },
    {
        "transaction_id": "T00009",
        "bartender_id": null,
        "customer_id": "C00009",
        "order":[1132,1134,166018,1194,205747,37500,411], 
        "quantities":[5,3,2,5,2,1,1],
        "amount": 1140,
        "timestamp": "2014-10-10 21:09:04",
        "paid":false
    },
    {
        "transaction_id": "T00010",
        "bartender_id": "B00003",
        "customer_id": "C00010",
        "order":[1132,1134,166018,37500,1194,733051,205747,411,723428,817010],
        "quantities":[5,3,2,2,6,1,2,1,1,1],
        "amount": 1490,
        "timestamp": "2014-10-10 21:09:16",
        "paid":true
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00011",
        "bartender_id": null,
        "customer_id": "C00011",
        "order":[166018,1134,1132,1194],
        "quantities":[1,1,2,1],
        "amount": 300,
        "timestamp": "2014-10-12 00:05:15",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00012",
        "bartender_id": null,
        "customer_id": "C00016",
        "order":[1132,1134,166018,37500,1194,733051,205747,411,817010,723428,828902],
        "quantities":[2,1,3,2,2,2,2,4,2,2,1],
        "amount": 17525,
        "timestamp": "2014-10-12 00:25:28",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00013",
        "bartender_id": null,
        "customer_id": "C00018",
        "order":[166018,1134,1132,1194,37500,205747],
        "quantities":[1,2,2,2,1,1],
        "amount": 550,
        "timestamp": "2014-10-12 00:05:37",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00014",
        "bartender_id": null,
        "customer_id": "C00015",
        "order":[411,723428,817010],
        "quantities":[2,1,1],
        "amount": 310,
        "timestamp": "2014-10-15 22:53:09",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00015",
        "bartender_id": null,
        "customer_id": "C00013",
        "order":[1132,1134,166018],
        "quantities":[6,2,2],
        "amount": 590,
        "timestamp": "2014-10-15 23:15:28",
        "paid":false
    },
    {   //Transaction for Non-VIP Customer with no credit
        "transaction_id": "T00016",
        "bartender_id": "B00004",
        "customer_id": "C00011",
        "order":[1132,1134,37500,817010,723428], 
        "quantities":[2,1,1,1,2],
        "amount": 470,
        "timestamp": "2014-10-15 22:54:22",
        "paid":true
    },
    {
        "transaction_id": "T00017",
        "bartender_id": null,
        "customer_id": "C00022",
        "order":[1134,1132],
        "quantities":[2,2],
        "amount": 230,
        "timestamp": "2014-10-15 22:56:38",
        "paid":false
    },
    {
        "transaction_id": "T00018",
        "bartender_id": null,
        "customer_id": "C00023",
        "order":[1134,1132,166018,37500,1194,733051,411,723428],
        "quantities":[5,2,5,3,7,1,1,2],
        "amount": 1745,
        "timestamp": "2014-10-15 23:57:11",
        "paid":false
    },
    {
        "transaction_id": "T00019",
        "bartender_id": "B00005",
        "customer_id": "C00024",
        "order":[1194],
        "quantities":[15],
        "amount": 825,
        "timestamp": "2014-10-15 22:57:30",
        "paid":true
    },
    {
        "transaction_id": "T00020",
        "bartender_id": null,
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
        "order": [25053,190719,611864,659534,723428],
        "quantities": [10,10,10,10,10],
        "amount": 16840,
        "timestamp": "2014-10-10 19:04:13"
    },
    {
        "order_id": "R00002",
        "manager_id": "M00001",
        "order": ['MIKE01','MIKE02','MIKE03','MIKE04','MIKE05','MIKE06','MIKE07','MIKE08','MIKE09','MIKE10','MIKE11','MIKE12','MIKE13','MIKE14','MIKE15','MIKE16'],
        "quantities": [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],
        "amount": 44499,
        "timestamp": "2014-10-10 19:36:43"
    },
    {
        "order_id": "R00003",
        "manager_id": "M00001",
        "order":[733051],
        "quantities":[100],
        "amount": 72900,
        "timestamp": "2014-10-10 19:46:18"
    },
    {
        "order_id": "R00004",
        "manager_id": "M00001",
        "order":[643947,688160,52586,701825,159537,568606,539688],
        "quantities":[3,3,2,1,3,1,1],
        "amount": 6134,
        "timestamp": "2014-10-11 22:06:52"
    },
    {
        "order_id": "R00005",
        "manager_id": "M00001",
        "order":[723428],
        "quantities":[10],
        "amount": 4990,
        "timestamp": "2014-10-11 20:18:32"
    },
    {
        "order_id": "R00006",
        "manager_id": "M00001",
        "order":[717611,191617,507955,275861,586898],
        "quantities":[100,100,100,100,100],
        "amount": 6730,
        "timestamp": "2014-10-14 20:33:43"
    },
    {
        "order_id": "R00007",
        "manager_id": "M00001",
        "order":[310574],
        "quantities":[500],
        "amount": 5590,
        "timestamp": "2014-10-16 20:34:45"
    },
    {
        "order_id": "R00008",
        "manager_id": "M00001",
        "order":[185,186123,508039],
        "quantities":[100,10,10],
        "amount": 22224,
        "timestamp": "2014-10-20 21:07:57"
    },
    {
        "order_id": "R00009",
        "manager_id": "M00001",
        "order":[1134,1132,166018,1147,593104,1163,626306],
        "quantities":[500,500,500,500,500,500,1000],
        "amount": 57608,
        "timestamp": "2014-10-21 10:15:08"
    },
    {
        "order_id": "R00010",
        "manager_id": "M00001",
        "order":[25053],
        "quantities":[3],
        "amount": 1326,
        "timestamp": "2014-10-22 09:20:04"
    },
    {
        "order_id": "R00011",
        "manager_id": "M00002",
        "order":[404133,817010,195565],
        "quantities":[5,5,5],
        "amount": 4360,
        "timestamp": "2014-10-23 13:09:16"
    },
    {
        "order_id": "R00012",
        "manager_id": "M00002",
        "order":[1132],
        "quantities":[1000],
        "amount": 13090,
        "timestamp": "2014-10-25 08:05:15"
    },
    {
        "order_id": "R00013",
        "manager_id": "M00002",
        "order":[1163,371337,508168],
        "quantities":[50,50,50],
        "amount": 2767,
        "timestamp": "2014-10-25 16:05:28"
    },
    {
        "order_id": "R00014",
        "manager_id": "M00002",
        "order":[304394,510253,342442,53091,159609],
        "quantities":[3,3,3,10,10],
        "amount": 12787,
        "timestamp": "2014-10-26 00:05:37"
    },
    {
        "order_id": "R00015",
        "manager_id": "M00003",
        "order":[507849,508019,507701,10538,370625],
        "quantities":[500,500,500,300,20],
        "amount": 33870,
        "timestamp": "2014-10-26 22:53:09"
    }
];

/*DB of Bar's Stock saved as an array of objects, each object represents a beverage*/
var DB_STOCK = [{
    // Beers
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
        "special": false
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
        "ecologic": false,
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
    }, { // new beers, Same format   
        "article_id": "622011",
        "name": "San Miguel",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Spain",  
        "volume_ml": 320,  
        "alcohol_percentage": 0.0,
        "sale_price": 7.90,
        "in_stock": 100,
        "kosher": false,
        "ecologic": false,
        "special": false
        
    }, {
        "article_id": "680440",
        "name": "Staropramen",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Czech Republic",
        "volume_ml": 320,
        "alcohol_percentage": 5,
        "sale_price": 12.40,
        "in_stock": 120,
        "kosher": false,
        "ecologic": false,
        "special": false 
    }, {            
        "article_id": "7627",
        "name": "Budweiser",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 320,
        "alcohol_percentage": 5,
        "sale_price": 13.90,
        "in_stock": 140,
        "kosher": false,
        "ecologic": false,
        "special": false 
    }, {              
        "article_id": "509794",
        "name": "Seven Giraffes",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 5.1,
        "sale_price": 23.90,
        "in_stock": 250,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{               
        "article_id": "395750",
        "name": "Breznak",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Czech Republic",
        "volume_ml": 320,
        "alcohol_percentage": 5.1,
        "sale_price": 12.10,
        "in_stock": 35,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {              
        "article_id": "508168",
        "name": "Fuller's",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 5.4,
        "sale_price": 20.50,
        "in_stock": 150,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{  
        "article_id": "634199",
        "name": "Duff",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Germany",
        "volume_ml": 320,
        "alcohol_percentage": 4.7,
        "sale_price": 20.10,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "1193",
        "name": "Lapin Kulta",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Finland",
        "volume_ml": 320,
        "alcohol_percentage": 5.2,
        "sale_price": 13.20,
        "in_stock": 150,
        "kosher": false,
        "ecologic": false,
        "special": false  
    },{
        "article_id": "38488",
        "name": "Eriksberg",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 320,
        "alcohol_percentage": 5.3,
        "sale_price": 15.50,  
        "in_stock": 180,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {     
        "article_id": "626306",
        "name": "Pabst Blue Ribbon",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 320,
        "alcohol_percentage": 4.5,
        "sale_price": 12.90,
        "in_stock": 20,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {      
        "article_id": "371337",
        "name": "Fuller's",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 8.5,
        "sale_price": 18.30,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "1163",
        "name": "Guinness",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Irland",
        "volume_ml": 320,
        "alcohol_percentage": 5,
        "sale_price": 17.90,
        "in_stock": 250,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {  
        "article_id": "1147",
        "name": "Beck's",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Germany",
        "volume_ml": 320,
        "alcohol_percentage": 5.0,
        "sale_price": 14.90,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {   
        "article_id": "170189",
        "name": "Red Stripe",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Jamaica", 
        "volume_ml": 320,
        "alcohol_percentage": 4.7,
        "sale_price": 14.90,
        "in_stock": 450,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {    
        "article_id": "213637",
        "name": "Samuel Adams",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 320,
        "alcohol_percentage": 4.9,
        "sale_price": 19.90,
        "in_stock": 120,
        "kosher": false,
        "ecologic": false,
        "special": false
    },  {
        "article_id": "191617",
        "name": "Mythos",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Grekland",
        "volume_ml": 320,
        "alcohol_percentage": 4.7,
        "sale_price": 15.90,
        "in_stock": 145,
        "kosher": false,
        "ecologic": false,
        "special": false        
    }, {                
        "article_id": "10538",
        "name": "Mariestads Old Ox",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 320,
        "alcohol_percentage": 6.9,
        "sale_price": 17.50,
        "in_stock": 400,
        "kosher": false,
        "ecologic": false,
        "special": false
    },
                
 /* wines*/ 
                
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
        "kosher": false,
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
    },{ 
        "article_id": "16594", // same as Sytembolaget
        "name": "Jacob's Creek",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 300,
        "alcohol_percentage": 11.9,
        "sale_price": 69.00,
        "in_stock": 20,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "12730", // same as Sytembolaget
        "name": "Pinot Blanc",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 300,
        "alcohol_percentage": 12.5,
        "sale_price": 79.00,
        "in_stock": 340,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {            
       "article_id": "32777", // same as Sytembolaget
        "name": "Wild Strawberry Sparklingc",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 300,
        "alcohol_percentage": 12,
        "sale_price": 65.00,
        "in_stock": 220,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "543793", // same as Sytembolaget
        "name": "Kiviks äppelvin",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 300,
        "alcohol_percentage": 10,
        "sale_price": 69.00,
        "in_stock": 210,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "34443", // same as Sytembolaget
        "name": "Hermon",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 300,
        "alcohol_percentage": 14,
        "sale_price": 116.00,
        "in_stock": 22,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "50229", // same as Sytembolaget
        "name": "Scarecrow",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "England",
        "volume_ml": 300,
        "alcohol_percentage": 4.7,
        "sale_price": 24.90,
        "in_stock": 221,
        "kosher": false,
        "ecologic": false,
        "special": false
   },{
        "article_id": "405628", // same as Sytembolaget
        "name": "Altissima",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 300,
        "alcohol_percentage": 40,
        "sale_price": 398,
        "in_stock": 27,
        "kosher": false,
        "ecologic": false,
        "special": false
        },{
        "article_id": "489875", // same as Sytembolaget
        "name": "Artisan Collection",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Jerez",
        "volume_ml": 450,
        "alcohol_percentage": 41,
        "sale_price": 749,
        "in_stock": 32,
        "kosher": false,
        "ecologic": false,
        "special": false
   },{
        "article_id": "567642", // same as Sytembolaget
        "name": "Eau de Vie de Kirsch Vieux",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "France",
        "volume_ml": 450,
        "alcohol_percentage": 43,
        "sale_price": 570,
        "in_stock": 62,
        "kosher": false,
        "ecologic": false,
        "special": false
   },{
        "article_id": "628817", // same as Sytembolaget
        "name": "Three Amigos",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Danmark",
        "volume_ml": 450,
        "alcohol_percentage": 8,
        "sale_price": 47.90,
        "in_stock": 92,
        "kosher": false,
        "ecologic": false,
        "special": false
    },{
        "article_id": "665387", // same as Sytembolaget
        "name": "Falcon",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 450,
        "alcohol_percentage": 4.5,
        "sale_price": 12.90,
        "in_stock": 86,
        "kosher": false,
        "ecologic": false,
        "special": false
      },{
        "article_id": "733468", // same as Sytembolaget
        "name": "Single Cask",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 450,
        "alcohol_percentage": 47.6,
        "sale_price": 529,
        "in_stock": 12,
        "kosher": false,
        "ecologic": false,
        "special": false
     }, {
        "article_id": "734572", // same as Sytembolaget
        "name": "Poli Grappa Barrel Pack",
        "beer": false,
        "wine": true,
        "spirit": false,
        "year": null,
        "country": "Italy",
        "volume_ml": 450,
        "alcohol_percentage": 40,
        "sale_price": 549,
        "in_stock": 11,
        "kosher": false,
        "ecologic": false,
        "special": false
   },
    /*ekologisk*/
      {
        "article_id": "404133", // same as Sytembolaget
        "name": "Rommehed",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 500,
        "alcohol_percentage": 37.5,
        "sale_price": 192.0,
        "in_stock": 121,
        "kosher": false,
        "ecologic": true,
        "special": false
    },
      {
        "article_id": "428969", // same as Sytembolaget
        "name": "BrewDog Trashy Blonde",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Skottland",
        "volume_ml": 450,
        "alcohol_percentage": 4.1,
        "sale_price": 19.90,
        "in_stock": 234,
        "kosher": false,
        "ecologic": true,
        "special": false
    },  
     {
        "article_id": "586898", // same as Sytembolaget
        "name": "Pistonhead",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Sweden",
        "volume_ml": 330,
        "alcohol_percentage": 4.9,
        "sale_price": 9.90,
        "in_stock": 45,
        "kosher": false,
        "ecologic": true,
        "special": false
    },  
                
    /*Kosher*/
     {
        "article_id": "393010", // same as Sytembolaget
        "name": "Carmel",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Israel",
        "volume_ml": 50,
        "alcohol_percentage": 12.5,
        "sale_price": 124.0,
        "in_stock": 102,
        "kosher": true,
        "ecologic": false,
        "special": false
    },
                
     {
        "article_id": "22520", // same as Sytembolaget
        "name": "Yarden",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "Golan Heights",
        "volume_ml": 450,
        "alcohol_percentage": 14,
        "sale_price": 136.0,
        "in_stock": 14,
        "kosher": true,
        "ecologic": false,
        "special": false
    },
       {
        "article_id": "737636", // same as Sytembolaget
        "name": "Sintonia",
        "beer": false,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "USA",
        "volume_ml": 50,
        "alcohol_percentage": 7,
        "sale_price": 66.0,
        "in_stock": 148,
        "kosher": true,
        "ecologic": false,
        "special": false
    },
   
      /*spirit*/
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
    } ,
    {  // new spirites, Same format
      
        "article_id": "370625",
        "name": "Absolut Mango",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Sweden",
        "volume_ml": 320,
        "alcohol_percentage": 40.0,
        "sale_price": 249.00,
        "in_stock": 100,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "190013",
        "name": "Minttu",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Finland",
        "volume_ml": 320,
        "alcohol_percentage": 40.0,
        "sale_price": 190.00,
        "in_stock": 5,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "159609",
        "name": "Laphroaig",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 48.0,
        "sale_price": 459.00,
        "in_stock": 4444,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, { 
        "article_id": "689423",
        "name": "The Singleton",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 40,
        "sale_price": 829.00,
        "in_stock": 15,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {  
        "article_id": "53091",
        "name": "The Famous Grouse Malt Whisky",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 40,
        "sale_price": 379.00,
        "in_stock": 320,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, { 
        "article_id": "342442",
        "name": "The Glenlivet",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 55.1,
        "sale_price": 471.00,
        "in_stock": 270,
        "kosher": false,
        "ecologic": false,
        "special": false
    },  { 
        "article_id": "676690",
        "name": "Roslags Svenska Hallon",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Sweden",
        "volume_ml": 320,
        "alcohol_percentage": 42, 
        "sale_price": 666.00,
        "in_stock": 150,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {   
        "article_id": "600868",
        "name": "Glengoyne",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 59.8,
        "sale_price": 990.00,
        "in_stock": 420,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, { 
        "article_id": "673941",
        "name": "Hine Rare",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "France",
        "volume_ml": 320,
        "alcohol_percentage": 40,
        "sale_price": 489.00,
        "in_stock": 190,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {  
        "article_id": "677091",
        "name": "Lochnagar",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 46,
        "sale_price": 599.00,
        "in_stock": 15,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {   
        "article_id": "568606",
        "name": "Deanston",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 52.6,
        "sale_price": 749.00,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "586715",
        "name": "Eau-de-Vie de Mirabelle",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "France",
        "volume_ml": 320,
        "alcohol_percentage": 40,
        "sale_price": 525.00, 
        "in_stock": 150,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {   
        "article_id": "52586",
        "name": "Rum Plantation",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "Barbados",
        "volume_ml": 320,
        "alcohol_percentage": 40,
        "sale_price": 269.00,
        "in_stock": 150,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, { 
        "article_id": "195565",
        "name": "Tanqueray",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 43.1,
        "sale_price": 279.00,
        "in_stock": 250,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {
        "article_id": "733236",
        "name": "Balcones True Blue",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "USA",
        "volume_ml": 320,
        "alcohol_percentage": 50.2,
        "sale_price": 899.00,
        "in_stock": 0,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {     
        "article_id": "2",
        "name": "Renat",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "USA",
        "volume_ml": 320,
        "alcohol_percentage": 37.5,
        "sale_price": 110.00,
        "in_stock": 0,
        "kosher": false,
        "ecologic": false,
        "special": false
    }, {    
        "article_id": "548667",
        "name": "Collection 3",
        "beer": false,
        "wine": false,
        "spirit": true,
        "year": null,
        "country": "UK",
        "volume_ml": 320,
        "alcohol_percentage": 46,
        "sale_price": 579.00,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": false
    },
    {  /*All SPECIALS*/
        "article_id": "MIKE01",
        "name": "mike's Robust Imperial Porter",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 8.0,
        "sale_price": 50.0,
        "in_stock": 30,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE02",
        "name": "Taranaki IPA",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 350,
        "alcohol_percentage": 7.0,
        "sale_price": 65.0,
        "in_stock": 10,
        "kosher": false,
        "ecologic": false,
        "special": true
    },

    {
        "article_id": "MIKE03",
        "name": "Vanilla Coffee Porter",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 500,
        "alcohol_percentage": 8.0,
        "sale_price": 200.0,
        "in_stock": 5,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE04",
        "name": "Chocolate Milk Stout",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 8.0,
        "sale_price": 150.0,
        "in_stock": 15,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE05",
        "name": "Onemorepaleale",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.5,
        "sale_price": 120.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE06",
        "name": "PilS-NAH",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.0,
        "sale_price": 165.0,
        "in_stock": 3,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE07",
        "name": "Longline Lager",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.0,
        "sale_price": 175.0,
        "in_stock": 17,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE08",
        "name": "Mild Ale",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 4.0,
        "sale_price": 145.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": true,
        "special": true
    },
    {
        "article_id": "MIKE09",
        "name": " Full Nelson IPA",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 7.0,
        "sale_price": 145.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE10",
        "name": " Second Coming IIPA",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 9.0,
        "sale_price": 145.0,
        "in_stock": 20,
        "kosher": false,
        "ecologic": true,
        "special": true
    },
    {
        "article_id": "MIKE11",
        "name": " Surf Spot X",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.7,
        "sale_price": 115.0,
        "in_stock": 25,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE12",
        "name": "Boys N Girls",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 8.0,
        "sale_price": 125.0,
        "in_stock": 2,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE13",
        "name": "Hopstock & 2 Smoking Barrels",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.0,
        "sale_price": 125.0,
        "in_stock": 0,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE14",
        "name": "Damson in Distress",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": null,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.0,
        "sale_price": 170.0,
        "in_stock": 0,
        "kosher": false,
        "ecologic": false,
        "special": true
    },
    {
        "article_id": "MIKE15",
        "name": "Flight of the Falcon",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": 2010,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.7,
        "sale_price": 185.0,
        "in_stock": 8,
        "kosher": false,
        "ecologic": false,
        "special": true
    }
    ,
    {
        "article_id": "MIKE16",
        "name": "Leaky Boat",
        "beer": true,
        "wine": false,
        "spirit": false,
        "year": 2014,
        "country": "New Zeland",
        "volume_ml": 330,
        "alcohol_percentage": 5.2,
        "sale_price": 145.0,
        "in_stock": 17,
        "kosher": false,
        "ecologic": false,
        "special": true
    } 
];

/*LOAD CURRENT SECTION DATA FROM SESSION STORAGE*/
if (sessionStorage.getItem("SESSION_TRANSACTIONS") == null){
    sessionStorage.setItem("SESSION_TRANSACTIONS",JSON.stringify(DB_TRANSACTIONS));
    sessionStorage.setItem("SESSION_USER_INFO",JSON.stringify(DB_CUSTOMERS));
    sessionStorage.setItem("transaction_counter",20);
    //alert("User and Transaction databases loaded from script!")
} /*else {
    alert("User and Transaction databases will be loaded from session storage!")
  }*/

if (sessionStorage.getItem("SESSION_STOCK_INFO") == null){
    sessionStorage.setItem("SESSION_STOCK_INFO",JSON.stringify(DB_STOCK));
    //alert("Stock database loaded from script!")
} /*else {
    alert("Stock database will be loaded from session storage!")
}*/

if (sessionStorage.getItem("SESSION_ORDERS") == null){
    sessionStorage.setItem("SESSION_ORDERS",JSON.stringify(DB_ORDERS));
    sessionStorage.setItem("orders_counter",15);
    //alert("Orders database loaded from script!")
} /*else {
    alert("Orders database will be loaded from session storage!")
}*/

var SESSIONS_TRANSACTIONS = JSON.parse(sessionStorage.getItem("SESSION_TRANSACTIONS"));
var SESSION_USER_INFO = JSON.parse(sessionStorage.getItem("SESSION_USER_INFO"));
var SESSION_STOCK_INFO = JSON.parse(sessionStorage.getItem("SESSION_STOCK_INFO"));
var SESSIONS_ORDERS = JSON.parse(sessionStorage.getItem("SESSION_ORDERS"));

var transactions_counter = parseInt(sessionStorage.getItem("transaction_counter"));
var orders_counter = sessionStorage.getItem("orders_counter");
//alert(SESSIONS_ORDERS.toSource())

/* END SESSION STORAGE DATA LOADING*/