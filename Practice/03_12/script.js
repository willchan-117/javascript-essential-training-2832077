/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class backpack{
constructor(name, volume) {
    this.name = name;
    this.volume = volume;
    }
}

ToggleLid();{
    console.log('Lid toggled');
}

const myBackpack = new backpack('Hiking Pack', 30);
myBackpack.toggleLid(); // Output: Lid toggled

