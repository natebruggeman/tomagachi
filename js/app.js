
$('#start').one('click', () =>{
	console.log('start button works');
	game.setHunger();
	game.setTimer();
	game.setSleepiness();
	game.setBoredom();
	game.setSafety();
	$('#status').text(`Status: Still Kickin'`)
	$("#happy").attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Congrats.png");
	
});

$('#submit-btn').one('click', () => {

    const $getName =$('#input-box').val() 
    console.log($getName);
    const $h1 = $('<h1/>')
    const $header = $('header')
    $h1.append($getName)
    $header.append($h1)
});

const $img = $("#happy")
console.log($img);





const game = {
	time: 0,
	hunger: 0,
	sleepiness: 0,
	boredom: 0,

	setTimer(){

		const $timer = $('#timer');

		const $status = $('#status')

		const interval = setInterval(() => {

			if(this.time === 100){
				clearInterval(interval)
				$("#happy").attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Waving.png");
				$status.text(`Status: Passed away of old age`)
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

				$('#status').text(`Status: Dead`)

				$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_OutOfIt.png");

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

				$('#status').text(`Status: Dead`)
				
				$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Sad.png");


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

				$('#status').text(`Status: Dead`)

				$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Angry.png");


			} else {
				this.boredom++
			}
			$boredom.text(`Boredom: ${this.boredom}`)
		}, 4000)

	},
	
	setSafety(){
		console.log('sooo');

	}
}





$('#feed').on('click', (e) =>{
	console.log('feed button works');
	game.hunger--
	$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Eating.png");


});

$('#sleep').on('click', (e) =>{
	console.log('sleep button works');
	game.sleepiness--
	$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Sleepy.png");


});

$('#entertain').on('click', (e) =>{
	console.log('entertain button works');
	game.boredom--
	$img.attr("src","https://www.gstatic.com/chat/stickers/pack14/TinyAstronaut_Loving.png");
});


// const setSafety = (safety) => {
// 		if(this.boredom === 10 || this.hunger === 10 || this.sleepiness === 10){
// 		game.clearInterval(interval)
// 		game.clearInterval(hungerInt)
// 		game.clearInterval(sleepInt)
// 		game.clearInterval(boredomInt)
// 		}

// }










