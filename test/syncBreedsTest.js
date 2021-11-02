const breedDetails = require("../syncBreeds");
const { expect } = require("chai");

describe('#breedDetails', () => {

  it('returns breed details for the Bombay breed', () => {
    const result = breedDetails("Bombay");
    const expectedStr = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
    expect(result).to.equal(expectedStr);
  });

  it('returns breed details for the Balinese breed', () => {
    const result = breedDetails("Balinese");
    const expectedStr = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."
    expect(result).to.equal(expectedStr);
  });

  it('returns undefined when breed name is not provided', () => {
    const result = breedDetails();
    const expected = undefined;
    expect(result).to.equal(expected);
  });
  
});