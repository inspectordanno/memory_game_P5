//TIMER

//Here I am building a timer. I adapted some of the code from Dan Shiffman's Learning Processing book, page 203.
let startTime; //time when the timer starts
let totalTime; //how long will the timer take
let timer; //declaring timer variable globally
let playButton;
let cWidth;
let cHeight;


class Timer { //declaring a timer object


  constructor(howMuchTime) { //setting total time to a custom value
    this.startTime = startTime;
    this.totalTime = totalTime;
    this.totalTime = howMuchTime;
    console.log(this.totalTime);
    this.start = function() {
      startTime = millis() //current time in milliseconds
    }
    this.timesUp = function() {
      const elapsedTime = millis()/1000 - startTime/1000;
      console.log(Math.floor(elapsedTime));
      if (elapsedTime > this.totalTime/1000) {
        console.log('times up!');
        return true;

      } else {
        console.log('time is not up yet');
        return false;

      }
    }
  }
}

//Once rectangles are generated, randomly assign them a data attribute representing a country.

const country_array = ['barbados', 'china', 'india', 'japan', 'singapore', 'uk', 'usa', 'zimbabwe']

//Position JPEGs of passports behind rectangles according to their data attribute.

//When first rectangle is clicked, change its opacity to 0 to reveal passport.

//When second rectangle is clicked, change its opacity to 0 to reveal passort.

  //if second rectangle matches the first, keep both rectangles opacity at 0.

  //if second rectangle doesn't match the first,

function setup() {
  timer = new Timer(10000);
  timer.start();
  rectMode(CENTER);

  //designing canvas


  cWidth = select('#cnv_container').width;
  cHeight =  select('#cnv_container').height;
  const cnv = createCanvas(cWidth, cHeight);
  cnv.parent('#cnv_container');
}

function draw() {
  if (timer.timesUp()) {
    console.log('game over');
    noLoop();
  }

  //First, generate the rectangles. Since there are 8 countries, 16 rectangles will have to be generated.
  const spacing = 100;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let x = map(col, 0, 3, cWidth * .1, cWidth - cWidth * .1); // x position of rectangle //domain is allowable domain of first value, col
      let y = map(row, 0, 3, cHeight * .1, cHeight - cHeight *.1);  // y position of rectangle //domain is allowable domain of first value, row
      //map only returns the mapped value of the first argument
      console.log(x);
      rect(x, y, 100, 100);
    }
  }

}
