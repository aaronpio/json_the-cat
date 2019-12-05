const { requestToCatsAPI } = require("./breedFetcher");
const args = process.argv[2];

const breedFetcher = cat => {
  if (cat.length < 1) {
    console.log("Must enter a breed");
    return;
  }
  requestToCatsAPI(cat, (error, desc) => {
    if (error) {
      console.log("Error fetch details: ", error);
    } else {
      console.log(desc);
    }
  });
};

breedFetcher(args);
