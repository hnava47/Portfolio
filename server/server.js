const ApolloServer = require('apollo-server-express');
const express = require('express');
const path = require('path');
const { typeDef, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDef,
    resolvers
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer();
