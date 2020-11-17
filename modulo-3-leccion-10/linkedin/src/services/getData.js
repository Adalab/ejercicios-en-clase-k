import ProfilesFullList from "../data/profiles.json";

function fetchData() {
  return ProfilesFullList;
}

function getCities() {
  return ProfilesFullList.map(
    (personData) => personData.city
  );
}



export { fetchData, getCities };