import { Schema, model } from "mongoose";

export interface ITodo {
  title: string;
  desc: string;
  extra_credit?: boolean;
}

const toDoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default model<ITodo>("Todos", toDoSchema);
