class User{
    firstName:String;
    age:number=10;
    constructor(fName: String){
        this.firstName=fName;
    }
    public eat(){
        console.log(this.firstName +' is eating');
    }
}

const u1:User = new User('Ram');
u1.age=20;
console.log(u1);
u1.eat();

//--------------inheritance
class Employee extends User{
    salary:number;
    age=20;//this masks super class value 10
    eat(){
        console.log('employee');
        super.eat();//calling superclass
    }
}

const e1:Employee = new Employee('John');
console.log(e1.age);

e1.eat();