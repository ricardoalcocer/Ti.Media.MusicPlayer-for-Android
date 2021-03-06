// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var musicplayer = require('com.activate.musicplayer');
Ti.API.info("module is => " + musicplayer);

label.text = musicplayer.example();

Ti.API.info("module exampleProp is => " + musicplayer.exampleProp);
musicplayer.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = musicplayer.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	window.add(proxy);
}

