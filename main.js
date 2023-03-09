// Author: Danylo Shapovalov

// Factory function to make populating games array easier
const gameObj = (genre, title) => {
    {
        genre,
        title
    }
};

// Main genres to pick from
const genres = ["Action", "JRPG", "Open-World", "Platformer", "RPG", "VR"];

// Main array containing game objects
const games = [];

// Selecting a genre and a game within it
let genre = genres[Math.floor(Math.random() * genres.length)];
let gamesWithinGenre = games.filter(game => game.genre === genre);
let game = gamesWithinGenre[Math.floor(Math.random() * gamesWithinGenre.length)];

// Output game suggestion
console.log(`${generateIntro()} ${generateGenreMessage(genre)} ${generateGameMessage(game)} ${generatePlayTime()}`);

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
    let options = [];
    return options[Math.floor(Math.random() * options.length)];
}

function generateGameMessage(obj) {
    let options = [];
    return options[Math.floor(Math.random() * options.length)];
}

function generatePlayTime() {
    let options = [];
    return options[Math.floor(Math.random() * options.length)];
}