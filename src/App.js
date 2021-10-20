import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "./style/GlobalStyle";
import Header from "./views/shared/components/Header";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Blog/Home";
import Write from "./pages/Blog/Write";
import Detail from "./pages/Blog/Detail";
import Edit from "./pages/Blog/Edit";

const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/write" component={Write}/>
        <Route exact path="/edit/:id" component={Edit}/>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;
