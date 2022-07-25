const mysql = require('mysql2');
const express = require ('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.app.status(404).end();
});

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username
        user: 'SLachelier',
        //Your MySQL password
        password: '$H@LaN@Na7212',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});