import mongoose from "mongoose";
import Learning from "../db/model";
import { ILearningItem } from "../db/model";

const learningItems = [
  {
    title: "Docker-compose",
    desc: "Make a Dockerfile for both WEB and API and fire them both up in containers",
  },
  {
    title: "Custom styled-components",
    desc: "Create a couple of custom-made components that take props",
  },
];

export const resolvers = {
  Query: {
    learningItems: async () => {
      try {
        const learningItem = {
          title: "Testing123",
          desc: "Amazing",
          extra_credit: false,
        };
        const newLearningItem = await Learning.create(learningItem);
        console.log(newLearningItem);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
