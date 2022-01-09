const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        "id": 1,
        "email": "Jonh@gmail.com",
        "status": "active"
    },
    {
        "id": 2,
        "name": "Bob Williams",
        "email": "bob@gmail.com",
        "status": "active"
    },
    {
        "id": 3,
        "name": "Shannon Jackson",
        "email": "shannon@gmail.com",
        "status": "active"
    }
]

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //res.send('Hello World');
});*/

app.get('/api/members', (req, res) => res.json(members));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
