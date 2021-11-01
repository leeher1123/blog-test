import React from "react";
import styled from "styled-components";

const ResultMessage = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 42px;
  margin: 20px auto;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  color: #333;
  background: rgba(255, 82, 82, 0.15);
`;

export default ResultMessage;
