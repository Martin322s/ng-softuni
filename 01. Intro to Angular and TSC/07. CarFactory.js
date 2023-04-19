function carFactory(input) {
    var resultObj = { model: "", engine: { power: 0, volume: 0 }, carriage: { type: "", color: "" }, wheels: [] };
    var engine = { power: 0, volume: 0 };
    var carriage = { type: "", color: "" };
    resultObj.model = input.model;
    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    }
    else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    }
    else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    resultObj.engine = engine;
    carriage.type = input.carriage;
    carriage.color = input.color;
    resultObj.carriage = carriage;
    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }
    var wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];
    resultObj.wheels = wheels;
    return resultObj;
}
