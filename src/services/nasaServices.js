/* eslint-disable */
const NASA_ENDPOINT = 'https://images-api.nasa.gov';

function searchJob(criteria) {
  return new Promise((resolve, reject) => {
    fetch(`${NASA_ENDPOINT}/search?q=${criteria}`)
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => reject(error));
  });
}

function getMediaAssets(nasaId) {
  return new Promise((resolve, reject) => {
    fetch(`${NASA_ENDPOINT}/asset/${nasaId}`)
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => reject(error));
  });
}

export {
  searchJob,
  getMediaAssets,
};
