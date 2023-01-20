class Person {
  private _name2: string[];
  private _age: string[];
  private _address: string[];

  constructor(name2: string[], age: string[], address: string[]) {
    this._name2 = name2;
    this._address = address;
    this._age = age;
  }

  public infoByAge(age: string): string[] {
    for (let i = 0; i < this._age.length; i++) {
      try {
        if (typeof age !== "string") {
          throw new Error(
            `argument must be a string, instead got ${typeof age}`
          );
        } else if (this._age[i] === age) {
          let container: string[] = [];
          container = container.concat(this._name2[i], this._address[i]);
          console.log(container[0] + " " + container[1]);
          return container;
        }
      } catch (error) {
        console.error(error);
      }
    }
    return [];
  }
}

let People = new Person(["Joe Brown"], ["29"], ["1001 Range Rd"]);

People.infoByAge("29");
// People.infoByAge(29); <--- will throw error.
