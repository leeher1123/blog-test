import React, {useEffect} from "react";
import styled from "styled-components";
import {getCollectionList} from "../../../../firebase/query";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../shared/redux/slice";
import BlogList from "../components/BlogList";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const blogData = useSelector(state => state.shared.blog);
  console.log(blogData);
  const getCollections = async () => {
    const result = await getCollectionList('test');
    dispatch(actions.setBlog(result));
  }
  useEffect(() => {
    getCollections();
  }, [])

  return (
    <Container>
      <BlogList blogData={blogData} />
    </Container>
  )
}

const Container = styled.div`

`;

export default HomeContainer;
