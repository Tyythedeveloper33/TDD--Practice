const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person')

describe('Person class', () => {
    let person;
    beforeEach(() => {
    person = new Person('Tyler')
    })

    it('should create an instance of person class', () => {
        expect(person).to.exist
    })

    it('should have properties of "name"', ()=>{
        expect(person).to.have.property('name'  )
    })
    it('should have properties of "age"', ()=>{
        expect(person).to.have.property('age')
    })
    it('should have method sayHello', ()=>{

        expect(person.sayHello).to.exist
    })
    it('sayHello should return a greeting ' ,()=>{
        let message = person.sayHello()
        expect(message).to.equal(`Hello my name is ${person.name}`)
    })
    it('should have method "visit"', ()=>{
        expect(person.visit).to.exist
    })
    it('should return visitation"', ()=>{

        let visitation = person.visit("Joshua")
        expect(visitation).to.equal('Tyler visited Joshua')
    })
})
