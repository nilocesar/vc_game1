const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.gamepad,
		C3.Plugins.Arr,
		C3.Plugins.LocalStorage,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.Sin,
		C3.Plugins.Tilemap,
		C3.Plugins.Spritefont2,
		C3.Plugins.TiledBg,
		C3.Behaviors.Fade,
		C3.Behaviors.destroy,
		C3.Behaviors.Bullet,
		C3.Behaviors.Tween,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Behaviors.Flash,
		C3.Behaviors.Platform,
		C3.Behaviors.LOS,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.System.Exps.max,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Behaviors.Platform.Cnds.CompareSpeed,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.gamepad.Cnds.IsButtonDown,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Flash.Cnds.IsFlashing,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Flash.Cnds.OnFlashEnded,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.AddVar,
		C3.JavaScriptInEvents.Esgame_Event141_Act1,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Sin.Acts.SetPhase,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.Flash.Acts.StopFlashing,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Audio.Acts.SetMasterVolume,
		C3.Plugins.Audio.Cnds.IsAnyPlaying,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.TiledBg.Acts.SetPos,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.LocalStorage.Acts.ClearStorage,
		C3.Plugins.Arr.Acts.Clear,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Plugins.Sprite.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Audio: 0},
	{Keyboard: 0},
	{Touch: 0},
	{Gamepad: 0},
	{Array: 0},
	{LocalStorage: 0},
	{Pin: 0},
	{btnNo: 0},
	{btn_yes: 0},
	{btn_Right: 0},
	{btn_continue: 0},
	{btn_Left: 0},
	{btn_home: 0},
	{btn_SoundOnOff: 0},
	{btn_menu: 0},
	{Fixar: 0},
	{btn_fullscreen: 0},
	{btn_pause: 0},
	{btn_no_newgame: 0},
	{targetX: 0},
	{btn_newGame2: 0},
	{btn_yes_newgame: 0},
	{btn_back: 0},
	{btn_back02: 0},
	{level: 0},
	{btn_back_initialScreen: 0},
	{btn_Jump: 0},
	{btn_newGame: 0},
	{btn_nextLevel: 0},
	{btn_credits: 0},
	{btn_controls: 0},
	{btnFull: 0},
	{btnAudio: 0},
	{btnMenu: 0},
	{Sine: 0},
	{coins: 0},
	{stars: 0},
	{lifeUp: 0},
	{Tileset1: 0},
	{Tileset2: 0},
	{Tileset3: 0},
	{icon: 0},
	{icon2: 0},
	{loading: 0},
	{stars_GUI: 0},
	{starsWin: 0},
	{game_over_screen: 0},
	{label_Record: 0},
	{labelStarsCount2: 0},
	{count_stars_label1: 0},
	{points_count_label: 0},
	{labelPointsWin: 0},
	{newGameScreen: 0},
	{shadow: 0},
	{pauseScreen: 0},
	{ref_outsideLayout: 0},
	{highscore1_SF: 0},
	{highscore2_SF: 0},
	{highscore3_SF: 0},
	{winScreen: 0},
	{lifeUp_marker: 0},
	{highscore4_SF: 0},
	{highscore5_SF: 0},
	{loadingBGNew: 0},
	{highscore6_SF: 0},
	{creditsScreen: 0},
	{Fade: 0},
	{DestroyOutsideLayout: 0},
	{Bullet: 0},
	{labelPoints10000: 0},
	{score_label: 0},
	{logo_mn: 0},
	{Tween: 0},
	{logo_maria: 0},
	{ScrollTo: 0},
	{camera: 0},
	{explosion: 0},
	{box_shatter: 0},
	{splash_punch: 0},
	{startingY: 0},
	{itemCount: 0},
	{Solid: 0},
	{boxCoin01: 0},
	{boxCoin02: 0},
	{block_hitbox01: 0},
	{block_hitbox02: 0},
	{coin: 0},
	{bg_infoScreen: 0},
	{bgNightSky: 0},
	{initialScreen: 0},
	{levelselectbg: 0},
	{backgrounds_levels: 0},
	{Jumpthru: 0},
	{jumpCollision: 0},
	{solidCollisionHide: 0},
	{in_level: 0},
	{winCollision: 0},
	{collision_L: 0},
	{finalLevel: 0},
	{collision_R: 0},
	{attackFloor: 0},
	{airAttack: 0},
	{Flash: 0},
	{boy: 0},
	{Platform: 0},
	{charBox: 0},
	{moving: 0},
	{LineOfSight: 0},
	{enemy01: 0},
	{enemy02: 0},
	{enemy03: 0},
	{baby: 0},
	{girl: 0},
	{items_particle: 0},
	{Partículas: 0},
	{porta16: 0},
	{effect: 0},
	{raio2: 0},
	{porta: 0},
	{present2: 0},
	{enemies: 0},
	{score: 0},
	{audioGame: 0},
	{player: 0},
	{life: 0},
	{levelSelected: 0},
	{currentLevel: 0},
	{playableLevel: 0},
	{LSname: 0},
	{highscore1: 0},
	{highscore2: 0},
	{highscore3: 0},
	{highscore4: 0},
	{highscore5: 0},
	{highscore6: 0}
];

