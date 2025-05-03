function printInfo(name,age){
    this.name=name;
    this.age=age;
}
let person=new printInfo("Ульяна",31)
console.log(person)