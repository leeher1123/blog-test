import React from "react";
import styled from "styled-components";
import { formatDistance } from 'date-fns'
import ko from "date-fns/locale/ko";
import {Link} from "react-router-dom";

const BlogItem = ({ item }) => {

  const distance = formatDistance(
    new Date(item.createAt.seconds * 1000),
    Date.now(),
    { addSuffix: true, locale: ko }
  )

  return (
    <Container to={`/detail/${item.id}`}>
      <Thumb>
        <img src={item.contentUrl || 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'} alt=""/>
      </Thumb>
      <Desc>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <CreateAt>{distance}</CreateAt>
      </Desc>
    </Container>
  )
}

const Container = styled(Link)`
  display: block;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
  transition: .2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Thumb = styled.div`
  padding-top: 60%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 15px;
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
  }
  p {
    max-width: 275px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 15px;
    color: #767676;
    line-height: 1.6;
  }
`;

const CreateAt = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: #999;
`;

export default BlogItem;
