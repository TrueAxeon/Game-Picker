// Author: Danylo Shapovalov

// Factory function to make populating games array easier
const gameObj = (title, genre) => {
    return {
        title,
        genre
    }
};

// Main array containing game objects.
// Probably better to do this with a database, but it's a bit beyond the scope of this particular project.
const games = [gameObj("Aperture Hand Lab", "VR"), gameObj("Apex Legends", "FPS"), 
            gameObj("ARK: Survival Evolved", "Survival"), gameObj("Audioshield", "VR"),
            gameObj("BeamNG.drive", "Sandbox"), gameObj("Beat Saber", "VR"), gameObj("Besiege", "Sandbox"),
            gameObj("Bioshock Infinite", "FPS"), gameObj("Black Mesa", "FPS"),
            gameObj("Blasphemous", "Metroidvania"), gameObj("Bloodstained: Ritual of the Night", "Metroidvania"),
            gameObj("BONEWORKS", "VR"), gameObj("Borderlands 2", "FPS"), gameObj("Brutal Legend", "Action"),
            gameObj("Budget Cuts", "VR"), gameObj("Carrion", "Metroidvania"), gameObj("CODE VEIN", "Action"),
            gameObj("CrossCode", "RPG"), gameObj("Cyberdimension Neptunia: 4 Goddesses Online", "Anime/JRPG"),
            gameObj("Darksiders", "Action"), gameObj("Darksiders Genesis", "Action"), gameObj("Darksiders II", "Action"),
            gameObj("Darksiders III", "Action"), gameObj("Death end re;Quest", "Anime/JRPG"),
            gameObj("Death end RE;Quest 2", "Anime/JRPG"), gameObj("Deus Ex: Human Revolution", "RPG"),
            gameObj("Deus Ex: Mankind Divided", "RPG"), gameObj("Devil May Cry HD Collection", "Action"),
            gameObj("Devil May Cry 4", "Action"), gameObj("Devil May Cry 5", "Action"),
            gameObj("Doki Doki Literature Club", "Horror"), gameObj("DOOM", "FPS"), gameObj("DOOM Etarnal", "FPS"),
            gameObj("Dust: An Elysian Tail", "Metroidvania"), gameObj("Dyson Sphere Program", "Simulation"),
            gameObj("The Elder Scrolls III: Morrowind", "RPG"), gameObj("The Elder Scrolls IV: Oblivion", "RPG"),
            gameObj("The Elder Scrolls V: Skyrim", "RPG"), gameObj("Elite Dangerous", "MMO"),
            gameObj("Eternal Senia", "Indie"), gameObj("Factorio", "Simulation"), gameObj("Fantastic Contraption", "VR"),
            gameObj("Fate/EXTELLA", "Anime/JRPG"), gameObj("Fate/EXTELLA LINK", "Anime/JRPG"),
            gameObj("FINAL FANTASY XIV", "MMO"), gameObj("FINAL FANTASY XV", "Action"),
            gameObj("F.I.S.T.: Forged In Shadow Torch", "Metroidvania"),
            gameObj("The Gallery - Episode 1: Call of the Starseed", "VR"),
            gameObj("The Gallery - Episode 2: Heart of the Emberstone", "VR"), gameObj("Garry's Mod", "Sandbox"),
            gameObj("GOD EATER RESURRECTION", "Action"), gameObj("GOD EATER 2 Rage Burts", "Action"),
            gameObj("GOD EATER 3", "Action"), gameObj("GORN", "VR"), gameObj("GRIS", "Indie"),
            gameObj("Half-Life 2", "FPS"), gameObj("Half-Life 2: Episode One", "FPS"), gameObj("Half-Life 2: Episode 2", "FPS"),
            gameObj("Half-Life: Alyx", "VR"), gameObj("A Hat In Time", "Indie"), gameObj("Heartbound", "Indie"),
            gameObj("Hi-Fi RUSH", "Action"), gameObj("Hollow Knight", "Metroidvania"), gameObj("Holopoint", "VR"),
            gameObj("Hyperdevotion Noire: Goddess Black Heart", "Anime/JRPG"),
            gameObj("Hyperdimension Neptunia Re;Birth 1", "Anime/JRPG"),
            gameObj("Hyperdimension Neptunia Re;Birth 2 Sisters Generation", "Anime/JRPG"),
            gameObj("Hyperdimension Neptunia Re;Birth 3 V Generation", "Anime/JRPG"),
            gameObj("Hyperdimension Neptunia U: Action Unleashed", "Anime/JRPG"), gameObj("ICEY", "Indie"),
            gameObj("Judgement", "Action"), gameObj("Karnage Chronicles", "VR"), gameObj("Kerbal Space Program", "Simulation"),
            gameObj("The Lab", "VR"), gameObj("Left 4 Dead", "3rd Person Shooter"), gameObj("Left 4 Dead 2", "3rd Person Shooter"),
            gameObj("Lost Judgement", "Action"), gameObj("Megadimension Neptunia VII", "Anime/JRPG"),
            gameObj("METAL GEAR RISING: REVENGEANCE", "Action"), gameObj("Metal: Hellsinger", "FPS"),
            gameObj("Metro 2033", "FPS"), gameObj("Metro: Last Light", "FPS"), gameObj("Middle-earth: Shadow of Mordor", "Action"),
            gameObj("Minecraft", "Sandbox"), gameObj("Momodora III", "Indie"), 
            gameObj("Momodora: Reverie under the Moonlight", "Indie"), gameObj("MONSTER HUNTER RISE", "Action"),
            gameObj("Monster Hunter: World", "Action"), gameObj("Monster Prom", "Indie"),
            gameObj("Moss", "VR"), gameObj("Moss: Book II", "VR"), gameObj("Neptunia: Sisters VS Sisters", "Anime/JRPG"),
            gameObj("Ni no Kuni: Wrath of the White Witch", "Anime/JRPG"), gameObj("Ni no Kuni II: Revenant Kingdom", "Anime/JRPG"),
            gameObj("NieR Replicant", "Action"), gameObj("NieR:Automata", "Action"), gameObj("Night in the Woods", "Indie"),
            gameObj("No Man's Sky", "Simulation"), gameObj("OneShot", "Indie"), gameObj("Ori and the Blind Forest", "Metroidvania"),
            gameObj("Ori and the Will of the Wisps", "Metroidvania"), gameObj("Oxygen Not Included", "Simulation"),
            gameObj("Persona 4 Golden", "Anime/JRPG"), gameObj("Persona 5 Royal", "Anime/JRPG"),
            gameObj("Persona 5 Strikers", "Action"), gameObj("Pistol Whip", "VR"), gameObj("Plague Inc: Evolved", "Indie"),
            gameObj("Portal", "FPS"), gameObj("Portal 2", "FPS"), gameObj("Prey", "FPS"), gameObj("QuiVr", "VR"),
            gameObj("Raw Data", "VR"), gameObj("Record of Lodoss War - Deedlit in Wonder Labyrinth", "Indie"),
            gameObj("Rise of the Tomb Raider", "Adventure"), gameObj("ROM: Extraction", "FPS"),
            gameObj("Saints Row IV", "3rd Person Shooter"), gameObj("Satisfactory", "Simulation"),
            gameObj("SCARLET NEXUS", "Action"), gameObj("Serious Sam HD: The First Encounter", "FPS"),
            gameObj("Serious Sam HD: The Second Encounter", "FPS"), gameObj("Serious Sam 2", "FPS"),
            gameObj("Serious Sam 3: BFE", "FPS"), gameObj("Serious Sam 4", "FPS"), gameObj("Serious Sam VR: The Last Hope", "VR"),
            gameObj("Shadow Warrior", "FPS"), gameObj("Shadow Warrior 2", "FPS"), gameObj("Slender: The Arrival", "Horror"),
            gameObj("Sonic Frontiers", "Adventure"), gameObj("Sonic Generations", "Adventure"), gameObj("Space Engineers", "Sandbox"),
            gameObj("Space Pirate Trainer", "VR"), gameObj("Sparc", "VR"), gameObj("Star Shelter", "VR"),
            gameObj("Starbound", "Indie"), gameObj("Stray", "Indie"), gameObj("Subnautica", "Survival"),
            gameObj("Subnautica: Below Zero", "Survival"), gameObj("Super Neptunia RPG", "Anime/JRPG"),
            gameObj("Surviving Mars", "Simulation"), gameObj("Tales of Berseria", "Anime/JRPG"),
            gameObj("Tales of Vesperia", "Anime/JRPG"), gameObj("Team Fortress 2", "FPS"), gameObj("Terraria", "Sandbox"),
            gameObj("Tomb Raider", "Adventure"), gameObj("Touhou Luna Nights", "Indie"), gameObj("Undertale", "Indie"),
            gameObj("Universe Sandbox", "Simulation"), gameObj("Valley", "Adventure"), gameObj("Vanishing Realms", "VR"),
            gameObj("VR Dungeon Knight", "VR"), gameObj("Warframe", "3rd Person Shooter"), gameObj("Windlands", "VR"),
            gameObj("Windlands 2", "VR"), gameObj("The Witcher", "Action"), gameObj("The Witcher 2: Assasin of Kings", "Action"),
            gameObj("The Witcher 3: Wind Hunt", "Action"), gameObj("Wolfenstein: The New Order", "FPS"),
            gameObj("Wolfenstein: The Old Blood", "FPS"), gameObj("Yakuza 0", "Action"), gameObj("Yakuza Kiwami", "Action"),
            gameObj("Yakuza Kiwami 2", "Action"), gameObj("Yakuza 3", "Action"), gameObj("Yakuza 4", "Action"),
            gameObj("Yakuza 5", "Action"), gameObj("Yakuza 6: The Song of Life", "Action"), gameObj("Yakuza: Like a Dragon", "Action")];

