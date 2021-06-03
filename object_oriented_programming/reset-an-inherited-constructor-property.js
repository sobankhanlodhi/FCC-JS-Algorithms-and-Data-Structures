/*
                            Reset an Inherited Constructor Property
When an object inherits its prototype from another object, it also inherits the supertype's 
constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor

Task:
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck = new Bird();
let beagle = new Dog();

Fix the code so duck.constructor and beagle.constructor return their respective constructors.

*/

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();