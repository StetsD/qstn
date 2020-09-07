"use strict";

let person = {
  name: "Boris",
  say() { console.log(this.name) }
}

let example = person.say;

example();

// Чем будет результат вызова функции ?