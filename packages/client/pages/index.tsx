import type { NextPage } from "next";
import styled from "styled-components";
import Colors from "../styles/Colors";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Text from "./elements/Text";
import { initializeApollo } from "./graphql/apolloClient";
import GET_TODOS from "./graphql/queries/getAllTodos.query";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = (props: any) => {
  return (
    <AppContainer>
      <Text color={Colors.Blurple} align="center">
        DevOps Playground Disguised as Yet Another Todo App
      </Text>
      <TodoForm />
      <TodoList todos={props.todos} />
    </AppContainer>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { todos },
  } = await apolloClient.query({ query: GET_TODOS });

  return {
    props: {
      todos,
    },
  };
};

export default Home;