// Main genres to pick from
const genres = [];
for (let item of games) {
    if (!genres.includes(item.genre)) {
        genres.push(item.genre);
    }
}

// Selecting a genre and a game within it
let genre = genres[Math.floor(Math.random() * genres.length)];
let gamesWithinGenre = games.filter(game => game.genre === genre);
let game = gamesWithinGenre[Math.floor(Math.random() * gamesWithinGenre.length)];

// Output game suggestion
console.log(`${generateIntro()} ${generateGenreMessage(genre)}\n${generateGameMessage(game)} ${generatePlayTime()}`);

// Random message generator functions
function generateIntro() {
    let options = ["Let's pick a game for you to play!",
                "Want to play a game? Sure! Let's see what we have...",
                "I have a game for you!",
                "Oh, are you bored? Well don't worry, nothing a good game can't fix!",
                "Time for some gaming!"];
    return options[Math.floor(Math.random() * options.length)];
}

function generateGenreMessage(str) {
    let options = [`How about the ${str} genre?`,
                `I hope you like ${str} games!`,
                `Let's try something in the ${str} genre.`,
                `Oh, I know! Let's pick a game in the ${str} genre for you.`,
                `${str} genre should do nicely.`];
    return options[Math.floor(Math.random() * options.length)];
}

function generateGameMessage(obj) {
    let options = [`"${obj.title}" should be a good option.`,
                `Do you want to try "${obj.title}"? I heard it's great!`,
                `"${obj.title}" is an amazing option.`,
                `Can't go wrong with "${obj.title}"!`,
                `You might like "${obj.title}"!`];
    return options[Math.floor(Math.random() * options.length)];
}

function generatePlayTime() {
    let options = ["Take it easy and play for an hour.",
                "Two hours should be enough time for you, right?",
                "Go ahead and game for three hours! Not like you have anything better to do.",
                "You've got four hours, so go ham!",
                "The next five hours are yours. Hope you don't have any other plans!"];
    return options[Math.floor(Math.random() * options.length)];
}