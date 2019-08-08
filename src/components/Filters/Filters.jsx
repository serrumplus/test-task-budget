import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import { Calendar, RelatedProject, AmountRange, AmountRemaining } from './';
import PropTypes from 'prop-types';

export const Filters = ({createdDateLabel, relatedProjectLabel, projects, settings, amountRemainingLabel, 
  amountRemainingCheckboxes, amountRangeLabel, rangeValues, relatedProjectValue, startDate,
  onHandleCalendarChange, onHandleAmountRemaining, onHandleRelatedProjectChange, onApplyFilter, onClearFilter}) => (

    <React.Fragment>
      <Popup.Header>
        Filters
        <div>
          <Button basic onClick={onClearFilter}>Clear</Button>
          <Button color='blue' onClick={onApplyFilter}>Apply</Button>
        </div> 
      </Popup.Header>
      <div className="filterPopup__line"></div>
      <Popup.Content>
        <Calendar 
          label={createdDateLabel}
          startDate={startDate}
          onHandleCalendarChange={onHandleCalendarChange}
        />
        <RelatedProject
          label={relatedProjectLabel}
          placeholder="Select related project"
          options={projects}
          value={relatedProjectValue}
          onHandleRelatedProjectChange={onHandleRelatedProjectChange}
        />
        <AmountRange
          label={amountRangeLabel}
          settings={settings}
          rangeValues={rangeValues}
        />
        <AmountRemaining
          label={amountRemainingLabel}
          onHandleAmountRemaining={onHandleAmountRemaining}
          values={amountRemainingCheckboxes}
        />
      </Popup.Content>
    </React.Fragment>

);

Filters.propTypes = {
  createdDateLabel: PropTypes.string,
  relatedProjectLabel: PropTypes.string,
  amountRemainingLabel: PropTypes.string,
  amountRangeLabel: PropTypes.string,
  projects: PropTypes.array,
  settings: PropTypes.object.isRequired,
  amountRemainingCheckboxes: PropTypes.object.isRequired,
  rangeValues: PropTypes.array.isRequired,
  relatedProjectValue: PropTypes.string.isRequired,
  startDate: PropTypes.object,
  onHandleCalendarChange: PropTypes.func.isRequired,
  onHandleAmountRemaining: PropTypes.func.isRequired,
  onHandleRelatedProjectChange: PropTypes.func.isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired
};
