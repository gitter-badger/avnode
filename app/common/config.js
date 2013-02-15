var _config = {
	"dbName": 			"avnode",
	"defaultLocale": 	"en",
	"locale": 			"en_UK",
	"lang": 			"en",
    "locales":			["en", "it"],
    "sections":			{
    	"performers":		{
    		"limit":			20,
    		"default":			"mostrecent",
    		"valid":			[
    								"mostrecent",
    								"mostactive"
    							],
    		"sortQ":	{
				"mostrecent":{"creation_date": 		-1},
				"mostactive":{"stats.performances":	-1}
			}
		}
	},

    
    
    
    
    
	"company": {
		"logo":	"/img/logo.png",
		"name":	"Flyer communication srl",
		"row1":	"Via del Verano 39, 00185 Rome, Italy<br />t +39.06.78147301 - f +39.06.78390805 - www.flyer.it - flyer@flyer.it",
		"row2":	"Legal address: Via Cardinal de Luca, 10 - 00196 Rome, Italy<br />VAT N° 06589171005 - NREA 977098"
	},
	"banks":[
		["BPM 1753", "BANCA POPOLARE DI MILANO - via Appia Nuova, 447-449 Roma IBAN: IT73Z0558403220000000001753 N°CC: 175 AG: 331 Cab: 03220 Abi: 05584"],
		["BPM 1817", "BANCA POPOLARE DI MILANO - via Appia Nuova, 447-449 Roma IBAN: IT73Z0558403220000000001753 N°CC: 175 AG: 331 Cab: 03220 Abi: 05584"]
	],
	"currency":			["€"],
	"vat_perc":	21,
	"accountingSettings":{
		"currency": {
			"symbol" : "",		// default currency symbol is "$"
			"format": "%v",		// controls output: %s = symbol, %v = value/number (can be object: see below)
			"decimal" : ",",	// decimal point separator
			"thousand": ".",	// thousands separator
			"precision" : 2		// decimal places
		},
		"number": {
			"precision" : 2,	// default precision on numbers is 0
			"thousand": ".",
			"decimal" : ","
		}
	},
	"roles":{
		"admin": {
			"display_name" : "Administrator",
			"admin" : true,
			"write": true,
			"read" : true
		},
		"editor": {
			"display_name" : "Editor",
			"admin" : false,
			"write": true,
			"read" : true
		},
		"viewer": {
			"display_name" : "Viewer",
			"admin" : false,
			"write": false,
			"read" : true
		}
	},
	"googleAnalytics": "UA-8844617-15"
}
if (typeof exports !== "undefined") exports._config = _config;
//if (GLOBAL) GLOBAL._config = _config;
//console.log(GLOBAL._config);
