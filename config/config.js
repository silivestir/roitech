module.exports = {
    development: {
        username: process.env.username,  // Fetches from environment variable
        password: process.env.password,  // Fetches from environment variable
        database: process.env.database, // Fetches from environment variable
        host: process.env.host,         // Fetches from environment variable
        port: process.env.port,         // Fetches from environment variable
        ssl: { rejectUnauthorized: false }  // optional for SSL connection depending on setup
    }
};
