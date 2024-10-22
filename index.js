const http = require('http');
const app = require('./app');



app.set('port', process.env.PORT ?? 3000);


const server = http.createServer(app);

server.on(`listening`, () =>{
    console.log(`Listening on port` +(process.env.PORT ?? 3000));
})

server.listen(process.env.PORT || 3000);




// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// const port = 3000;

// app.use(bodyParser.json());

// let todos = [
//     {id: 1, title: 'First todo', completed: false},
//     {id: 2, title: 'Second todo', completed: true},
//     {id: 3, title: 'Third todo', completed: false},
//     {id: 4, title: 'Fourth todo', completed: true},

// ];

// app.get('/todos', (req, res) => {
//     res.json(todos);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });