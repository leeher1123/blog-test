import React, {useState} from "react";
import styled, {css} from "styled-components";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {SiBloglovin} from "react-icons/si";
import {useHistory} from "react-router-dom";
import {auth} from "../../../firebase/firebase";
import {actions} from "../redux/slice";
import {isEmail, isValidPassword} from "../../../lib/validate";
import TextField from "../components/TextField";
import {ERROR_TYPES} from "../components/ErrorTypes";
import FirebaseMessage from "../../shared/components/FirebaseMessage/FirebaseMessage";

const LoginContainer = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [firebaseErrorCode, setFirebaseErrorCode] = useState('');
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  console.log('@@errors', errors);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(actions.setUser(userCredential.user));
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFirebaseErrorCode(errorCode);
        setTimeout(() => {
          setFirebaseErrorCode('');
        }, 2000)
        console.log('@@errorCode', errorCode);
      });
  }

  const onSubmit = ({email, password}) => {
    login(email, password);
  }

  return (
    <OutContainer>
      <Container>
        <Title>
          <span><SiBloglovin/></span>
          <p>간편하게 로그인하고</p>
          <p className="bold">블로그를 이용하세요.</p>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField type="text"
                     placeholder="아이디(이메일)"
                     register={register}
                     name={"email"}
                     validate={{
                       required: true,
                       validate: {
                         [ERROR_TYPES.IS_EMAIL]: (v) => isEmail(v),
                       }
                     }}
                     error={errors.email}
          />
          <TextField type="password"
                     placeholder="비밀번호"
                     register={register}
                     name={"password"}
                     validate={{
                       required: true,
                       validate: {
                         [ERROR_TYPES.IS_VALID_PASSWORD]: (v) => isValidPassword(v),
                       }
                     }}
                     error={errors.password}
          />
          <Button type="submit">로그인</Button>
        </Form>
      </Container>
      <FirebaseMessage code={firebaseErrorCode}/>
    </OutContainer>
  )
}

const OutContainer = styled.div`
  padding: 0 12px;
`;

const Container = styled.div`
  max-width: 420px;
  margin: 70px auto;
  padding: 50px 15px 10px;
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
  width: 100%;
  height: 50px;
  outline: 0;
  background: #18f;
  border: 1px solid #18f;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  color: #fff;
  white-space: nowrap;
  &:active {
    top: 1px;
    background-color: #0a74dc;
  }
`;

export default LoginContainer;
