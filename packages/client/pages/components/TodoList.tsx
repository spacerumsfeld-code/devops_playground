import GridContainer from "../elements/GridContainer";
import Colors from "../../styles/Colors";
import ToDoCard from "../elements/ToDoCard";
import StyledButton from "../elements/Button";
import { ITodo } from "../../types/ITodo";
import React from "react";
import { useMutation } from "@apollo/client";
import DELETE_TODO from "../graphql/mutations/deleteTodo.mutation";

type TodoListProps = {
  todos: ITodo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [deleteTodo, { data }] = useMutation(DELETE_TODO);
  if (data) console.log(data);

  return (
    <GridContainer
      height="100%"
      columns="repeat(1, 1fr)"
      background={Colors.White05}
      padding="8px"
      justify="center"
    >
      {todos?.map((todo: any, i) => (
        <ToDoCard
          key={i}
          margin="8px 0px"
          background={Colors.Grey8}
          borderRadius="8px"
        >
          {todo.title}: {todo.desc}
          <StyledButton
            value={todo._id}
            onClick={(e) =>
              deleteTodo({
                variables: { id: (e.target as HTMLInputElement).value },
              })
            }
          >
            Delete Todo
          </StyledButton>
        </ToDoCard>
      ))}
    </GridContainer>
  );
};

export default TodoList;
