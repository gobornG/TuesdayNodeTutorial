const express = require('express');
const bodyParser = require('body-parser');
var server = express();
var port = 3000;

server.use(bodyParser.json());

var products = [{
        id: 1,
        name: 'iPad',
        price: 329.99
    },
    {
        id: 2,
        name: 'iPhone x',
        price: 999.99

    },
    {
        id: 3,
        name: 'iPhone z',
        price: 2

    }
];

//http://myserver.com GET request
server.get('/api/products', function(request, response) {

    response.status(200).json(products);
});

server.get('/api/products/:productId', (req, res) => {
    var id = Number(req.params.productId);
    var product = products.find(function(product) {
        return product.id === id;
    });
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: `the product with id: ${id} does not exist` });
    }
});

server.post('/api/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(products);
});

//handler function
server.listen(port, () => {
    console.log(`running on port ${port}`);
});

//git init
//yarn init
//yarn global add nodemon 
//yarn add express
//changed package.json "main" key to read "server.js"
//nodemon

//REST representational state transfer
//Get: retrieve information
//Post: create a resource
//Put: Update a resource
//Delete: erase/remove/delete a resource


//ways of getting data from the client
//from the body of the request
//from the url of the request  (url params)


//added body-parser
//installed body-parser package
//changed post route to read the body

//Includes different req's