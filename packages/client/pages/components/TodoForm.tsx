import styled from "styled-components";
import React, { FormEvent } from "react";
import Text from "../elements/Text";
import StyledButton from "../elements/Button";
import Colors from "../../styles/Colors";
import { useMutation } from "@apollo/client";
import CREATE_TODO from "../graphql/mutations/createTodo.mutation";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px solid ${Colors.Grey4};
  border-radius: 8px;
  padding: 8px;
`;

type TodoFormProps = {};

const TodoForm: React.FC<TodoFormProps> = () => {
  const [input, setInput] = React.useState({ title: "", desc: "" });
  const [createTodo, { data }] = useMutation(CREATE_TODO);
  if (data) console.log(data);

  const updateInput = (value: any) => {
    setInput({ ...input, ...value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
    createTodo({
      variables: { title: input.title, desc: input.desc },
    });
  };

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <Text color={Colors.Blurple}>Title</Text>
      <input onChange={(e) => updateInput({ title: e.target.value })}></input>
      <Text color={Colors.Blurple}>Description</Text>
      <input onChange={(e) => updateInput({ desc: e.target.value })}></input>
      <StyledButton type="submit">Add Todo</StyledButton>
    </FormContainer>
  );
};

export default TodoForm;
