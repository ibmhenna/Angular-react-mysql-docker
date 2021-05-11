var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(fName) {
        this.age = 10;
        this.firstName = fName;
    }
    User.prototype.eat = function () {
        console.log(this.firstName + ' is eating');
    };
    return User;
}());
var u1 = new User('Ram');
u1.age = 20;
console.log(u1);
u1.eat();
//--------------inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 20; //this masks super class value 10
        return _this;
    }
    Employee.prototype.eat = function () {
        console.log('employee');
        _super.prototype.eat.call(this); //calling superclass
    };
    return Employee;
}(User));
var e1 = new Employee('John');
console.log(e1.age);
e1.eat();
