import React, {useEffect, useState} from "react";
import styled from "styled-components";
import EditForm from "../components/EditForm";
import {getDocument, setDocument} from "../../../../firebase/query";
import {useHistory, useParams} from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";

const EditContainer = () => {

  const [blog, setBlog] = useState();
  const {id} = useParams();
  const history = useHistory();

  const getDocumentById = async () => {
    const result = await getDocument('test', id);
    setBlog(result);
  }

  useEffect(() => {
    getDocumentById();
  }, []);

  const editBlog = async (values) => {
    try {
      await setDocument('test', id, {
        ...values,
        createAt: serverTimestamp(),
      });
      history.push(`/detail/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  if(!blog) return '...loading';

  return (
    <Container>
      <EditForm blog={blog}
                editBlog={editBlog}
      />
    </Container>
  )
}

const Container = styled.div`

`;

export default EditContainer;
