import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

import resolvers from './schema/resolvers.js'
import typeDefs from './schema/type-defs.js'

const server = new ApolloServer({ resolvers, typeDefs })

const { url } = await startStandaloneServer(server)
console.log(`🚀 Server ready at ${url}`);