import React from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label } from 'semantic-ui-react';

export const AmountRange = ({label, settings, rangeValues }) => (
  <div className="filterPopupBlock">
    <div className="filterPopupBlock__label">{label}</div>
    <Slider
      value={rangeValues}
      multiple
      color="blue"
      settings={settings}
    />
    <div className="rangeLabels">
    {
      rangeValues && rangeValues.map((item, i) => (
        <Label key={i}>{item}</Label>
      ))
    }
    </div>
  </div>
);
