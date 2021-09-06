import { gql } from "apollo-server";

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

export default typeDefs;
