function People() {}

People.prototype.name = {
  set: (name) => this.nickName = name,
  get: () => this.name
}

Object.defineProperties(People.prototype, {
  name: {
    set: function(name) {
      console.log(this) // People
      this.nickName = name
    },
    get: () => this.name
  }
})

const person1 = new People();
console.log(People.prototype.name) // undefined
person1.name = 'xiaohua';
console.log(person1.name) // undefined 
console.log(People.prototype.name) // undefined
console.log(person1.nickName) // xiaohua