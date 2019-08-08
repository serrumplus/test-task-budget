import React from 'react';
import { connect } from 'react-redux';
import  moment from 'moment';
import { Popup, Button, Icon } from 'semantic-ui-react';
import { Table } from '../components/Table';
import { SortBy, Search, ColumnVisibility, Filters } from '../components/';
import { initializeBudgetAction, initializeProjectsAction }  from '../redux/actions';
import { BUDGET_LIST } from '../data/budget';
import { PROJECTS } from '../data/projects';
import { type } from '../utils/helpers';
import PropTypes from 'prop-types';


class AppContainer extends React.Component {

  state = {
    tableList: null,
    initialTableList: null,
    tableColumns: null,
    modifiedTableColumns: null,
    calendarStartDate: null,
    isFilterPopupOpen: false,
    projectList: null,
    selectedRelatedProject: '',
    multipleRangeValues: [0, 40000],
    searchPhrase: '',
    amountRemainingCheckboxes: {
      close: true,
      enough: true,
      exceeded: true
    }
  }

  componentDidMount() {
    this.props.initializeBudget(BUDGET_LIST);
    this.props.initializeProjects(PROJECTS);
  }

  static getDerivedStateFromProps(props, state) {
    const { tableColumns: tableColumnsProps, tableList: tableListProps, projects } = props;
    const { tableColumns: tableColumnsState, tableList: tableListState, projectList } = state;

    const modifiedTableColumns = !tableColumnsState && tableColumnsProps && tableColumnsProps.map(item => ({
      key: item.id,
      value: item.id,
      text: item.name,
      disabled: false
    }));

    const modifiedProjectList = !projectList && projects && projects.map(item => ({
      key: item.id,
      value: item.name,
      text: item.name,
    }));

    const obj = {
      ...( !tableColumnsState && modifiedTableColumns && {modifiedTableColumns}),
      ...( !tableListState && tableListProps && { initialTableList: [...tableListProps] } ),
      ...( !tableListState && tableListProps && {tableList: [...tableListProps]} ),
      ...( !tableColumnsState && tableColumnsProps && {tableColumns: [...tableColumnsProps]}),
      ...( !projectList && modifiedProjectList && {projectList: [...modifiedProjectList]}),
    }

    return Object.keys(obj).length ? obj : null;
  }

  handleSortBy = (event, {value}) => {
    const { tableList } = this.state;

    tableList.sort((a,b) => {
      if(type(tableList[0][value]) === 'array') {
        const first = a[value].map(current => current.name).join(', ');
        const second = b[value].map(current => current.name).join(', ');

        return first > second ? 1 : first < second ? -1 : 0;
      }

      return a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0;
    });

    this.setState({tableList});
  }

  handleSearch = (event, {value}) => {
    
    const { initialTableList } = this.state;

    const filteredTableList = initialTableList && initialTableList.filter(item =>  {
      let isContains = false;

      Object.keys(item).forEach(current => {
        let currentString = '';

        if(type(item[current]) === 'array') {
          currentString = item[current].map(element => element.name).join(', ');
        } else if(current !== 'id' || current !== 'createdAt') {
          currentString = item[current];
        }

        if(currentString.toString().toLowerCase().includes(value)) {
          isContains = true;
        }
      })
      return isContains;
    });

    this.setState({
      tableList: filteredTableList,
      searchPhrase: value
    });
  }

  handleToggleColumns = (e, {name}) => {
    
    const { tableColumns, modifiedTableColumns } = this.state;
    const findedIndex = tableColumns.findIndex(item => item.id === name);

    const newTableColumns = tableColumns.map((item, i) => (
      i === findedIndex ? { ...item, visibility: !item.visibility } : {...item}
    ));

    const newModifiedTableColumns = modifiedTableColumns.map((item, i) => (
      i === findedIndex ? { ...item, disabled: !item.disabled } : {...item}
    ));
  
    this.setState({ 
      tableColumns:  newTableColumns,
      modifiedTableColumns: newModifiedTableColumns
    });
  }


  handleCalendarChange = (date) => {
    this.setState({calendarStartDate: date});
  }

  handleRelatedProjectChange = (e, {value}) => {
    this.setState({selectedRelatedProject: value})
  }

  handleAmountRemaining = (e, data) => {
    const { amountRemainingCheckboxes } = this.state;
    this.setState({ amountRemainingCheckboxes: {...amountRemainingCheckboxes, [data.name]: data.checked} })
  }

