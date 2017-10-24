# Cards Against Twitter

A potentially gross machine that will post cards against humanity combinations

```bash
git clone https://github.com/obrien66/cards-against-twitter
cd cards-against-twitter
```

Then you will have to create a filed named `config.json` with your twitter bot's information. `timeInMinutes` tells `index.js` how often to post.

```json
{
	"consumerKey": "XXXXXXXXXXXXXXXXXXXXX",
	"consumerSecret": "XXXXXXXXXXXXXXXXXXXXX",
	"accessToken": "XXXXXXXXXXXXXXXXXXXXX",
	"accessSecret": "XXXXXXXXXXXXXXXXXXXXX",
	"timeInMinutes": 30
}
```

Now you can run

```bash
npm install && npm start
```

OR

```bash
yarn install && npm start
```