const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Counter {
    name: String
    categoryEn: String
    categoryKr: String
  }

  type Query {
    counters: [Counter]
  }
`;

const resolvers = {
  Query: {
    counters: (parent, args, context) => {
      return [
        {
          name: "마리",
          categoryEn: "animals",
          categoryKr: "동물",
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
