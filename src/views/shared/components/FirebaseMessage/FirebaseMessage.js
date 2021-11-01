import React from "react";
import styled from "styled-components";
import {MESSAGE_TYPES} from "./MessageTypes";
import ResultMessage from "../../../user/components/ResultMessage";

const FirebaseMessage = ({ code }) => {

  const components = {
    [MESSAGE_TYPES.AUTH_USER_NOT_FOUND]: <ResultMessage error>가입되지 않은 이메일입니다.</ResultMessage>,
    [MESSAGE_TYPES.AUTH_WRONG_PASSWORD]: <ResultMessage error>비밀번호가 일치하지 않습니다.</ResultMessage>,
    [MESSAGE_TYPES.AUTH_TOO_MANY_REQUESTS]: <ResultMessage error>잠시후에 시도해주세요.</ResultMessage>,
  }

  const message = components[code];
  if(!message) return null;

  return (
    <Container>
      {components[code] || null}
    </Container>
  )
}

const Container = styled.div`

`;

export default FirebaseMessage;
