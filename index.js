const {blackCards, whiteCards} = require("./decks")
var Twit = require("twit")
var conf = require("./config")

var T = new Twit({
	consumer_key: conf.consumerKey,
	consumer_secret: conf.consumerSecret,
	access_token: conf.accessToken,
	access_token_secret: conf.accessSecret
})

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

	// finish = finish.replace("&reg;", "")
	["&reg;", "<i>", "</i>"].map(item => {
		finish = finish.replace(item, "")
	})

	finish = finish.split("<br/>").join("\n")

	return finish
}


function post(text){
	T.post("statuses/update", {status: text}, (err, data, res) => {
		if (err) {
			throw err
		}
	})
}

post(getText())

let tweetnum = 0
setInterval(function(){
	post(getText())
	tweetnum++
	console.log(tweetnum)
}, conf.timeInMinutes*60*1000)
