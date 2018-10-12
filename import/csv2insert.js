// Make JSON from CSV-GSheet for INSERT sqls for the new event_types!

var data = `id	name	totalamount	price
1001	Something	4	8000
1002	FooBar	9	655
`;

// CSV to JSON!

var list = data.split(/\n/);
var headRow = list[0];

var head = headRow.split(/\t/);

list.shift();

var recs = [];

list.forEach(function(element) {
	var vals = element.split(/\t/);
	var rec = {};

	head.forEach(function(name, idx) {
		rec[name] = vals[idx];
	});
	
	recs.push(rec);
});

recs;

// Make INSERT sqls for the new event_types!

var table = "tools";
var sqls = [];

recs.forEach(function(rec) {
	let keys = Object.keys(rec);
	let names = keys.join(", ");
	let vals = [];

	keys.forEach(function(key) {
		let value = rec[key];
		
		vals.push(`'${value}'`);
	});
	
	let values = vals.join(", ");
	let sql = `INSERT INTO ${table} (${names}) VALUES (${values});`;
	
	sqls.push(sql);
});

sqls.join("\n");
