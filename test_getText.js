const {blackCards, whiteCards} = require("./decks")

const blackLength = blackCards.length
const whiteLength = whiteCards.length
const regex = new RegExp("_")

function getText(){
	var blackCardPos = Math.floor(Math.random() * (blackLength))
	var selectedBlack = blackCards[blackCardPos]

	var selectedWhite = []

	for (var i = 0; i < selectedBlack.pick; i++) {
		whiteCardPos = Math.floor(Math.random() * (whiteLength))
		selectedWhite.push(whiteCards[whiteCardPos].slice(0,-1))
	}

	let finish = selectedBlack.text

	if (regex.exec(finish)) {
		selectedWhite.map(item => {
			finish = finish.replace("_", item)
		})
	}
	else {
		selectedWhite.map(item => {
			finish += `\n${item}`
		})
	}

	finish = finish.replace("&reg;", "")
	finish = finish.split("<br>").join("\n")

	return finish
}
