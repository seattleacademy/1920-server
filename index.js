const express = require('express')
const app = express()
const port = <put port between 1501 and 1800 here>

	let message = 'Listening for messages like https://math.seattleacademy.org:';
	message += port + '?x=22&y=55';

app.get('/', (req, res) => {

    res.send(message)
    console.log(req.query);
})

app.listen(port, () => console.log(message))