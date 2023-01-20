var Person = /** @class */ (function () {
    function Person(name2, age, address) {
        this._name2 = name2;
        this._address = address;
        this._age = age;
    }
    Person.prototype.infoByAge = function (age) {
        for (var i = 0; i < this._age.length; i++) {
            try {
                if (typeof age !== "string") {
                    throw new Error("argument must be a string, instead got ".concat(typeof age));
                }
                else if (this._age[i] === age) {
                    var container = [];
                    container = container.concat(this._name2[i], this._address[i]);
                    console.log(container[0] + " " + container[1]);
                    return container;
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        return [];
    };
    return Person;
}());
var People = new Person(["Joe Brown"], ["29"], ["1001 Range Rd"]);
People.infoByAge("29");
// People.infoByAge(29); <--- will throw error.
