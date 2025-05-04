let person = {};
function setFullName(name) {
  this.fullName = name;
}
let setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person.fullName);