import React from 'react';
import styled from 'styled-components';
import { Select } from 'semantic-ui-react';

const Element = styled.div`
  > span {
    margin-right: 10px
  }
`;

export const SortBy = ({label, placeholder, options=[], onHandleSortBy}) => (
  <Element>
    <span>{label}</span>
    <Select placeholder={placeholder} options={options} onChange={onHandleSortBy} />
  </Element>
);