self.InstanceType = {
	Audio: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Gamepad: class extends self.IInstance {},
	Array: class extends self.IArrayInstance {},
	LocalStorage: class extends self.IInstance {},
	btnNo: class extends self.ISpriteInstance {},
	btn_yes: class extends self.ISpriteInstance {},
	btn_Right: class extends self.ISpriteInstance {},
	btn_continue: class extends self.ISpriteInstance {},
	btn_Left: class extends self.ISpriteInstance {},
	btn_home: class extends self.ISpriteInstance {},
	btn_SoundOnOff: class extends self.ISpriteInstance {},
	btn_menu: class extends self.ISpriteInstance {},
	btn_fullscreen: class extends self.ISpriteInstance {},
	btn_pause: class extends self.ISpriteInstance {},
	btn_no_newgame: class extends self.ISpriteInstance {},
	btn_newGame2: class extends self.ISpriteInstance {},
	btn_yes_newgame: class extends self.ISpriteInstance {},
	btn_back: class extends self.ISpriteInstance {},
	btn_back02: class extends self.ISpriteInstance {},
	level: class extends self.ISpriteInstance {},
	btn_back_initialScreen: class extends self.ISpriteInstance {},
	btn_Jump: class extends self.ISpriteInstance {},
	btn_newGame: class extends self.ISpriteInstance {},
	btn_nextLevel: class extends self.ISpriteInstance {},
	btn_credits: class extends self.ISpriteInstance {},
	btn_controls: class extends self.ISpriteInstance {},
	btnFull: class extends self.ISpriteInstance {},
	btnAudio: class extends self.ISpriteInstance {},
	btnMenu: class extends self.ISpriteInstance {},
	coins: class extends self.ISpriteInstance {},
	stars: class extends self.ISpriteInstance {},
	lifeUp: class extends self.ISpriteInstance {},
	Tileset1: class extends self.ITilemapInstance {},
	Tileset2: class extends self.ITilemapInstance {},
	Tileset3: class extends self.ITilemapInstance {},
	icon: class extends self.ISpriteInstance {},
	icon2: class extends self.ISpriteInstance {},
	loading: class extends self.ISpriteFontInstance {},
	stars_GUI: class extends self.ISpriteInstance {},
	starsWin: class extends self.ISpriteInstance {},
	game_over_screen: class extends self.ISpriteInstance {},
	label_Record: class extends self.ISpriteFontInstance {},
	labelStarsCount2: class extends self.ISpriteFontInstance {},
	count_stars_label1: class extends self.ISpriteFontInstance {},
	points_count_label: class extends self.ISpriteFontInstance {},
	labelPointsWin: class extends self.ISpriteFontInstance {},
	newGameScreen: class extends self.ISpriteInstance {},
	shadow: class extends self.ISpriteInstance {},
	pauseScreen: class extends self.ISpriteInstance {},
	ref_outsideLayout: class extends self.ISpriteInstance {},
	highscore1_SF: class extends self.ISpriteFontInstance {},
	highscore2_SF: class extends self.ISpriteFontInstance {},
	highscore3_SF: class extends self.ISpriteFontInstance {},
	winScreen: class extends self.ISpriteInstance {},
	lifeUp_marker: class extends self.ISpriteInstance {},
	highscore4_SF: class extends self.ISpriteFontInstance {},
	highscore5_SF: class extends self.ISpriteFontInstance {},
	loadingBGNew: class extends self.ITiledBackgroundInstance {},
	highscore6_SF: class extends self.ISpriteFontInstance {},
	creditsScreen: class extends self.ISpriteInstance {},
	labelPoints10000: class extends self.ISpriteInstance {},
	score_label: class extends self.ISpriteFontInstance {},
	logo_mn: class extends self.ISpriteInstance {},
	logo_maria: class extends self.ISpriteInstance {},
	camera: class extends self.ISpriteInstance {},
	explosion: class extends self.ISpriteInstance {},
	box_shatter: class extends self.ISpriteInstance {},
	splash_punch: class extends self.ISpriteInstance {},
	boxCoin01: class extends self.ISpriteInstance {},
	boxCoin02: class extends self.ISpriteInstance {},
	block_hitbox01: class extends self.ISpriteInstance {},
	block_hitbox02: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	bg_infoScreen: class extends self.ISpriteInstance {},
	bgNightSky: class extends self.ITiledBackgroundInstance {},
	initialScreen: class extends self.ISpriteInstance {},
	levelselectbg: class extends self.ISpriteInstance {},
	backgrounds_levels: class extends self.ISpriteInstance {},
	jumpCollision: class extends self.ISpriteInstance {},
	solidCollisionHide: class extends self.ISpriteInstance {},
	winCollision: class extends self.ISpriteInstance {},
	collision_L: class extends self.ISpriteInstance {},
	finalLevel: class extends self.ISpriteInstance {},
	collision_R: class extends self.ISpriteInstance {},
	boy: class extends self.ISpriteInstance {},
	charBox: class extends self.ISpriteInstance {},
	enemy01: class extends self.ISpriteInstance {},
	enemy02: class extends self.ISpriteInstance {},
	enemy03: class extends self.ISpriteInstance {},
	baby: class extends self.ISpriteInstance {},
	girl: class extends self.ISpriteInstance {},
	items_particle: class extends self.IParticlesInstance {},
	Partículas: class extends self.IParticlesInstance {},
	porta16: class extends self.ISpriteInstance {},
	effect: class extends self.IParticlesInstance {},
	raio2: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	present2: class extends self.ISpriteInstance {},
	enemies: class extends self.ISpriteInstance {}
}