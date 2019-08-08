import React from 'react';
import { Popup, Button, Icon, Checkbox, List } from 'semantic-ui-react';

export const ColumnVisibility = ({options=[], onToggleColumns}) => (
  <Popup
    trigger={<Button basic icon><Icon name='sliders horizontal' color='blue' /></Button>}
    position='top right'
    on='click'
  >
    <List>
      {
        options && options.map(item => (
          <List.Item key={item.id}>
            <Checkbox
              label={item.name}
              name={item.id}
              checked={item.visibility}
              onChange={onToggleColumns}
            />
          </List.Item>
        ))
      }
    </List>
  </Popup>
);
