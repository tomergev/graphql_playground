const {
  GraphQLID,
  GraphQLString,
	GraphQLObjectType,
} = require("graphql")

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  })
})

module.exports = UserType

// const { gql } = require("apollo-server")

// const typeDef = gql`
//   type User {
//     firstName: String
//     lastName: String
//   }
//   extend type Query {
//     users: [User]
//   }
// `

// module.exports = {
//   typeDef
// }