//program to randomly generate a number between 1 and 100.

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4141;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/lottery', (req, res) => {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Generated number: ${number}`);
    res.status(200).json({ number });
});