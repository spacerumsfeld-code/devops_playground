import { gql } from "apollo-server";

const typeDefs = gql`
  type Todo {
    title: String
    desc: String
    complete: Boolean
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    newTodo: mutationReturn
    deleteTodo: mutationReturn
  }

  type mutationReturn {
    message: String
    to_do: Todo
  }
`;

export default typeDefs;
