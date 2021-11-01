import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {deleteDocument, getDocument} from "../../../../firebase/query";
import {Link, useHistory, useParams} from 'react-router-dom';
import {ContentContainer} from "../../../../style/Layout.Styled";
import {useSelector} from "react-redux";
import {media} from "../../../../lib/styled";

const DetailContainer = () => {

  const {id} = useParams();
  const [blog, setBlog] = useState({});
  const history = useHistory();

  const onDelete = () => {
    try {
      deleteDocument('test', id);
      history.push('/');
    } catch (err) {
      console.log(err)
    }
  }

  const getDocumentById = async () => {
    const result = await getDocument('test', id);
    setBlog(result);
  }

  useEffect(() => {
    getDocumentById();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Title>{blog.title}</Title>
        <ActionButtons>
          <ButtonEdit to={`/edit/${id}`}>수정</ButtonEdit>
          <ButtonDelete onClick={onDelete}>삭제</ButtonDelete>
          <ButtonHome to="/">홈</ButtonHome>
        </ActionButtons>
        <Desc>
          <ContentUrl>
            {
              blog?.contentUrl ? <img src={blog.contentUrl} alt=""/>
                : <img src='https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80' alt=""/>
            }
          </ContentUrl>
          <p>{blog.description}</p>
        </Desc>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 50px 15px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  ${media.sm(css`
    justify-content: center;
  `)}
`;

const buttonStyle = css`
  padding: 0 15px;
  height: 32px;
  color: #fff;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  border-radius: 3px;
  cursor: pointer;
`;

const ButtonEdit = styled(Link)`
  ${buttonStyle};
  margin-right: 10px;
  background: #18f;
  &:hover {
    background: #0981fc;
  }
`;

const ButtonDelete = styled.div`
  ${buttonStyle};
  margin-right: 10px;
  background: #ff5252;

  &:hover {
    background: #fa4444;
  }
`;

const ButtonHome = styled(Link)`
  ${buttonStyle};
  background: #aaa;

  &:hover {
    background: #929191;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 30px;
`;

const Desc = styled.div`
  display: flex;
  p {
    width: 50%;
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    white-space: pre-wrap;
    border: 1px solid #ddd;
    padding: 10px;
    ${media.md(css`
      width: 100%;
      margin: 20px 0 50px;
  `)};
  }
  ${media.md(css`
    display: block;
    margin: 0 30px;
  `)};
`;

const ContentUrl = styled.div`
  width: 50%;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
  ${media.md(css`
    width: 100%;
  `)};
`;

export default DetailContainer;
