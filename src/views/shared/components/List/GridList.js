import React from "react";
import styled, {css} from "styled-components";
import {media} from "../../../../lib/styled";

const GridList = ({children, data}) => {
  return (
    <Container>
      <Row>
        {
          data.map((item, index) => (
            <Col key={item.id || index}>
              {children(item, index)}
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
  ${media.md(css`
    width: 50%;
  `)};
  ${media.sm(css`
    width: 100%;
  `)}
`;

export default GridList;
