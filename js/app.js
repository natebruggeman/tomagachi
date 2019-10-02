
  $('#submit-btn').on('click', () => {
    console.log( $('#input-box').val() );
  });




$('#start').on('click', () =>{
	console.log('start button works');
	// const setName = prompt("You're about to give birth to a Tomagatchi wether you like it or not what would you like to name it?")
	game.setHunger();
	game.setTimer();
	game.setSleepiness();
	game.setBoredom();
	
});

$('#feed').on('click', () =>{
	console.log('feed button works');

});



// $('#sleep').on('click', () =>{
// 	console.log('sleep button works');
// });
// $('#entertain').on('click', () =>{
// 	console.log('entertain button works');
// });

class Tomagatchi{
	constructor(hunger, sleepiness, boredom, age){
	this.hunger = hunger;
	this.sleepiness = sleepiness;
	this.boredom = boredom;
	this.age = age;
	}
}



const game = {
	time: 0,
	hunger: 0,
	sleepiness: 0,
	boredom: 0,

	setTimer(){

		const $timer = $('#timer');

		const interval = setInterval(() => {

			if(this.time === 100){
				clearInterval(interval)
				alert('Your Tomagatchi has passed away of old age, they lived a great life, refresh to start again')
				} else {
				this.time++
			}
			$timer.text(`Days old: ${this.time}`)


		}, 1000)
	},

	setHunger(){

		const $hunger = $('#hunger');

		const hungerInt = setInterval(() => {

			if(this.hunger === 10){
				clearInterval(hungerInt)
				alert('Your Tomagatchi has died of hunger, you monster!')
				} else {
				this.hunger++
			}
			$hunger.text(`Hunger: ${this.hunger}`)


		}, 3000)
	},

	setSleepiness(){

		const $sleepiness = $('#sleepiness');

		const sleepInt = setInterval(() => {

			if(this.sleepiness === 10){
				clearInterval(sleepInt)
				alert('Your Tomagatchi needs sleep, he stroked out and died!')
			} else {
				this.sleepiness++
			}
			$sleepiness.text(`Sleepiness: ${this.sleepiness}`)

		}, 7000)

	},

	setBoredom(){

		const $boredom = $('#boredom');

		const boredomInt = setInterval(() => {

			if(this.boredom === 10){
				clearInterval(boredomInt)
				alert("Your Tomagatchi needs entertainment, he was so bored he killed himself")
			} else {
				this.boredom++
			}
			$boredom.text(`Boredom: ${this.boredom}`)
		}, 4000)


	},


}






