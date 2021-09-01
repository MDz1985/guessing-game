class GuessingGame {
        
        
    constructor(number) {
      this.min;
      this.max;
      this.guessNumber;
        
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      

    }

    guess() {
         
          return this.guessNumber = Math.floor((this.min+this.max)/2);
         
        
        

    }

    lower() {
      
       this.max = this.guessNumber+1;
    }

    greater() {
      
        this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
