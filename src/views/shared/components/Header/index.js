import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SiBloglovin} from "react-icons/si";
import SignOut from "../../../user/containers/SignOut";

const Header = () => {

  const user = useSelector(state => state.auth.user);
  const index = user?.email.indexOf('@');
  const userId = user?.email.substring(0, index);

  return (
    <Container>
      <MainHeader>
        <Logo to="/">Blog</Logo>
      </MainHeader>
      <BottomHeader>
        {
          !!user ?
            <MemberArea>
              <Icon><SiBloglovin/></Icon>
              <span>{userId} 님의 블로그</span>
              <SignOut/>
            </MemberArea> :
            <SignArea>
              <Link to="/login">Login</Link>
              <span>|</span>
              <Link to="/join">Join</Link>
            </SignArea>
        }
      </BottomHeader>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid #d1d1d1;
  height: 80px;
`;

const MainHeader = styled.div`
  text-align: center;
  padding-top: 25px;
`;

const Logo = styled(Link)`
  font-size: 30px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
`;

const BottomHeader = styled.div`

`;

const SignArea = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  text-transform: uppercase;
  transition: .2s;
  a {
    padding: 0 30px;
    color: #333;
    &:hover {
      color: #18f;
    }
  }
`;

const MemberArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    padding: 0 10px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

export default Header;
