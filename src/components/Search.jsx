import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';


export const Search = ({placeholder, value, onHandleSearch}) => (
  <Input 
    icon={{ name: 'search',  link: true }}
    placeholder={placeholder}
    iconPosition='left'
    fluid
    value={value}
    onChange={onHandleSearch}
  />
);
