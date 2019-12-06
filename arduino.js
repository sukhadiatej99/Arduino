var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
	var temperature = new five.Thermometer({
		controller: "LM35",
		pin: "A0"
	});

	temperature.on("change", function(){
		// console.log(this.celsius + "C", this.fahrenheit + "F")
	});

	var photoresistor = new five.Sensor({
		pin : "A2",
		freq: 250
	});

	photoresistor.on("change",function(){
		console.log("light value:" + this.value);
	});
})