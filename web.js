var fs = require('fs');

var buffer = new Buffer(256);

var app = express.createServer(express.logger());

// read the file
var inFile = "index.html";
var buffer = fs.readFileSync(inFile);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
