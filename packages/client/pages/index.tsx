import type { NextPage } from "next";
import styled from "styled-components";
import Colors from "../styles/Colors";
import GridContainer from "../elements/GridContainer";
import LearningCard from "../elements/learningCard";
import { initializeApollo } from "./graphql/apolloClient";
import { LEARNING_ITEMS } from "./graphql/queries/learning.getAllItems.query";

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
  const learningItems = props.initialApolloState.ROOT_QUERY.learningItems;
  console.log(learningItems);
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
        {learningItems?.map((learningItem: any) => (
          <LearningCard key={learningItem.id}>
            {learningItem.title}: {learningItem.desc}
          </LearningCard>
        ))}
      </GridContainer>
    </AppContainer>
  );
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LEARNING_ITEMS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
