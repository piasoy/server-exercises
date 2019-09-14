var express = require('express');
var app = express();

function respondPing(request, response, nextFn){
    response.send('Pong!')
}
app.get('/ping', respondPing)

app.listen(3000, function(){
    console.log('This is my server for the Ping Pong exercise.')
})