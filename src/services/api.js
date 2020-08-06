const getDataFromApi = () => {
  console.log('pidiendo datos');
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default getDataFromApi;
