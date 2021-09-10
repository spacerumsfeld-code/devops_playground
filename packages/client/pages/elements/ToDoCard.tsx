import React from "react";
import styled from "@emotion/styled";
import Colors from "../../styles/Colors";

type ToDoCardProps = {
  children: React.ReactNode;
  background?: string;
  width?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  height?: string;
  overflow?: string;
};

const Container = styled.div<ToDoCardProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.background || `${Colors.White}`};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid ${Colors.Grey5};
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToDoCard: React.FC<ToDoCardProps> = ({
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
    padding={padding}
  >
    {children}
  </Container>
);

export default ToDoCard;
