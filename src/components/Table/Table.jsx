import React from 'react';
import PropTypes from 'prop-types';
import { Head, Body } from './';


export const Table = ({tableColumns, tableList }) => (
  <React.Fragment>
    <Head columns={tableColumns} />
    <Body list={tableList} columns={tableColumns} />
  </React.Fragment>
);

Table.propTypes = {
  tableColumns: PropTypes.array,
  tableList: PropTypes.array,
};