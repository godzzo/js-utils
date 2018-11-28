// Make JSON from CSV-GSheet for INSERT sqls for the new event_types!

var data = `location_id	type	options	option_type
string	string	string	string
16	base	9	location
16	base	9,10	location`;

var recs = ParseCSVToArray(data);

console.log( JSON.stringify(recs, null, 4) );

function ParseCSVToArray(data) {
	var list = data.split(/\n/);
	var headRow = list[0];
	var typeRow = list[1];
	
	var head = headRow.split(/\t/);
	var types = typeRow.split(/\t/);
	
	list.shift();
	
	var recs = [];
	
	list.forEach(function(element) {
		var vals = element.split(/\t/);
		var rec = {};
	
		head.forEach(function(name, idx) {
			var value = vals[idx];
			var type = types[idx];

			if (type == "int") {
				value = parseInt(value);
			} else if (type == "float") {
				value = parseFloat(value);
			}

			rec[name] = value;
		});
		
		recs.push(rec);
	});
	
	return recs;
}
