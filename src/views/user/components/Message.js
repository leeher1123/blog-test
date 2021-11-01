import React from "react";
import styled, {css} from "styled-components";

const Message = ({children, error}) => {
  return (
    <Container error={error}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: #18f;
  ${({error}) => error && css`
    color: #ff5252;
  `}
`;

export default Message;
