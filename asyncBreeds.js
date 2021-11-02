const fs = require('fs');

const displayData = (data) => {
  console.log('Return Value: ', data);
};

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) return callback(data);
    callback(undefined);
  });
};

breedDetailsFromFile('Bombaydffg', displayData);

module.exports = breedDetailsFromFile;