import Todos from "../db/model";
import { ITodo } from "../db/model";

export const resolvers = {
  Query: {
    todos: async (): Promise<ITodo[] | undefined> => {
      try {
        const todos: ITodo[] = await Todos.find({});
        return todos;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createTodo: async (
      _root: any,
      args: any
    ): Promise<{ message: string; todo: ITodo } | undefined> => {
      console.log("NEW TODO ARGUMENTS:", args);
      try {
        const toDo = new Todos({
          title: args.title,
          desc: args.desc,
        });
        const newTodo: ITodo = await toDo.save();
        console.log("NEW TODO COMPLETE:", newTodo);
        return {
          message: "New To-do successfully created",
          todo: newTodo,
        };
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodo: async (
      _root: any,
      args: any
    ): Promise<{ message: string; todo: ITodo } | undefined> => {
      console.log(args);
      try {
        const deletedTodo = await Todos.findByIdAndRemove(args.id);
        console.log(deletedTodo);
        return {
          message: "Successfully deleted todo",
          todo: deletedTodo,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
