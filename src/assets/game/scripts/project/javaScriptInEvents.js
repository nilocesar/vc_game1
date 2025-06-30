
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function changePlayer(runtime)
{
	// Pega o parâmetro "player" da URL
	const urlParams = new URLSearchParams(window.location.search);
	const playerValue = urlParams.get("player");

	// Verifica se o valor existe
	if (playerValue !== null) {
		// Altera a variável global "player"
		// Acessa pelo runtime
		runtime.globalVars.player = playerValue;
	}
}

function changeScene(runtime)
{
	const urlParams = new URLSearchParams(window.location.search);
	const sceneValue = urlParams.get("scene");

	if (sceneValue !== null) {
		// Lista de layouts válidos
		const validLayouts = ["pink", "pinkBaby", "green", "greenBaby", "blue", "blueBaby"];

		if (validLayouts.includes(sceneValue)) {
			runtime.goToLayout(sceneValue);
		} else {
			console.warn(`Layout "${sceneValue}" não existe.`);
		}
	}
}

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	// 	runtime.addEventListener("mousedown", e => OnMouseDown(e, runtime));
	document.body.style.backgroundColor = 'transparent';
	runtime.addEventListener("tick", () => Tick(runtime));

	changePlayer(runtime);
	changeScene(runtime)
}


function Tick(runtime)
{
	// Code to run every tick
}


function completeFase()
{
	setTimeout(() => {
		parent.postMessage('completeFase', '*');
	}, 1000 * 1 );
	
}

const scriptsInEvents = {

	async Esgame_Event141_Act1(runtime, localVars)
	{
		completeFase()
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
