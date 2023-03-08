class Casino {
    constructor(name, bet,timesPlayed){
        this.name = name
        this.bet = bet
        this.timesPlayed = 0
    }

  playGame(betAmount){
        this.timesPlayed ++
        if (Math.random() <= 0.5){
            console.log(`${this.name} wins!`)
        }
        else{
            this.bet = betAmount * (this.timesPlayed + 1)
            console.log(`You won ${this.bet} dollars from ${this.name}!`)
        }
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");

console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(5);



// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
