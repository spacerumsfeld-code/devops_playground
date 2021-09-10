import { gql } from "@apollo/client";

const DELETE_TODO = gql`
  mutation deleteTodo($id: String) {
    deleteTodo(id: $id) {
      message
      todo {
        title
        desc
      }
    }
  }
`;

export default DELETE_TODO;
