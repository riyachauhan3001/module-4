(function (name)
 {
	for (var i = 0; i < names.length; i++)
	 {

	
	console.log("Hello" + name);
	
	if (firstLetter !== 'j') {
    helloSpeaker.speak(names[i]);
  } 
  else
   {
    byeSpeaker.speak(names[i]);
  }
}
})
//("Yaakov");



//var names = []();

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 var helloSpeaker = "speak";

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
//function speak(name) {
  //console.log(speakWord + " " + name);
//}

(function(window){
	var helloSpeaker={};
	var speakWord="Hello";
	helloSpeaker.speak=function(name){console.log(speakWord + " " + name);}
	window.helloSpeaker=helloSpeaker;
})(window);
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
window.helloSpeaker=helloSpeaker;

// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;