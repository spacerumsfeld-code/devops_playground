const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type LearningItem {
    title: String
    desc: String
    extra_credit: Boolean
  }

  type Query {
    learningItems: [LearningItem]
  }
`;

const learningItems = [
  {
    title: "Docker-compose",
    desc: "Make a Dockerfile for both WEB and API and fire them both up in containers",
  },
  {
    title: "Custom styled-components",
    desc: "Create a couple of custom-made components that take props",
  },
];

const resolvers = {
  Query: {
    learningItems: () => learningItems,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀 Server is listening on port 4000!`);
});
