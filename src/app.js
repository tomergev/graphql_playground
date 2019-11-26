const express = require('express')
const Mongoose = require("mongoose")
const { GraphQLSchema } = require("graphql")
const expressGraphQL = require("express-graphql")
const userResolver = require("./users/resolvers")

const app = express()
const port = 3000

Mongoose.connect("mongodb://localhost/playground", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schema = userResolver

app.use("/graphql", expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(
  port,
  console.log(`Magic happening at http://localhost:${port}/graphql`)
)



// const express = require('express')
// const graphqlHTTP = require('express-graphql')
// const { buildSchema } = require('graphql')

// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// // The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return 'Hello world!'
//   },
// }

// const app = express()
// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: root,
//   graphiql: true,
// }))
// app.listen(4000)
// console.log('Running a GraphQL API server at http://localhost:4000/graphql')