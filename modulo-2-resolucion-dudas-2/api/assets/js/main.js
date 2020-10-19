"use strict";

const firstUsername = document.querySelector(".js-firstusername");
const listaNombres = document.querySelector(".js-allusernames");

const oysterCards = {
  count: 3,
  prev: "",
  results: [
    {
      name: "Dayana",
      id: "SC00001",
      expireDate: "2020-12-12",
    },
    {
      name: "Miguel",
      id: "SC00002",
      expireDate: "2020-12-24",
    },
    {
      name: "Iván",
      id: "SC00003",
      expireDate: "2020-14-12",
    },
  ],
};

console.log(oysterCards.results[0].name);

firstUsername.innerHTML = oysterCards.results[0].name;

/* for (let i = 0; i < oysterCards.results.length; i++) {
  listaNombres.innerHTML += `<li>${oysterCards.results[i].name}</li>`;
} */

const cardList = oysterCards.results;

/* for (let i = 0; i < cardList.length; i++) {
  debugger;
  const oneCardData = cardList[i];
  listaNombres.innerHTML += `<li>${oneCardData.name}</li>`;
} */

for (const oneCardData of cardList) {
  listaNombres.innerHTML += `<li>${oneCardData.name}</li>`;
}

fetch("https://igarrido.es/api/oyster")
  .then((request) => request.json())
  .then((oysterCards) => {
    console.log(oysterCards.results[0].name);

    firstUsername.innerHTML = oysterCards.results[0].name;

    const cardList = oysterCards.results;

    for (const oneCardData of cardList) {
      listaNombres.innerHTML += `<li>${oneCardData.name}</li>`;
    }
  });

/*   fetch("https://igarrido.es/api/oyster")
    .then(function (request) {
      return request.json();
    })
    .then(function (oysterCards) {
      console.log(oysterCards.results[0].name);

      firstUsername.innerHTML = oysterCards.results[0].name;

      const cardList = oysterCards.results;

      for (const oneCardData of cardList) {
        listaNombres.innerHTML += `<li>${oneCardData.name}</li>`;
      }
    }); */
