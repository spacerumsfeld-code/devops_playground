import { Schema, model } from "mongoose";

export interface ILearningItem {
  title: string;
  desc: string;
  extra_credit?: boolean;
}

/**
 * Creates new mongo scheme
 */
const learningSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  extra_credit: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// export the model
export default model<ILearningItem>("Learning", learningSchema);
