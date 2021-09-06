import { gql } from "@apollo/client";

export const LEARNING_ITEMS = gql`
  query GetAllLearningItems {
    items: learningItems {
      title
    }
  }
`;
