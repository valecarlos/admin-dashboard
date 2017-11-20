import React from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const data = [
  {
    Id: 1,
    Department: 'Sales',
    Number: 587,
    Status: 'Active'
  },
  {
    Id: 2,
    Department: 'Marketing',
    Number: 457,
    Status: 'Active'
  },
  {
    Id: 3,
    Department: 'Accounting',
    Number: 257,
    Status: 'On Hold'
  },
  {
    Id: 4,
    Department: 'Development',
    Number: 841,
    Status: 'Active'
  }
]

const TableExampleSimple = () => (
  <Table>
    <TableHeader displaySelectAll={false}>
    <TableRow>
      {
        Object.keys(data[0]).map((title) => (
          <TableHeaderColumn>{title}</TableHeaderColumn>
        ))
      }
    </TableRow>
  </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {
        data.map((item) => {
          return (
            <TableRow>
             {
               Object.keys(item).map((prop) => (
                <TableRowColumn>{item[prop]}</TableRowColumn>
              ))
             }
          </TableRow>
          )
        })
      }
    </TableBody>
  </Table>
);

export default TableExampleSimple;