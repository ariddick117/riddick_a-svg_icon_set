(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

//select elements with Javascript

//setting up a variable using the 'let' keyword and using a CSS selector to find the element we want to use
	
//let stores the reference to element as a variable (in memory)
	let ana = document.querySelector("#ana");

	function logMyID() {
		console.log(this.id);

		this.style.opacity = 0.5;
}

//whenever this event happens (in this case a click), make sure to do this thing (log ID)
	ana.addEventListener("click", logMyID);
	bastion.addEventListener("click", logMyID);
	doomfist.addEventListener("click", logMyID);
	dva.addEventListener("click", logMyID);
	genji.addEventListener("click", logMyID);
	hanzo.addEventListener("click", logMyID);
	junkrat.addEventListener("click", logMyID);
	lucio.addEventListener("click", logMyID);
	mcCree.addEventListener("click", logMyID);
	mei.addEventListener("click", logMyID);
	mercy.addEventListener("click", logMyID);
	orisa.addEventListener("click", logMyID);
	pharah.addEventListener("click", logMyID);
	reaper.addEventListener("click", logMyID);
	reinhardt.addEventListener("click", logMyID);
	roadhog.addEventListener("click", logMyID);
	soldier.addEventListener("click", logMyID);
	sombra.addEventListener("click", logMyID);
	symmetra.addEventListener("click", logMyID);
	torbjorn.addEventListener("click", logMyID);
	tracer.addEventListener("click", logMyID);
	widowmaker.addEventListener("click", logMyID);
	winston.addEventListener("click", logMyID);
	zarya.addEventListener("click", logMyID);
	zenyatta.addEventListener("click", logMyID);

})();