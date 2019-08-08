import React from 'react';
import styled from 'styled-components';
import  moment from 'moment';


const Row = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.2);
  margin: 5px 0 0 0;
  padding: 10px 0;
  display: flex;
`;

const Col = styled.span`
  flex-basis: 70px;
  flex-grow: ${props => props.flexgrow };
  margin: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: ${props => props.align };

  &.close {
    color: orange;
  }

  &.exceeded {
    color: red;
  }
`;

export const Body = ({columns = [], list = []}) => (
  
  list && list.map(item => (
    <Row key={item.id}>
    {
      columns && columns.map(value =>  (
        <Col 
          key={value.id}
          flexgrow={value.flexgrow}
          align={value.align}
          className={(!value.visibility && 'nonVisible') || (value.id === 'amountRemaining' && item.amountRemainingStatus) }
        >
        {
          value.id === 'projects' && item[value.id] instanceof Array ? (
            item[value.id].map(current => current.name).join(', ')
          ) : ( value.id === 'createdAt' ? (
                  moment(item['createdAt']).format("D MMM YYYY, H:m")
                ) : ( value.id === 'amountTotal' || value.id === 'amountRemaining' ? (
                        Number(item[value.id]).toFixed(2)
                      ) : (item[value.id] || '--')
                )
          )
        }
        </Col>
      ))
    }
    </Row>
  ))        

);

