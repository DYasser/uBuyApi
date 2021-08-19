const mysql = require('mysql');

// Configuration to connect to the database ; for more info see the environnement variables
const connection = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'shopapp'
});
connection.getConnection(function(err) {
    if (err) {
        console.error('error connecting: ' + err.message);
        return;
    }
    console.log('connected');
});

// Making the connection constant global to the project 
global.connection = connection;