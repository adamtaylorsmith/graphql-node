const express = require('express');
const colors = require('colors');
// const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

connectDB();

// app.use(cors());

// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

var root = {
    hello: () => {
      return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true,
    // graphiql: process.env.NODE_ENV === 'development'
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
console.log('Running a GraphQL API server');