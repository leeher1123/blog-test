import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import {auth} from "../../../firebase/firebase";

const SignOut = () => {

  const signAfter = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const onClickButton = () => {
    signAfter();
  }

  return (
    <Container>
      <Button onClick={onClickButton}>로그아웃</Button>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 10px;
`;

const Button = styled.div`
  color: #18f;
  cursor: pointer;

  &:hover {
    color: #0561c4;
  }
`;

export default SignOut;
