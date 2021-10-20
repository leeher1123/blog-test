import React from "react";
import styled from "styled-components";
import {PageTitle} from "../../../../style/Layout.Styled";
import BlogForm from "../../../shared/components/Form/BlogForm";

const WriteForm = ({ addBlog }) => {
  return (
    <Container>
      <PageTitle>글쓰기</PageTitle>
      <BlogForm onSubmit={addBlog}
                buttonText='글 추가하기'
      />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
`;

export default WriteForm;
