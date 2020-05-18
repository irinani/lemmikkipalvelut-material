const HCCrawler = require("headless-chrome-crawler");
const Crawler = require("crawler");

const fs = require("fs");
const vets = [];
let val1 = 0;
let val2 = 0;

(async () => {
  const crawler = await HCCrawler.launch({
    // Function to be evaluated in browsers
    evaluatePage: () => {
      let vets = [];
      $(".clinic").each(function () {
        vets.push({
          title: $(this).find(".clinic-title").text().trim(),
          link: $(this).find(".clinic-links a:first-of-type").attr("href"),
        });
      });
      return vets;
    },
    // Function to be called with evaluated results from browsers
    onSuccess: (result) => {
      //   console.log(result.result);
      result.result.map((e, i) => {
        c2.queue({
          name: e.title,
          uri: e.link,
        });
        val1++;
      });
    },
  });
  // Queue a request
  await crawler.queue("https://evidensia.fi/elainlaakariasemat/#/");
  await crawler.onIdle(); // Resolved when no queue is left
  await crawler.close(); // Close the crawler
})();

var c2 = new Crawler({
  maxConnections: 10,
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      //   const name = $(".pageHero-content--title").text().trim();
      const addressString = $(".detailsBar-item:first-of-type").text().trim();
      const address = addressString.substr(0, addressString.indexOf(","));
      const postalCode = addressString.match(/\d{5}?/g);
      const city = addressString.match(/\S*$/)[0];
      const email = $(".detailsBar-item:nth-of-type(2)").text().trim();
      const phone = $(".detailsBar-item:nth-of-type(3)").text().trim();
      let openingHours = [];

      $(".table--green")
        .find("tr")
        .map(function (i, e) {
          const weekday = $(e).find("td:first-of-type").text();
          const hours = $(e).find("td:nth-of-type(2)").text();
          openingHours.push({
            weekday: weekday,
            hours: hours,
          });
        });

      const vet = {
        name: `${res.options.name}`,
        url: res.options.uri,
        phone: phone,
        email: email,
        isOpenToday: false,
        openingHours: openingHours,
        address: address,
        postalCode: postalCode ? postalCode.pop() : "ei postinumeroa",
        city: city,
      };
      //   console.log(vet);
      vets.push(vet);
      val2++;
    }
    done();
    console.log("moro, ajoin just");

    if (val1 === val2 && val2 !== 0) {
      //   console.log(vets);
      //   fs.appendFileSync("../utils/vets.js", vets.toString());
      fs.appendFileSync(
        "../utils/vets.js",
        JSON.stringify(vets, null, 2),
        "utf-8"
      );
    }
  },
});
