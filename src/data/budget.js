export const BUDGET_LIST = {
  head: [
    { id: 'budgetName', name: 'Budget name', flexgrow: 3, visibility: true },
    { id: 'poNumber', name: 'PO number', flexgrow: 1, visibility: true },
    { id: 'amountTotal', name: 'Amount total', flexgrow: 1, align: 'right', visibility: true },
    { id: 'amountRemaining', name: 'Amount remaining', flexgrow: 1, align: 'right', visibility: true },
    { id: 'createdAt', name: 'Created at', flexgrow: 1, align: 'right', visibility: true },
    { id: 'projects', name: 'Projects', flexgrow: 4, visibility: true }
  ],
  list: [
    { 
      id: 1,
      budgetName: 'For translation operations',
      poNumber: '9846-12-3254',
      amountTotal: 1500.00,
      amountRemaining: 1487.00,
      amountRemainingStatus: 'close',
      createdAt: '2018-04-08T10:28:56',
      projects: [
        {id: 1, name: 'My name project 2345 - manual translation'},
        {id: 2, name: 'Project 1128 - auto translation'}
      ]
    },
    { 
      id: 2,
      budgetName: 'New budget for all primary tasks',
      poNumber: '6834626546424',
      amountTotal: 20680.00,
      amountRemaining: 21946.65,
      amountRemainingStatus: 'exceeded',
      createdAt: '2019-01-31T23:28:56',
      projects: [
        {id: 1, name: 'Excellent Project 2345 - manual translation'},
        {id: 2, name: 'Project 1128 - auto translation'},
        {id: 3, name: 'Project 1090 - manual translation'},
        {id: 4, name: 'Project 4532 - auto translation'},
      ]
    },
    { 
      id: 3,
      budgetName: 'Document and security data budget',
      poNumber: '5846-12-2235',
      amountTotal: 9150.00,
      amountRemaining: 3546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2017-07-02T10:28:56',
      projects: [
        {id: 1, name: 'Super Project 1365 - manual translation'}
      ]
    },
    { 
      id: 4,
      budgetName: 'New budget',
      poNumber: '5846-12-24535',
      amountTotal: 450.00,
      amountRemaining: 5546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2016-03-07T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
        {id: 2, name: 'Project 4365 - manual translation'}
      ]
    },
    { 
      id: 5,
      budgetName: 'Last cool budget',
      poNumber: '5846-12-24535',
      amountTotal: 2620.00,
      amountRemaining: 5546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2015-03-07T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
        {id: 2, name: 'Project 4365 - manual translation'},
        {id: 3, name: 'Project 6365 - manual translation'},
        {id: 4, name: 'Project 1365 - manual translation'},
        {id: 5, name: 'Project 4365 - manual translation'},
        {id: 6, name: 'Project 7365 - manual translation'}
      ]
    },
    { 
      id: 6,
      budgetName: 'Imagine budget',
      poNumber: '98264535',
      amountTotal: 6150.00,
      amountRemaining: 3546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2014-03-07T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
        {id: 2, name: 'Project 4365 - manual translation'},
      ]
    },
    { 
      id: 7,
      budgetName: 'Excellent budget',
      poNumber: '98264-535',
      amountTotal: 8150.00,
      amountRemaining: 1546.33,
      amountRemainingStatus: 'close',
      createdAt: '2013-02-09T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
        {id: 2, name: 'Project 4365 - manual translation'},
      ]
    },
    { 
      id: 8,
      budgetName: 'Last super budget',
      poNumber: '98263234-535',
      amountTotal: 1450.00,
      amountRemaining: 4546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2012-04-02T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
      ]
    },
    { 
      id: 9,
      budgetName: 'My last excellent budget',
      poNumber: '75243234-309',
      amountTotal: 5750.00,
      amountRemaining: 10046.33,
      amountRemainingStatus: 'enough',
      createdAt: '2019-06-02T20:18:56',
      projects: [
        {id: 1, name: 'Project 1365 - manual translation'},
        {id: 2, name: 'Project 4365 - manual translation'},
      ]
    },
    { 
      id: 10,
      budgetName: 'Awesome budget',
      poNumber: '94253234-309',
      amountTotal: 9510.00,
      amountRemaining: 4546.33,
      amountRemainingStatus: 'enough',
      createdAt: '2018-02-02T20:18:56',
      projects: [
        {id: 1, name: 'Project 6365 - manual translation'},
        {id: 2, name: 'Project 1365 - manual translation'},
        {id: 3, name: 'Project 4365 - manual translation'},
        {id: 4, name: 'Project 7365 - manual translation'}
      ]
    },
  ] 
}