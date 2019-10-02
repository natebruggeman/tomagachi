
// alert("Welcome to Tomagatchi! The rules are simple, keep your buddy alive for aslong as you can. Your buddy will need food, sleep, and entertainment! If your buddy reaches 10 in any of these categories they'll die! Give your Tomagatchi a name and click Give birth to start! Good Luck!")


$('#start').on('click', () =>{
	console.log('start button works');
	game.setHunger();
	game.setTimer();
	game.setSleepiness();
	game.setBoredom();
	
});

$('#submit-btn').one('click', () => {

    const $getName =$('#input-box').val() 
    console.log($getName);
    const $h1 = $('<h1/>')
    const $header = $('header')
    $h1.append($getName)
    $header.prepend($h1)
});


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


$('#feed').on('click', (e) =>{
	console.log('feed button works');
	game.hunger--

});

$('#sleep').on('click', (e) =>{
	console.log('sleep button works');
	game.sleepiness--

});

$('#entertain').on('click', (e) =>{
	console.log('entertain button works');
	game.boredom--
});








// class Tomagatchi{
// 	constructor(hunger, sleepiness, boredom,){
// 		this.hunger = hunger;
// 		this.sleepiness = sleepiness;
// 		this.boredom = boredom;

// 		this.eat = function(){
// 			game.hunger--
// 		}
// 		this.sleep = function(){
// 			game.sleep--
// 		}
// 		this.entertain = function(){
// 			game.boredom--
// 		}

// 	}
// }














