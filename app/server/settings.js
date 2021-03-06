var _config = {
    "cp_basepath":		"controlpanel",
    "usersListItems":	6,
	"cpanel":			{
		"account":			{
			"title":			"Performers",
			"limit":			20,
			"basepath":			"performers",
			"coll":				"users",
			"view_list":		"performers",
			"view_edit":		"user",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1},
			"orders":			[
									"mostrecent",
									"mostactive"
								],
			"sortQ":	{
				"mostrecent":{"creation_date": 		-1},
				"mostactive":{"stats.performances":	-1}
			},
			"labels":	{
				"mostrecent":"Most recent",
				"mostactive":"Most active"
			}
		}
	},
	"sections":			{
		"performers":		{
			"title":			"Performers",
			"limit":			20,
			"basepath":			"performers",
			"coll":				"users",
			"view_list":		"performers",
			"view_edit":		"user",

			"list_fields":	{"display_name":1,"permalink":1,"files":1,"stats":1},
			"orders":			[
									"mostactive",
									"mostrecent"
								],
			"categories":		[
									"all",
									"individuals",
									"crews"
								],
			"searchQ":	{
				"all":				{},
				"individuals":		{"is_crew":	0},
				"crews":			{"is_crew":	1}
			},
			"sortQ":	{
				"mostactive":{"activity":			-1},
				"mostrecent":{"creation_date": 		-1}
			},
			"labels":	{
				"mostrecent":"Most recent",
				"mostactive":"Most active",
				"all":"All",
				"individuals":"Individuals",
				"crews":"Crews"
			}
		},
		"crews":		{
			"title":			"Crews",
			"limit":			20,
			"basepath":			"crews",
			"coll":				"users"
		},
		"members":		{
			"title":			"Members",
			"limit":			20,
			"basepath":			"members",
			"coll":				"users"
		},
		"events":		{
			"title":			"Events",
			"limit":			20,
			"basepath":			"events",
			"coll":				"events",
			"view_list":		"events",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1,"date_time_venue":1},
			"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all",
									"clubbing",
									"corporate",
									"festival",
									"one-night",
									"television", 
									"workshops-learning"
								],
			"searchQ":	{
				"all":					{},
				"clubbing":				{"categories.permalink":	"clubbing"},
				"corporate":			{"categories.permalink":	"corporate"},
				"festival":				{"categories.permalink":	"festival"},
				"one-night":			{"categories.permalink":	"one-night"},
				"television":			{"categories.permalink":	"television"}, 
				"workshops-learning":	{"categories.permalink":	"workshops-learning"}
			},
			"sortQ":	{
				"mostrecent":	{"date_time_venue.0.date": 	-1},
				"mostviewed":	{"stats.visits":	-1},
				"mostrated":	{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":			"Most recent",
				"mostviewed":			"Most viewed",
				"mostrated":			"Most rated",
				"all":					"All",
				"individuals":			"Individuals",
				"clubbing":				"Clubbing",
				"corporate":			"Corporate",
				"festival":				"Festival",
				"one-night":			"One night",
				"television":			"Television", 
				"workshops-learning":	"Workshops & learning"

			},
			"permissions":	{
				"administrator":			"Administrator",
				"editor":					"Editor",
				"viewer":					"Viewer"

			}
		},
		"performances":		{
			"title":			"Performances",
			"limit":			20,
			"basepath":			"performances",
			"coll":				"performances",
			"view_list":		"performances",

 			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1},
	   		"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all",
									"av-performance",
									"vj-set",
									"workshop",
									"project-showcase",
									"dj-set"
								],
			"searchQ":	{
				"all":				{},
				"av-performance":	{"categories.permalink":	"av-performance"},
				"vj-set":			{"categories.permalink":	"vj-set"},
				"workshop":			{"categories.permalink":	"workshop"},
				"project-showcase":	{"categories.permalink":	"project-showcase"},
				"dj-set":			{"categories.permalink":	"dj-set"}
			},
			"sortQ":	{
				"mostrecent":	{"creation_date": 		-1},
				"mostviewed":	{"stats.visits":	-1},
				"mostrated":	{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":		"Most recent",
				"mostviewed":		"Most viewed",
				"mostrated":		"Most rated",
				"all":				"All",
				"av-performance":	"AV Performance",
				"vj-set":			"VJ Set",
				"dj-set":			"DJ Set",
				"project-showcase":	"Project Showcase",
				"workshop":			"Workshop"
			}
		},
		"tvshows":		{
			"title":			"TV Shows",
			"limit":			20,
			"basepath":			"tvshows",
			"coll":				"tvshow",
			"view_list":		"tvshows",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1,"palinsestodate":1},
			"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all",
									"performances",
									"vj-dj-sets",
									"docs",
									"video"
								],
			"searchQ":	{
				"all":				{},
				"performances":		{"categories.permalink":	"performances"},
				"vj-dj-sets":		{"categories.permalink":	"vj-dj-sets"},
				"docs":				{"categories.permalink":	"docs"},
				"video":			{"categories.permalink":	"video"}
			},
			"sortQ":	{
				"mostrecent":	{"creation_date": 		-1},
				"mostviewed":	{"stats.visits":	-1},
				"mostrated":	{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":	"Most recent",
				"mostviewed":	"Most viewed",
				"mostrated":	"Most rated",
				"all":"All",
				"performances":		"AV Performance",
				"vj-dj-sets":		"VJ-DJ Sets",
				"docs":				"Docs",
				"video":			"Video"
			}
		},
		"footage":		{
			"title":			"Footage",
			"limit":			20,
			"basepath":			"footage",
			"coll":				"footage",
			"view_list":		"footage",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1},
			"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all",
									"hole",
									"no-hole",
									"koncept"
								],
			"searchQ":	{
				"all":				{},
				"hole":				{"tag.tag":	"hole"},
				"no-hole":			{"tag.tag":	"no-hole"},
				"koncept":			{"tag.tag":	"koncept"}
			},
			"sortQ":	{
				"mostrecent":	{"creation_date": 		-1},
				"mostviewed":	{"stats.visits":	-1},
				"mostrated":	{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":	"Most recent",
				"mostviewed":	"Most viewed",
				"mostrated":	"Most rated",
				"all":			"All",
				"hole":			"Hole",
				"no-hole":		"No Hole",
				"koncept":		"Koncept"
			}
		},
		"playlists":		{
			"title":			"Playlists",
			"limit":			20,
			"basepath":			"playlists",
			"coll":				"playlists",
			"view_list":		"playlists",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"categories":1,"stats":1},
			"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all"
								],
			"searchQ":	{
				"all":				{}
			},
			"sortQ":	{
				"mostrecent":		{"creation_date": 		-1},
				"mostviewed":		{"stats.visits":	-1},
				"mostrated":		{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":		"Most recent",
				"mostviewed":		"Most viewed",
				"mostrated":		"Most rated",
				"all":				"All"
			}
		},
		"gallery":		{
			"title":			"Gallery",
			"limit":			20,
			"basepath":			"gallery",
			"coll":				"gallery",
			"view_list":		"gallery",

			"list_fields":	{"title":1,"users":1,"permalink":1,"files":1,"stats":1},
			"orders":			[
									"mostrecent",
									"mostviewed",
									"mostrated"
								],
			"categories":		[
									"all"
								],
			"searchQ":	{
				"all":				{}
			},
			"sortQ":	{
				"mostrecent":		{"creation_date": 		-1},
				"mostviewed":		{"stats.visits":	-1},
				"mostrated":		{"stats.tot_rate":	-1}
			},
			"labels":	{
				"mostrecent":		"Most recent",
				"mostviewed":		"Most viewed",
				"mostrated":		"Most rated",
				"all":				"All"
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
	}
}
if (typeof exports !== "undefined") exports._config = _config;
//if (GLOBAL) GLOBAL._config = _config;
//console.log(GLOBAL._config);