  applyFilter = () => {
  
    const { calendarStartDate, selectedRelatedProject, amountRemainingCheckboxes,
      initialTableList, multipleRangeValues } = this.state;
    
    let resultTableList = [];

    resultTableList = calendarStartDate ? (
      initialTableList && initialTableList.filter(item => (
        moment(calendarStartDate).isSame(item.createdAt, 'month')
      ))
    ): initialTableList


    if(selectedRelatedProject) {
      resultTableList = resultTableList && resultTableList.filter(item => (
        item.projects.some(value => value.name.includes(selectedRelatedProject))
      ));
    }

    if(multipleRangeValues) {
      resultTableList = resultTableList && resultTableList.filter(item => (
        item.amountTotal >= multipleRangeValues[0] && item.amountTotal <= multipleRangeValues[1]
      ));
    }

    resultTableList = resultTableList && resultTableList.filter(item => (
      amountRemainingCheckboxes[item.amountRemainingStatus]
    ));

    this.setState({
      ...(resultTableList && {tableList: resultTableList}),
      isFilterPopupOpen: false,
      searchPhrase: ''
    });
  }

  clearFilter = () => {
    const { initialTableList } = this.state;
    this.setState({
      tableList: initialTableList,
      calendarStartDate: null,
      selectedRelatedProject: '',
      multipleRangeValues: [0, 40000],
      searchPhrase: '',
      amountRemainingCheckboxes: {
        close: true,
        enough: true,
        exceeded: true
      }
    });
  }


  render() {
    const { modifiedTableColumns, tableList, tableColumns, selectedRelatedProject, amountRemainingCheckboxes,
      calendarStartDate, isFilterPopupOpen, projectList, multipleRangeValues, searchPhrase } = this.state;
    
    return (
      <React.Fragment>
        <div className="filters">
          {
            modifiedTableColumns && 
              <SortBy 
                label="Sort By:"
                placeholder="Select sort by"
                options={modifiedTableColumns}
                onHandleSortBy={this.handleSortBy}
              />
          }
          <div className="search">
            <Search
              placeholder="Search in budgets"
              onHandleSearch={this.handleSearch}
              value={searchPhrase}
            />
          </div>
          <div>
            <Popup
              trigger={<Button basic icon><Icon name='filter' color='blue' /></Button>}
              position='top right'
              on='click'
              className='filterPopup'
              open={isFilterPopupOpen}
              onClose={() => this.setState({ isFilterPopupOpen: false })}
              onOpen={() => this.setState({ isFilterPopupOpen: true })}
            >
              <Filters 
                createdDateLabel="Created date"
                relatedProjectLabel="Related project"
                amountRangeLabel="Amount range, $"
                amountRemainingLabel="Amount remaining is:"
                isFilterPopupOpen={isFilterPopupOpen}
                startDate={calendarStartDate}
                onHandleCalendarChange={this.handleCalendarChange}
                onHandleRelatedProjectChange={this.handleRelatedProjectChange}
                onHandleAmountRemaining={this.handleAmountRemaining}
                onApplyFilter={this.applyFilter}
                onClearFilter={this.clearFilter}
                projects={projectList}
                rangeValues={multipleRangeValues}
                relatedProjectValue={selectedRelatedProject}
                amountRemainingCheckboxes={amountRemainingCheckboxes}
                settings={{ 
                  start: multipleRangeValues,
                  min: 0,
                  max: 40000,
                  step: 1000,
                  onChange: (values) => this.setState({multipleRangeValues: values})
                }}
              />
            </Popup>
            <ColumnVisibility
              options={tableColumns}
              onToggleColumns={this.handleToggleColumns}
            />
          </div>
        </div>
        {
          tableColumns && <Table tableColumns={tableColumns} tableList={tableList} />
        }
      </React.Fragment>
    )
  }
}


AppContainer.propTypes = {
  tableColumns: PropTypes.array,
  tableList: PropTypes.array,
  projects: PropTypes.array
};

const mapStateToProps = (state) => ({
  tableColumns: state.budget.data.head,
  tableList: state.budget.data.list,
  projects: state.projects.data
});

const mapDispatchToProps = (dispatch) => ({
  initializeBudget: (data) => dispatch(initializeBudgetAction(data)),
  initializeProjects: (data) => dispatch(initializeProjectsAction(data)),
});

export const Main = connect(mapStateToProps,mapDispatchToProps)(AppContainer);