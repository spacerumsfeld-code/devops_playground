import { ApolloServer } from "apollo-server";
import typeDefs from "../graphql/schema";
import { resolvers } from "../graphql/resolvers";
import mongoose from "mongoose";

const connectToMongo = async () => {
  /** localhost='database' when dockerizing and vice versa */
  const MONGO_URL: string = "mongodb://database:27017/dev_ops_playground";
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
connectToMongo();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log(`🚀 Server is listening on port 4000!`);
});
