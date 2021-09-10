import React from "react";
import styled from "@emotion/styled";

type GridContainerProps = {
  children: React.ReactNode;
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  background?: string;
  columns?: string;
  justify?: string;
};

type BodyProps = {
  padding?: string;
};

const Container = styled.div<GridContainerProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.background || "white"};
  display: grid;
  justify-items: ${(props) => props.justify};
  grid-template-columns: ${(props) => props.columns || "repeat(auto, 1fr"};
`;

const Body = styled.div<BodyProps>`
  padding: ${(props) => props.padding || "0"};
`;

const GridContainer: React.FC<GridContainerProps> = ({
  height,
  width,
  margin,
  padding,
  background,
  children,
  columns,
  justify,
}) => (
  <Container
    height={height}
    width={width}
    columns={columns}
    background={background}
    margin={margin}
    justify={justify}
  >
    <Body padding={padding}>{children}</Body>
  </Container>
);

export default GridContainer;
