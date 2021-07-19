function Dog(name) {
    this.myname = name;
    this.voice = function() {
        console.log('Hey, my name is ' + this.myname) //!!! РАЗОБРАТЬСЯ С name!!!
    }
}

var chauchau = new Dog('Laika');
var buldog = new Dog('Sharik');

chauchau.voice();
buldog.voice();