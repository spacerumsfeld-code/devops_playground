import React from "react";
import styled from "@emotion/styled";
import Colors from "../styles/Colors";

//define sub-components and their typing (css properties they will receive)

const Container = styled.div<LearningCardProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background?: ${(props) => props.background || `${Colors.White}`};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid ${Colors.Grey5};
  box-sizing: border-box;
  overflow: ${(props) => props.overflow};
`;

type BodyProps = {
  padding?: string;
};

const Body = styled.div<BodyProps>`
  border-radius: 0px 0px 10px 10px;
  padding: ${(props) => props.padding};
  height: 100%;
  box-sizing: border-box;
`;

type LearningCardProps = {
  children: React.ReactNode;
  background?: string;
  width?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  height?: string;
  overflow?: string;
};

//define structure of final component (built out of sub-components)
//props get distributed to sub-components

const LearningCard: React.FC<LearningCardProps> = ({
  children,
  width,
  margin = "0",
  padding = "24px",
  borderRadius = "16px",
  height,
  overflow,
  background,
}) => (
  <Container
    width={width}
    margin={margin}
    borderRadius={borderRadius}
    height={height}
    overflow={overflow}
    background={background}
  >
    <Body padding={padding}>{children}</Body>
  </Container>
);

export default LearningCard;
