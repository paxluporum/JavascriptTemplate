import { Toolbox } from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox();


let myFavoriteLetters = ["a", "b", "c"];





// let counts = [0,0,0];
// for (let i = 0; i < 100; i++) {
//     //     let randomIndex = getRandomIndex(myFavoriteLetters);
//     //     counts[randomIndex] = counts[randomIndex] + 1;
//     // }
//     console.log(toolbox.getRandomItem(myFavoriteLetters));
// }


let shuffled = toolbox.shuffleArray(myFavoriteLetters);
    console.log(shuffled);
