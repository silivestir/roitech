const fs = require('fs');  // File system module to read the .pem file

module.exports = {
    development: {
        username: process.env.username,  // Fetches from environment variable
        password: process.env.password,  // Fetches from environment variable
        database: process.env.database, // Fetches from environment variable
        host: process.env.host,         // Fetches from environment variable
        port: process.env.port,         // Fetches from environment variable
        ssl: {
            ca: fs.readFileSync('./ca.pem').toString()  // Read the .pem file as string
        }
    }
};
