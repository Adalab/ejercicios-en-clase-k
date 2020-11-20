

function fetchData() {
  return fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((dataJSON) => {
      const cleanData = dataJSON.results.map((personData) => {
        return {
          id: personData.login.uuid,
          username: personData.login.username,
          city: personData.location.city,
          country: personData.location.country,
          name: personData.name.first + " " + personData.name.last,
          email: personData.email,
          gender: personData.gender,
          image: personData.picture.thumbnail,
        };
      });

      return cleanData;
    });
}




export { fetchData };