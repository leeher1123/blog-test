import React from "react";
import styled, {css} from "styled-components";
import GridList from "../../../shared/components/List/GridList";
import BlogItem from "../../../shared/components/Item/BlogItem";
import {ContentContainer} from "../../../../style/Layout.Styled";
import {FiPlus} from "react-icons/fi";
import {Link} from "react-router-dom";
import {media} from "../../../../lib/styled";

const BlogList = ({ blogData }) => {
  return (
    <Container>
      <ContentContainer>
        <GridList data={ blogData }>
          { (item) => <BlogItem item={item} /> }
        </GridList>
      </ContentContainer>
      <Write to='/write'>
        <FiPlus/>
      </Write>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 50px;
  ${media.md(css`
    margin: 0 20px;
  `)};
  ${media.sm(css`
    margin: 0 20px;
  `)}
`;

const Write = styled(Link)`
  position: fixed;
  right: 60px;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 22px;
  background: #2893fc;
  color: #fff;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #18f;
  }
`;

export default BlogList;
