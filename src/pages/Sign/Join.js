import React, {useState} from "react";
import styled from "styled-components";
import {SiBloglovin} from "react-icons/si";
import {isEmail, isValidPassword} from "../../lib/validate";
import cn from "classnames";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {actions} from "../../views/user/redux/slice";
import JoinAfter from "../../views/user/components/JoinAfter";

const Join = () => {

  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState(null);
  const [firebaseErrorCode, setFirebaseErrorCode] = useState('');
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  console.log('@@errors', errors);

  const join = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(actions.setUser(userCredential.user));
        setUserEmail(userCredential.user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFirebaseErrorCode(errorCode);
        setTimeout(() => {
          setFirebaseErrorCode('');
        }, 2000);
        console.log('@@errorCode', errorCode);
      });
  }

  const onSubmit = ({email, password}) => {
    join(email, password);
  }

  return (
    <>
      {
        !!userEmail ? <JoinAfter userEmail={userEmail}/>
          :
          <JoinContainer>
            <Container>
              <Title>
                <span><SiBloglovin/></span>
                <p>간편하게 가입하고</p>
                <p className="bold">블로그를 시작하세요!</p>
              </Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Input type="text"
                         placeholder="아이디(이메일)"
                         {...register("email", {
                           required: true,
                           validate: {
                             isEmail: (v) => isEmail(v),
                           }
                         })}
                  />
                  {
                    errors.email?.type === 'required'
                    && <ErrorMessage>이메일 주소를 입력해주세요.</ErrorMessage>
                  }
                  {
                    errors.email?.type === 'isEmail'
                    && <ErrorMessage>이메일 형식으로 입력해주세요.</ErrorMessage>
                  }
                </FormControl>
                <FormControl>
                  <Input type="password"
                         placeholder="비밀번호"
                         {...register("password", {
                           required: true,
                           validate: {
                             isValidPassword: (v) => isValidPassword(v),
                           }
                         })}
                  />
                  {
                    errors.password?.type === 'required'
                    && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
                  }
                  {
                    errors.password?.type === 'isValidPassword'
                    && <ErrorMessage>최소 8 자, 최소 하나의 문자 및 하나의 숫자를 입력해주세요.</ErrorMessage>
                  }
                </FormControl>
                <Button type="submit">가입하기</Button>
              </Form>
            </Container>
            <ResultMessage className={cn({isActive: firebaseErrorCode})}>
              {firebaseErrorCode === 'auth/email-already-in-use' && '이미 가입된 이메일입니다.'}
            </ResultMessage>
          </JoinContainer>
      }
    </>
  )
}

const JoinContainer = styled.div`

`;

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
  border: 0;
  color: #333;
  outline: 0;
  background-color: rgb(235, 244, 255);
  padding: 8px;

  &.isActive {
    border-bottom-color: #ff5252;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
  height: 50px;
  padding: 0 172px;
  outline: 0;
  background: #18f;
  border: 1px solid #18f;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  color: #fff;

  &:active {
    top: 1px;
    background-color: #0a74dc;
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: #ff5252;
`;

const ResultMessage = styled.div`
  width: 500px;
  height: 42px;
  font-size: 13px;
  color: #333;
  margin: 50px auto;
  border-radius: 3px;
  font-weight: 500;
  background: rgba(255, 82, 82, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: .2s;

  &.isActive {
    opacity: 1;
  }
`;

export default Join;
