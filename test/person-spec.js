const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person')

describe('Person class', () => {
    let person;
    let person2;
    beforeEach(() => {
    person = new Person('Tyler', 22)
    person2 = new Person("Joshua", 30)
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
    it('should switch the visitor to the visitee', () => {
        let visitation = person2.switchVisit(person)
        expect(visitation).to.equal("Joshua visited Tyler")
    })

    it('should switch the "name" and "age" property of instance', () => {
        let updatedObj = person2.update({name: 'lulu', age: 57})
        expect(updatedObj).to.deep.equal({name: 'lulu', age: 57})
    })
})
