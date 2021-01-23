
(function (name) {

	for (var i = 0; i < names.length; i++) {

	
	console.log("Good Bye" + "" + name);
	
	if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
	
})


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 var byeSpeaker ="speak";

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
//function speak(name) {
  //console.log(speakWord + " " + name);
//}

(function(window){
	var byeSpeaker={};
	var speakWord="Good Bye";
	byeSpeaker.speak=function(name){console.log(speakWord + " " + name);}
	window.byeSpeaker=byeSpeaker;
})(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
window.byeSpeaker = byeSpeaker;