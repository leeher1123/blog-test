import React from "react";
import styled from "styled-components";
import FormMessage from "./FormMessage";

const TextField = ({ type, name, placeholder, register, validate, error }) => {
  return (
    <Container>
      <Input type={type}
             placeholder={placeholder}
             {...register(name, validate)}
      />
      <FormMessage error={error}/>
    </Container>
  )
}

const Container = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 0;
  color: #333;
  outline: 0;
  background-color: rgb(235, 244, 255);
  padding: 8px;
`;

export default TextField;
