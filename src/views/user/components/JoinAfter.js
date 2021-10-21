import React from "react";
import styled from "styled-components";
import {GiPartyPopper} from "react-icons/gi";
import {useHistory} from "react-router-dom";

const JoinAfter = ({ userEmail }) => {

  const index = userEmail.indexOf('@');
  const userId = userEmail.substring(0, index);
  const history = useHistory();

  const onClickButton = () => {
    history.push('/');
  }

  return (
    <Container>
      <Icon><GiPartyPopper/></Icon>
      <Desc>
        <h1>회원가입이 완료되었습니다.</h1>
        <p>{ userId } 님의 회원가입을 축하드립니다!</p>
      </Desc>
      <Button onClick={onClickButton}>시작하기</Button>
    </Container>
  )
}

const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 107px 0;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: #1972f8;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    font-size: 17px;
    font-weight: 500;
    color: #262626;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #18f;
  color: #fff;
  border: 1px solid #18f;
  outline: 0;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  &:active {
    top: 1px;
    background-color: #1972f8;
  }
`;

export default JoinAfter;
