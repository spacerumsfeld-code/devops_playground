import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetAllTodos {
    todos {
      _id
      title
      desc
    }
  }
`;

export default GET_TODOS;
