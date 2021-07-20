function Car(name) {
    this.name = name;
    this.isTurnOn =  false;
    this.speed = 0;
    this.engine = {
        v: 1.6,
        horsesPower: 120,
        isTurnOn: false
    };
}
Car.prototype.start = function (params) {
    


        this.isTurnOn = true;
        this.speed = 10;
        this.engine.isTurnOn = true;
        console.log (this.name, this.speed)
    }


var renault = new Car('Renault');
renault.start();

var mercedes = new Car('Mercedes');
mercedes.start();