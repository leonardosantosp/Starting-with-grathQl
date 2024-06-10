const { gql, ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`
const resolvers = {
  Query: {
    idade() {
      return 2
    },
    salario() {
      return 1990.98
    },
    nome() {
      return 'joão'
    },
    ativo() {
      return false
    },
    id() {
      return 1
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

//padrão 4000
server.listen()
