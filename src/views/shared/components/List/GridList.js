import React from "react";
import styled from "styled-components";

const GridList = ({ children, data }) => {
  return (
    <Container>
      <Row>
        {
          data.map((item, index) => (
            <Col key={item.id || index}>
              { children(item, index) }
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px 15px;
`;

export default GridList;
