import { gql } from "@apollo/client";

export const TODOS = gql`
  query GetAllTodos {
    todos {
      title
      desc
      complete
    }
  }
`;
