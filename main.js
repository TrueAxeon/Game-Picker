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