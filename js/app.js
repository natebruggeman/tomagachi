$('#start').on('click', () =>{
	console.log('start button works');
	game.setTimer();
});



// class Tomagatchi{
// 	constructor(hunger, sleepiness, boredom, age){
// 	this.hunger = hunger;
// 	this.sleepiness = sleepiness;
// 	this.boredom = boredom;
// 	this.age = age;
// 	}
// 	giveStatus(levels){
// 		console.log(`Hello it's me, your Tomagatchi, My hunger level is ${this.hunger}, my sleepiness is ${this.sleepiness}, I am this ${this.boredom} bored. I'm growing up quick, I am ${this.age} days old!`);
// 	}
// }

// const tommy = new Tomagatchi('0', '0', '0', '0')
// tommy.giveStatus()


const game = {
	time: 0,
	setTimer(){

		const $timer = $('#timer');

		const interval = setInterval(() => {

			if(this.time === 100){
				clearInterval(interval)
				} else {
				this.time++
			}
			$timer.text(`Days old: ${this.time}`)

		}, 1000)
	}
}


