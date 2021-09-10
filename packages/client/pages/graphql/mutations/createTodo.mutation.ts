import { gql } from "@apollo/client";

const CREATE_TODO = gql`
  mutation CreateTodo($title: String, $desc: String) {
    createTodo(title: $title, desc: $desc) {
      message
      todo {
        title
        desc
      }
    }
  }
`;

export default CREATE_TODO;
