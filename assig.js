var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request.send();
request.onload = function () {
  let output = JSON.parse(request.response);
  console.log(output);

  let asiaCountries = output.filter((i) => i.region == "Asia");
  console.log(
    `The number of Asian regions is ${asiaCountries.length} and they are`
  );
  for (let i of asiaCountries) {
    console.log(i.name);
  }

  console.log(
    "**************************************Countries having population less than 2lakhs*********************************"
  );
  let countriesLessThanTwoLakhs = output.filter((i) => i.population < 200000);
  console.log(
    `The number of countries with a population less than two lakhs is ${countriesLessThanTwoLakhs.length} and they are`
  );
  for (let i of countriesLessThanTwoLakhs) {
    console.log(i.name);
  }

  console.log(
    "**************************************Name ,capital and flag details for each countries*********************************"
  );
  output.forEach((e) => {
    console.log(
      `Country's Name :${e.name}\nCountry's capital is :${e.capital}\nCountry's flag is :${e.flag}`
    );
  });

  console.log(
    "**************************************Total population of countries*********************************"
  );
  let pop = output.map((i) => i.population);
  let sum = pop.reduce((a, b) => a + b);
  console.log(`The total population of the countries is ${sum}`);

  console.log(
    "**************************************Countries using US dollars as currency*********************************"
  );

  let USDCountries = output.filter((i) => i.currencies[0].code === "USD");
  console.log(
    `The number of countries using US dollars as their currency is ${USDCountries.length}`
  );

  for (let i of USDCountries) {
    console.log(
      `Country's Name :${i.name}\nCountry's currency is :${i.currencies[0].code}`
    );
  }
};
