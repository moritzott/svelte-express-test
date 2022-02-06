const http = require("http");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors(
    { origin : "http://localhost:8080" }
));


const server = http.createServer(app);


// basis Route:
app.get("/", (req, res)=> {
    res.send("Hello there!");
});

// abfrage-route:
app.get("/users/:firstname/:lastname/:email", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    const email = req.params.email;
    person = {
        firstname: firstname,
        lastname: lastname,
        email: email
    };
    res.json(person);
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT} ...`);
});