

const FIELD_SiZE = 10;
const ROWS_NUMBER = 100;
const COLUMNS_NUMBER = 100;
const BACKGROUND_COLOR = 'gray';
const FIELD_COLOR = 'yellow'
const GENERATION_TIME = 500

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


const liveGame = new LiveGame(ROWS_NUMBER, COLUMNS_NUMBER)

console.log(liveGame)

start()


function start () {
	canvas.width = FIELD_SiZE * COLUMNS_NUMBER
	canvas.height = FIELD_SiZE * ROWS_NUMBER

	liveGame.reviveRandomFields(ROWS_NUMBER * COLUMNS_NUMBER / 2)

	requestAnimationFrame(tick)
}


function tick (timeStamp) {
	clearCanvas()

	if (timeStamp > liveGame.generationNumber * GENERATION_TIME) {
		liveGame.changeGeneration()
	}
	
	liveGame.forFreeEach((x, y) => drawField(x, y, FIELD_COLOR))

	requestAnimationFrame(tick)

}


function clearCanvas () {
	context.fillStyle = BACKGROUND_COLOR,
	context.beginPath()
	context.rect(0, 0, canvas.width, canvas.height)
	context.fill()
}

function drawField (x, y, color) {
	context.fillStyle = color
	context.beginPath()
	context.rect(x * FIELD_SiZE, y * FIELD_SiZE, FIELD_SiZE, FIELD_SiZE)
	context.fill()
}