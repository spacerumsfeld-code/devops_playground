import { Schema, model } from "mongoose";

export interface ITodo {
  title: string;
  desc: string;
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
});

export default model<ITodo>("Todos", toDoSchema);
