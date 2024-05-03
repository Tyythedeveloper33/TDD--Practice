class Person {
  constructor(name, age ){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return `Hello my name is ${this.name}`
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson}`
  }

  switchVisit(otherPerson) {
    let boundFunc = this.visit.bind(this)
    return boundFunc(otherPerson.name)
  }

  update(Obj) {
    this.name = Obj.name
    this.age = Obj.age
    return this;
  }
}



module.exports = Person;
