import { ApolloServer } from "apollo-server";
import typeDefs from "../graphql/schema";
import { resolvers } from "../graphql/resolvers";
import mongoose from "mongoose";

const connectToDB = async () => {
  const MONGO_URL: string = "mongodb://localhost:27017/learningDB";
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log(connection);
  } catch (error) {
    console.log(error);
  }
};
connectToDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log(`🚀 Server is listening on port 4000!`);
});
