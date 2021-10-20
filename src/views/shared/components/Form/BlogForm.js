import React, {useState} from "react";
import styled from "styled-components";
import {uploadFile} from "../../../../firebase/query";

const BlogForm = ({ blog, onSubmit, buttonText }) => {
  const [values, setValues] = useState({
    title: blog?.title || '',
    description: blog?.description || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFile = async (e) => {
    const files = e.target.files;
    const file = files[0];
    const contentUrl = await uploadFile(file);
    setValues({
      ...values,
      contentUrl,
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input type="text"
                 name="title"
                 onChange={onChange}
                 value={values.title}
          />
        </Label>
        <Label>
          <Textarea rows="10"
                    name="description"
                    onChange={onChange}
                    value={values.description}
          />
        </Label>
        <input type="file"
               onChange={onChangeFile}
        />
        <Button>{buttonText}</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`

`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 15px;

  input, textarea {
    background: transparent;
    border: 1px solid #d1d1d1;
    outline: 0;
    padding: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  resize: none;
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  background: #18f;
  color: #fff;
  border: 1px solid #18f;
  outline: 0;
  border-radius: 3px;
  cursor: pointer;
`;

export default BlogForm;
