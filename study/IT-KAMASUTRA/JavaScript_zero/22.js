var car1 = {
    name: 'Renault Stepway',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120
    }, 
    start: function (params) {
        this.isTurnOn = true,
        this.speed = 10
    }
};