import React from 'react';
import { Checkbox, List } from 'semantic-ui-react';

export const AmountRemaining = ({label, values, onHandleAmountRemaining}) => (
  <div className="filterPopupBlock">
    <div className="filterPopupBlock__label">{label}</div>
    <List>
      <List.Item>
          <Checkbox
            label='Enough'
            name="enough"
            checked={values['enough']}
            onChange={onHandleAmountRemaining}
          />
      </List.Item>
      <List.Item>
        <Checkbox
          label='Exceeded'
          name="exceeded"
          checked={values['exceeded']}
          onChange={onHandleAmountRemaining}
        />
      </List.Item>
      <List.Item>
        <Checkbox
          label='Close to the end'
          name="close"
          checked={values['close']}
          onChange={onHandleAmountRemaining}
        />
      </List.Item>
    </List>
  </div>
);
