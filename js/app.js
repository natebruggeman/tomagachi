class Tomagatchi{
	constructor(hunger, sleepiness, boredom, age){
	this.hunger = hunger;
	this.sleepiness = sleepiness;
	this.boredom = boredom;
	this.age = age;
	}
	giveStatus(levels){
		console.log(`Hello it's me, your Tomagatchi, My hunger level is ${this.hunger}, my sleepiness is ${this.sleepiness}, I am this ${this.boredom} bored. I'm growing up quick, I am ${this.age} days old!`);
	}
}

const tommy = new Tomagatchi('0', '0', '0', '0')
tommy.giveStatus()



