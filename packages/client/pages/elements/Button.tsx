import styled from "styled-components";
import Colors from "../../styles/Colors";

export const SubmitButton = styled.button`
  border: none;
  padding: 0.5em;
  background-color: ${Colors.Blurple};
  color: #ffffff;
  margin-top: 1em;

  &:hover {
    background-color: ${Colors.Blurple20};
  }
`;

export default SubmitButton;
