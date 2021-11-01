import React from "react";
import styled from "styled-components";
import {ERROR_TYPES} from "./ErrorTypes";
import Message from "./Message";

const FormMessage = ({ error }) => {

  const components = {
    [ERROR_TYPES.REQUIRED]: <Message error>필수 입력사항입니다.</Message>,
    [ERROR_TYPES.IS_EMAIL]: <Message error>이메일 형식으로 입력해주세요.</Message>,
    [ERROR_TYPES.IS_VALID_PASSWORD]: <Message error>최소 8 자, 최소 하나의 문자 및 하나의 숫자를 입력해주세요.</Message>,
  }

  return (
    <Container>
      { components[error?.type] || null }
    </Container>
  )
}

const Container = styled.div`

`;

export default FormMessage;
