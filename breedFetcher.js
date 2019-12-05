const request = require("request");
const args = process.argv.slice(2);

const requestCatsAPI = cat => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${cat}`,
    (err, res, body) => {
      if (err) {
        console.log("Error with URL");
        return err;
      } else if (body.length <= 2) {
        console.log("breed not found");
        return;
      } else {
        const data = JSON.parse(body);
        console.log("\n-------------------------------------\n");
        console.log(data);
        console.log("\n-------------------------------------\n");
        return data;
      }
    }
  );
};

const breedFetcher = cats => {
  if (cats.length < 1) {
    console.log("Must enter atleast one breed");
    return;
  }

  for (const cat of cats) {
    requestCatsAPI(cat);
  }
};

breedFetcher(args);
