import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  background: #d3dee8
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.39);
  margin: 5px 0 0 0;
  padding: 10px 0;
  display: flex;
`;

const Col = styled.div`
  flex-basis: 70px;
  flex-grow: ${props => props.flexgrow };
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 10px;
  text-align: ${props => props.align };
`;

export const Head = ({columns = []}) => (
  <Row>
    {
      columns && columns.map(item => (
        <Col 
          key={item.id}
          flexgrow={item.flexgrow}
          align={item.align}
          className={ !item.visibility && 'nonVisible'}
        >
          {item.name}
        </Col>
      ))        
    }
  </Row>
);

