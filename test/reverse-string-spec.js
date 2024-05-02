// Your code here

const chai = require("chai");
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')

describe('Reverse String', function () {
    let string;

    beforeEach(() => {
        string = 'fun'
    })

    it('should return the reversed string', () => {
        let reversedString = reverseString(string)
        expect(reversedString).to.equal('nuf')
    })
    it('should throw an error if arg is not a string', () => {
     const number = 1
     const object = {a:1}
     const array = [1,2]

     expect(() => reverseString(number)).to.throw(Error)
     expect(() => reverseString(object)).to.throw(Error)
     expect(() => reverseString(array)).to.throw(Error)
    })

})
