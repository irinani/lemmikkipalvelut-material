const Crawler = require("crawler");

const fs = require("fs");
const stores = [];
let val1 = 0;
let val2 = 0;

var c = new Crawler({
	maxConnections: 10,
	// This will be called for each crawled page
	callback: function (error, res, done) {
		if (error) {
			console.log(error);
		} else {
			var $ = res.$;
			// $ is Cheerio by default
			//a lean implementation of core jQuery designed specifically for the server
			const storeItem = $("#storelist").find(".store-container");
			// const stores = [];
			storeItem.each(function () {
				const link = $(this).find("a").attr("href");
				const name = $(this).attr("data-name");

				c2.queue({
					uri: link,
					name: name,
				});
				val1++;
			});
		}
		done();
	},
});

// Queue just one URL, with default callback
c.queue("https://www.mustijamirri.fi/info/myymalat/");

var c2 = new Crawler({
	maxConnections: 10,
	callback: function (error, res, done) {
		if (error) {
			console.log(error);
		} else {
			var $ = res.$;
			let openingHours = [];
			// let store;
			const addressString = $('h4:contains("Yhteystiedot")')
				.next("div")
				.find("div.col-8.lg-col-8")
				.text();
			const address = addressString.substr(0, addressString.indexOf(","));
			const postalCode = addressString.match(/\d{5}?/g)[0];
			const city = addressString.match(/\S*$/)[0];
			const phone = $('h4:contains("Yhteystiedot")')
				.next("div")
				.next("div")
				.find("div.col-8.lg-col-8")
				.text();

			$("h4:first-of-type")
				.next("div")
				.find("div.col-12.flex > div.col-4.lg-col-4")
				.map(function (i, e) {
					openingHours.push({
						weekday: $(e)
							.text()
							.replace(/[^a-zA-Z ]/g, ""),
						hours: $(e).next("div").text(),
					});
				});

			const store = {
				name: `Musti ja Mirri ${res.options.name}`,
				url: res.options.uri,
				openingHours: openingHours,
				address: address,
				postalCode: postalCode,
				city: city,
				phone: phone,
				isOpenToday: false,
			};

			// console.log(store);

			stores.push(store);
			val2++;
		}
		done();
		// console.log("ajettu");

		if (val1 === val2 && val2 !== 0) {
			console.log(stores);
			fs.appendFileSync(
				"../utils/stores.js",
				JSON.stringify(stores, null, 2),
				"utf-8"
			);
		}
	},
});
