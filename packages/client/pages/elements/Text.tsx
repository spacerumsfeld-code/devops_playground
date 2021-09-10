import React from "react";
import styled from "@emotion/styled";

type TextProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  align?: string;
  color?: string;
  padding?: string;
};

const Container = styled.div<TextProps>`
  width?: ${(props) => props.width};
  height?: ${(props) => props.height};
`;

type BodyProps = {
  color?: string;
  padding?: string;
  align?: string;
};

const Body = styled.h1<BodyProps>`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`;

const Text: React.FC<TextProps> = ({
  children,
  width,
  height,
  color,
  padding,
  align,
}) => (
  <Container width={width} height={height}>
    <Body align={align} color={color} padding={padding}>
      {children}
    </Body>
  </Container>
);

export default Text;
