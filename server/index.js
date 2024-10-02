// index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const typeDefs = require('./graphql/schema');
const resolvers = require('./resolvers/resolver');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

// Connect to MongoDB
connectDB();

const startServer = async () => {
    // Start Apollo server
    await server.start();

    // Apply Apollo middleware to Express
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

// Call the start function to start the server
startServer().catch((error) => {
    console.error('Server failed to start:', error);
});
