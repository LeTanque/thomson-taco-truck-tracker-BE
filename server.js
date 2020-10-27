const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// creates the server
const server = express();
const envPort = process.env.PORT || 3333; 

// Connect the pieces
server.use(helmet());
server.use(express.json());
server.use(cors());

// Applies to all connections to the api
server.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Credentials", true); 
    next();
})

server.all('/', (req, res) => {
    res.send(`
        <body style="background-color:#131313; color:#fafafa">
            <code>  
                <h1>Thomson Taco Truck Tracker</h1>
                <h5>${req.method} request recieved</h5>
            </code>
        </body>
    `);
});

server.listen(envPort, () =>
    console.log(`${envPort}`)
);

// Routes
const truck = require("./trucks");
server.use('/trucks', truck);  // Connect / to the routes