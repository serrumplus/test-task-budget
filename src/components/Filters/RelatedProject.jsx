import React from 'react';
import { Select } from 'semantic-ui-react';

export const RelatedProject = ({label, placeholder, value, options, onHandleRelatedProjectChange}) => (
  <div className="filterPopupBlock">
    <div className="filterPopupBlock__label">{label}</div>
    <Select 
      value={value}
      placeholder={placeholder}
      options={options}
      onChange={onHandleRelatedProjectChange}
    />
  </div>
);
