import { gql } from "apollo-server";

const typeDefs = gql`
  type Todo {
    _id: String
    title: String
    desc: String
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(title: String, desc: String): MutationReturn
    deleteTodo(id: String): MutationReturn
  }

  type MutationReturn {
    message: String
    todo: Todo
  }
`;

export default typeDefs;
