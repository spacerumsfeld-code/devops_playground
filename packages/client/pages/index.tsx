import type { NextPage } from "next";
import styled from "styled-components";
import Colors from "../styles/Colors";
import GridContainer from "../elements/GridContainer";
import LearningCard from "../elements/LearningCard";
import { initializeApollo } from "./graphql/apolloClient";
import { TODOS } from "./graphql/queries/todo.getAllTodos.query";

/** TODO: Figure out SSR with styled-components! Classnames are not consistent between server
 * and client right now.
 */

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const Home: NextPage = (props: any) => {
  const todos = props.initialApolloState.ROOT_QUERY.todos;

  return (
    <AppContainer>
      <h1>A Good Old Time With styled-components and more!</h1>
      <GridContainer
        height="100%"
        width="80%"
        columns="repeat(1, 1fr)"
        background={Colors.Grey4}
        padding="8px"
      >
        {todos?.map((learningItem: any) => (
          <LearningCard key={learningItem.id}>
            {learningItem.title}: {learningItem.desc}
          </LearningCard>
        ))}
      </GridContainer>
    </AppContainer>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: TODOS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
