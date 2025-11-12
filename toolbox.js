export class Toolbox {

    //gets a random number 0 -> array.length, given an array.
    getRandomIndex(array) {
        return Math.floor(
            Math.random() * array.length
        );
    }

    //gets a random item from an array
    getRandomItem(array) {
        let randomIndex = this.getRandomIndex(array);
        return array[randomIndex];
    }

    shuffleArray(array) {
        let shuffled = [];

        let howManyTimesToPush = array.length;

        // shuffled.push(array[0]);?????????????
        for(let i = 0; i < howManyTimesToPush; i++) {
            let randomIndex = this.getRandomIndex(array);
            let removed = array.splice(randomIndex, 1) //start position, length
            shuffled.push(removed[0]);
        }
        return shuffled;
    }

    getRandomColor(array) {
        let randomColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];  
        
        
        //this.getRandomColor
    }
}



