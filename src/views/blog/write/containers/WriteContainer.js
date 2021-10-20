import React from "react";
import styled from "styled-components";
import WriteForm from "../components/WriteForm";
import {addDocument} from "../../../../firebase/query";
import { serverTimestamp } from "firebase/firestore";
import {useHistory, useParams} from 'react-router-dom';

const WriteContainer = () => {

  const history = useHistory();
  const {id} = useParams();
  const addBlog = async (values) => {
    await addDocument('test', {
      ...values,
      createAt: serverTimestamp(),
    });
    history.push('/');
  }

  return (
    <Container>
      <WriteForm addBlog={addBlog}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default WriteContainer;
