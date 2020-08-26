var express = require('express');
var app = express();

// will listen at port: 3000
app.use(express.static(__dirname));

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Bob', message: 'Hello'}
];

app.get('/messages', (req, res) => {
    res.send(messages);
})

/*app.post('/messages', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})*/

var server = app.listen(3000, () =>{
    console.log('server is listening at', server.address().port);
});