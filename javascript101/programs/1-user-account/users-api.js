// A program which can be used to manage the users of a system.
// available via APIs using nodejs and express.

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4141;
const users = [];

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.json()) //body parser is for parsing the body of the request.


app.post('/users', (req, res) => {
    console.log("Creating a new user");
    users.push(req.body);
    res.status(201).json({ message: "User created successfully", user: req.body });
})
app.get('/users', (req, res) => {
    console.log("Getting all users");
    res.status(200).json({"users": users});
})


app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
)