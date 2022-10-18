const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app = express()
const PORT = process.env.PORT || 5000
// const userData = require('./MOCK_DATA')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT)
})