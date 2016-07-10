var roles = {
	abaddon: { 4: true, 5: true, heal: true },
	alchemist: { 1: true, 2: true, 4: true },
	ancient_apparition: { 4: true, 5: true },
	antimage: { 1: true },
	arc_warden: { 1: true, 2: true, 4: true },
	axe: { 3: true, jungle: true, stun: true },
	bane: { 4: true, 5: true },
	batrider: { 3: true, jungle: true, magic: true },
	beastmaster: { 3: true, jungle: true, push: true },
	bloodseeker: { 1: true, 2: true, jungle: true },
	bounty_hunter: { 3: true, 4: true, 5: true },
	brewmaster: { 2: true },
	bristleback: { 3: true, frontline: true },
	broodmother: { 3: true, 2: true, rightclick: true, push: true },
	centaur: { 3: true, stun: true },
	chaos_knight: { 1: true, 4: true, stun: true },
	chen: { 4: true, jungle: true, push: true },
	clinkz: { 1: true, 3: true, 2: true, push: true },
	clockwerk: { 2: true, 3: true, frontline: true },
	crystal_maiden: { 4: true, 5: true, support: true },
	dark_seer: { 3: true, jungle: true },
	dazzle: { 4: true, 5: true, heal: true },
	death_prophet: { 2: true, push: true },
	disruptor: { 4: true, 5: true },
	doom: { 3: true, jungle: true, 4: true },
	dragon_knight: { 1: true, 2: true, stun: true, push: true },
	drow_ranger: { 1: true, 2: true },
	earth_spirit: { roam: true, 4: true, 5: true },
	earthshaker: { stun: true, 2: true, 3: true, 4: true, 5: true },
	elder_titan: { roam: true, 3: true, 4: true, 5: true },
	ember_spirit: { 1: true, 2: true },
	enchantress: { jungle: true, 4: true },
	enigma: { jungle: true, 4: true, 3: true },
	faceless_void: { 1: true, 3: true },
	gyrocopter: { 1: true, 2: true },
	huskar: { 1: true, 2: true },
	invoker: { 2: true },
	jakiro: { 4: true, 5: true },
	juggernaut: { 1: true, 2: true },
	keeper_of_the_light: { 4: true, 5: true },
	kunkka: { 2: true, 4: true },
	legion_commander: { jungle: true, 2: true, 4: true },
	leshrac: { 2: true, 4: true },
	lich: { 4: true, 5: true },
	lifestealer: { jungle: true, 1: true },
	lina: { 2: true, 4: true, 5: true, magic: true },
	lion: { 4: true, 5: true },
	lone_druid: { 1: true, 2: true, 3: true },
	luna: { 1: true },
	lycan: { 1: true, 2: true, jungle: true },
	magnus: { 2: true, 3: true },
	medusa: { 1: true, 2: true },
	meepo: { 1: true, 2: true },
	mirana: { 1: true, 2: true, 3: true, 4: true },
	morphling: { 1: true, 2: true },
	naga_siren: { 1: true, 2: true, 4: true },
	natures_prophet: { 3: true, jungle: true },
	necrophos: { 1: true, 2: true, 3: true, magic: true },
	night_stalker: { 2: true, 4: true },
	nyx_assassin: { 2: true, 3: true, 4: true },
	ogre_magi: { roam: true, 4: true, 5: true },
	omniknight: { 4: true, 5: true },
	oracle: { 4: true, 5: true },
	outworld_devourer: { 1: true, 2: true },
	phantom_assassin: { 1: true, 2: true },
	phantom_lancer: { 1: true },
	phoenix: { 3: true, 4: true, 5: true },
	puck: { 2: true },
	pudge: { 2: true, roam: true, 4: true},
	pugna: { 1: true, 2: true, 4: true, push: true, magic: true },
	queenofpain: { 2: true, magic: true, mobile: true },
	razor: { 1: true, 2: true },
	riki: { 1: true, 4: true, roam: true },
	rubick: { 2: true, 4: true, 5: true },
	sand_king: { 4: true, jungle: true, stun: true },
	shadow_demon: { 4: true, 5: true },
	shadow_fiend: { 1: true, 2: true },
	shadow_shaman: { 4: true, 2: true, push: true },
	silencer: { 1: true, 2: true, 4: true },
	skywrath_mage: { 2: true, 4: true, 5: true },
	slardar: { 1: true, 3: true, jungle: true },
	slark: { 1: true, 2: true },
	sniper: { 1: true, 2: true },
	spectre: { 1: true },
	spirit_breaker: { 3: true, 4: true, stun: true },
	storm_spirit: { 2: true, magic: true, stun: true },
	sven: { 1: true, 4: true, stun: true, frontline: true },
	techies: { 3: true, 4: true },
	templar_assassin: { 2: true },
	terrorblade: { 1: true, push: true },
	tidehunter: { 3: true, 4: true, frontline: true },
	timbersaw: { 1: true, 2: true, 3: true, mobile: true, magic: true },
	tinker: { 2: true, magic: true },
	tiny: { 1: true, 2: true, stun: true },
	treant: { 4: true, 5: true },
	troll_warlord: { 1: true, 2: true, push: true },
	tusk: { 2: true, 4: true, 5: true, stun: true },
	undying: { 3: true, 4: true, 5: true },
	ursa: { jungle: true, 1: true, 2: true },
	vengeful_spirit: { 4: true, 5: true, stun: true },
	venomancer: { jungle: true, 4: true, 5: true, support: true, magic: true },
	viper: { 1: true, 2: true },
	visage: { 4: true, stun: true },
	warlock: { 2: true, 4: true },
	weaver: { 1: true, 2: true, 3: true },
	windrunner: { 2: true, 3: true, stun: true },
	winter_wyvern: { 4: true, 5: true },
	wisp: { 4: true, 5: true },
	witch_doctor: { 4: true, 5: true, stun: true },
	wraith_king: { 1: true, stun: true },
	zeus: { 2: true, magic: true }
};

var show_ct = 0;
for (var hero in roles) {
	if (roles.hasOwnProperty(hero)) {
		roles[hero]['show'] = 0;
		roles[hero]['hide'] = 0;
	}
}

function showHeroes(btn) {
	if (btn.className === "inactive") {
		btn.className = "show";
		show_ct++;
	} else if (btn.className === "show") {
		btn.className = "hide";
		show_ct--;
	} else {
		btn.className = "inactive";
	}

	for (var hero in roles)
		if (roles.hasOwnProperty(hero)) {
			if (roles[hero].hasOwnProperty(btn.value)) {
				if (btn.className === "show")
					roles[hero]['show']++;
				else if (btn.className === "hide") {
					roles[hero]['show']--;
					roles[hero]['hide']++;
				}
				else
					roles[hero]['hide']--;
			}

			var img = document.getElementById(hero);
			if (roles[hero]['hide'] > 0 || roles[hero]['show'] < show_ct)
				img.classList.add("invis");
			else
				img.classList.remove("invis");
		}

	// for (var prop in roles) {
	// 	if (roles.hasOwnProperty(prop)) {
	// 		var img = document.getElementById(prop);
	// 		if (value === "none" || roles[prop].hasOwnProperty(value))
	// 			img.classList.remove("invis");
	// 		else
	// 			img.classList.add("invis");
	// 	}
	// }
}