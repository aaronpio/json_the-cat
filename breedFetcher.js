const request = require("request");

const requestToCatsAPI = (cat, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${cat}`,
    (err, res, body) => {
      if (err) {
        callback(err, null);
      } else if (body.length <= 2) {
        callback(`(Non-existant Breed) ${err}`, null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description.trim());
      }
    }
  );
};

module.exports = { requestToCatsAPI };
