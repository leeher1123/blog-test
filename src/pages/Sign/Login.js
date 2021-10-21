import React, {useState} from "react";
import styled from "styled-components";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {useDispatch} from "react-redux";
import {actions} from "../../views/user/redux/slice";
import { useForm } from "react-hook-form";
import {SiBloglovin} from "react-icons/si";

const Login = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log('@@errors', errors);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(actions.setUser(userCredential.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  const onSubmit = ({email, password}) => {
    login(email, password);
  }

  return (
    <Container>
      <Title>
        <span><SiBloglovin/></span>
        <p>간편하게 로그인하고</p>
        <p className="bold">블로그를 이용하세요.</p>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input type="text"
                 placeholder="아이디(이메일)"
                 {...register("email" , { required: true })}
          />
        </FormControl>
        <FormControl>
          <Input type="password"
                 placeholder="비밀번호"
                 {...register("password", { required: true })}
          />
        </FormControl>
        <Button type="submit">로그인</Button>
      </Form>
      {/*{*/}
      {/*  <ErrorMessage>이메일 주소를 입력해주세요.</ErrorMessage>*/}
      {/*}*/}
    </Container>
  )
}

const Container = styled.div`
  max-width: 420px;
  margin: 70px auto;
  padding: 50px 0 10px;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
`;

const Title = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 30px;
  }
  p {
    text-align: center;
    font-size: 22px;
    line-height: 1.2;
    &.bold {
      font-weight: bold;
    }
  }
`;

const Form = styled.form`
  margin-top: 40px;
`;

const FormControl = styled.div`
  font-size: 16px;
  padding: 0 18px 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid #ddd;
  color: #333;
  outline: 0;
  background-color: transparent;
  padding: 8px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
  height: 50px;
  padding: 0 172px;
  outline: 0;
  border: 1px solid #d1d1d1;
`;

const ErrorMessage = styled.div`
  
`;

export default Login;
