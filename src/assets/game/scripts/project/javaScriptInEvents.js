
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	// 	runtime.addEventListener("mousedown", e => OnMouseDown(e, runtime));
	document.body.style.backgroundColor = 'transparent';
	runtime.addEventListener("tick", () => Tick(runtime));
}


function Tick(runtime)
{
	// Code to run every tick
}


function completeFase()
{
	//
	setTimeout(() => {
		parent.postMessage('completeFase', '*');
	}, 1000 * 1 );
	
}

const scriptsInEvents = {

	async Esgame_Event74_Act1(runtime, localVars)
	{
		completeFase()
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
