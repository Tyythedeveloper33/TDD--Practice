const chai = require("chai");
const expect = chai.expect;
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe ("returnsThree", () => {


    it("Should return three", () => {
        let value = returnsThree();
        expect(value).to.equal(3)
    })
})

describe ("reciprocal", () => {


    it ("Should take a number and return the reciprocal of that number", () => {
        let num = reciprocal(4)
        expect(num).to.equal(1/4);
    })
})
