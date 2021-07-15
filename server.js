let express = require("express");
// express ko use krke server ka instance create krna h .... but abhi challu nhi hota h

let server = express();

server.get("/movies", function (req, res) {
  res.send("Movies Data from server");
});

server.get("/genre", function (req, res) {
  res.send("genre data from server");
});

// server start krne k liye
// 3000 ->ise bolte h port
//localhost:3000
server.listen(3000);
