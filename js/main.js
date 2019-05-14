(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

//select elements with Javascript

//setting up a variable using the 'let' keyword and using a CSS selector to find the element we want to use
	
//let stores the reference to element as a variable (in memory)
	let svgGraphic = document.querySelector("#badgeSVG");

	function logMyID() {
		console.log(this.id);

		this.style.opacity = 0.5;
}

//whenever this event happens (in this case a click), make sure to do this thing (log ID)
	svgGraphic.addEventListener("click", logMyID);

})();