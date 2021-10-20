import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Logo to="/">Blog</Logo>
    </Container>
  )
}

const Container = styled.div`

`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  font-size: 30px;
  border-bottom: 1px solid #d1d1d1;
  cursor: pointer;
  color: #333;
`;

export default Header;
