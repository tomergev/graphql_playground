const UserType = require("./type")
const UserModel = require("./User")

const {
	GraphQLList,
	GraphQLSchema,
	GraphQLString,
	GraphQLNonNull,
	GraphQLObjectType,
} = require("graphql")

const query = new GraphQLObjectType({
	name: "Query",
	fields: {
		users: {
			type: GraphQLList(UserType),
			resolve: (root, args, context, info) => UserModel.find()
		},
	}
})

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		user: {
			type: UserType,
			args: {
				firstName: { type: GraphQLNonNull(GraphQLString) },
				lastName: { type: GraphQLNonNull(GraphQLString) }
			},
			resolve: (root, args, context, info) => {
				const user = new UserModel(args)
				return user.save()
			}
		}
	}
})

const resolvers = new GraphQLSchema({
	query,
	mutation,
})

module.exports = resolvers





// const User = require("./User")

// const resolvers = {
// 	Query: {
// 		users: () => User.find(),
// 	},
// }

// module.exports = {
// 	resolvers,
// }

