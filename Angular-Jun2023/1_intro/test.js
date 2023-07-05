var isEven = false;
var num = 5;
var str = '';
var peshoUser = {
    name: 'Pesho',
    age: 21
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    ;
    return AnotherUserClass;
}());
var anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
];
anotherUserList.forEach(function (user) {
    user.id += 1;
});
