/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When in the global scope, the value of “this” will be the window/console Object;
* 2. Implicit Binding -A function is called by a preceding dot, the object to the left of the dot gets "this".
* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - directly telling "this" what we are referring to by using .call, .apply or .bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Jasyn");

// Principle 2

// code example for Implicit Binding

const canDo = {
    greeting: 'Hi',
    giveGreeting: function(name){
        console.log (`${this.greeting} I'm ${name} look at me!`);
        console.log(this);
    }
};

canDo.giveGreeting("Jasyn");

// Principle 3

// code example for New Binding

function ConstructorThis() {
	this.binding = 'New Binding';
}
console.log('Principle 3:', (new ConstructorThis()));

// Principle 4

// code example for Explicit Binding

