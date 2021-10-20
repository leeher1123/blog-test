import React from "react";
import styled from "styled-components";
import {PageTitle} from "../../../../style/Layout.Styled";
import BlogForm from "../../../shared/components/Form/BlogForm";

const EditForm = ({ blog, editBlog }) => {
  return (
    <Container>
      <PageTitle>글 수정하기</PageTitle>
      <BlogForm blog={blog}
                buttonText='수정하기'
                onSubmit={editBlog}
      />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 50px;
`;

export default EditForm;
