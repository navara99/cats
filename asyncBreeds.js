const fs = require('fs');
const breedDetails = require('./syncBreeds');

const displayData = (data)=> {
  console.log('Return Value: ', data);
}

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) return callback(data);
  });
};

breedDetailsFromFile('Bombay', displayData);

module.exports = breedDetailsFromFile;