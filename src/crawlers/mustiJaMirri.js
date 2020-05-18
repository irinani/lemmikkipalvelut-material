const Crawler = require("crawler");
const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   "mongodb+srv://user:user@lemmikkipalvelut-dqxmg.gcp.mongodb.net/stores?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

const storeSchema = new mongoose.Schema({
  name: String,
  url: String,
  phone: String,
  openingHours: Array,
  address: String,
  postalCode: String,
  city: String,
});

const Store = mongoose.model("Store", storeSchema);

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("we're connected!");
//   console.log(db);
//   c.queue("https://www.mustijamirri.fi/info/myymalat/");
// });
// mongoose.connect(
//   "mongodb+srv://user:<user>@lemmikkipalvelut-dqxmg.gcp.mongodb.net/test?retryWrites=true&w=majority"
// );

const DB_USER = "user";
const DB_PASS = "user";
const DB_DATABASE = "testikanta";
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-dqxmg.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("tietokanta yhdistetty!");
    c.queue("https://www.mustijamirri.fi/info/myymalat/");
  })
  .catch((err) => {
    console.log(err);
  });

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
      const stores = [];
      storeItem.each(function () {
        const link = $(this).find("a").attr("href");
        const name = $(this).attr("data-name");

        c2.queue({
          uri: link,
          name: name,
        });
      });
    }
    done();
  },
});

// Queue just one URL, with default callback
// c.queue("https://www.mustijamirri.fi/info/myymalat/");

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

      const store = new Store({
        name: `Musti ja Mirri ${res.options.name}`,
        url: res.options.uri,
        openingHours: openingHours,
        address: address,
        postalCode: postalCode,
        city: city,
        phone: phone,
        isOpenToday: false,
      });

      store
        .save()
        .then(() => {
          console.log("Tallennettu tämmönen data", store.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    done();
  },
});
