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
    newTodo: async (
      _root: any,
      args: any
    ): Promise<{ message: string; to_do: ITodo }> => {
      try {
        const toDo = new Todos({
          title: args.title,
          desc: args.desc,
          extra_credit: args.extra_credit,
        });
        const newTodo: ITodo = await toDo.save();
        return {
          message: "New To-do successfully created",
          to_do: newTodo,
        };
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodo: async (_root: any, args: any) => {
      try {
        const deletedTodo = await Todos.findByIdAndRemove(args.id);
        return {
          message: "Successfully deleted todo",
          to_do: deletedTodo,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
