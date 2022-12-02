var MATHS_JS = {};
MATHS_JS.makeMultiplier = function (multiplier){
	return(
			function multiply(x){
				return multiplier * x;
			}
		)
}
MATHS_JS.multiplyby3 = MATHS_JS.makeMultiplier(3);
console.log(MATHS_JS.multiplyby3(5));

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}