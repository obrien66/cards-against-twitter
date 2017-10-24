# Cards Against Twitter

A potentially gross machine that will post cards against humanity combinations. All of the card data is from [crhallberg](https://github.com/crhallberg)

```bash
git clone https://github.com/obrien66/cards-against-twitter
cd cards-against-twitter
```

After cloning the repository you will have to create a filed named `config.json` with your twitter bot's information. Use the following format or the bot will throw errors. `timeInMinutes` tells `index.js` how often to post.

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

Or

```bash
yarn install && npm start
```
