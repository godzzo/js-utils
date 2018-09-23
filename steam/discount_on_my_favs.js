
var data = [];

for (var code in g_rgAppInfo) {
	var el = g_rgAppInfo[code];
  
	if (el.subs && el.subs.length > 0 && el.subs[0].discount_pct > 0) {
		data.push({name: el.name, price: el.subs[0].price, discount: el.subs[0].discount_pct});
	}
}

data.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));

console.log("Price", data);

data.sort((a,b) => (a.discount_pct > b.discount_pct) ? 1 : ((b.discount_pct > a.discount_pct) ? -1 : 0));

console.log("Price", data);

/*
{
    "name": "Momodora: Reverie Under The Moonlight",
    "capsule": "https://steamcdn-a.akamaihd.net/steam/apps/428550/header_292x136.jpg?t=1518694123",
    "review_score": 9,
    "review_desc": "Overwhelmingly Positive",
    "reviews_total": "4,543",
    "reviews_percent": 95,
    "release_date": "1457082154",
    "release_string": "4 Mar, 2016",
    "platform_icons": "<span class=\"platform_img win\"></span><span class=\"platform_img mac\"></span><span class=\"platform_img linux\"></span>",
    "subs": [
        {
            "id": 88600,
            "discount_block": "<div class=\"discount_block discount_block_large\"> <div class=\"discount_pct\">-40%</div><div class=\"discount_prices\"><div class=\"discount_original_price\">9,99€</div><div class=\"discount_final_price\">5,99€</div></div></div>",
            "discount_pct": 40,
            "price": 599
        },
        {
            "id": 96892,
            "discount_block": "<div class=\"discount_block discount_block_large\"> <div class=\"discount_pct\">-40%</div><div class=\"discount_prices\"><div class=\"discount_original_price\">11,99€</div><div class=\"discount_final_price\">7,19€</div></div></div>",
            "discount_pct": 40,
            "price": 719
        }
    ],
    "type": "Game",
    "screenshots": [
        "ss_051cd90e0d4329259efe71cba64c439cdd607beb.jpg",
        "ss_13295e95e06dc2f83061fe7e788c38e62464c930.jpg",
        "ss_a55bea5554e3c611a740d90bc0cb6281ea4a1eed.jpg",
        "ss_da33aec54363c15d013ee1fdd57e8b429df66f0f.jpg"
    ],
    "review_css": "positive",
    "priority": 0,
    "added": 1530728792,
    "rank": "808",
    "tags": [
        "Action",
        "Adventure",
        "Indie",
        "Platformer",
        "Metroidvania"
    ],
    "win": 1,
    "mac": 1,
    "linux": 1
}
*/
