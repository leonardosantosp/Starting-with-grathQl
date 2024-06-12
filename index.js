const { gql, ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String!]! #retorna um array, sendo vazio ou não
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
    },
    tecnologias() {
      return ['GraphQL', 'Node', 'Kotlin']
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

//padrão 4000
server.listen()
