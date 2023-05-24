import React, { useEffect, useState } from 'react';
import './Style.css'
import axios from 'axios';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { visuallyHidden } from '@mui/utils';



function createData(equipmentname, equipmentid, customerfacing, equipmenttype, status, todayenergy, totalenergy, lastdatareceived) {
  return {
    equipmentname,
    equipmentid,
    customerfacing,
    equipmenttype,
    status,
    todayenergy,
    totalenergy,
    lastdatareceived,
  };
}


// const tableValues = [

//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },

//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India Foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },
//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India Foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },
//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India Foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },
//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India Foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },
//   {
//     "equipmentname": "SE00200EQ004", "equipmentid": "EQ1234", "customerfacing": "India Foods", "equipmenttype": "Inverter", "status": "Active",
//     "todayenergy": "Inverter", "totalenergy": "Inverter", "lastdatareceived": "Inverter"
//   },

// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'ticketmode',
    numeric: false,
    disablePadding: true,
    label: ' TicketMode',

  },
  {
    id: 'description',
    numeric: true,
    disablePadding: true,
    label: 'Description ',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: true,
    label: 'Address',
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: true,
    label: 'Category',
  },
  {
    id: 'priority',
    numeric: true,
    disablePadding: true,
    label: 'Priority    ',
  },
  {
    id: 'assignedto ',
    numeric: true,
    disablePadding: true,
    label: 'Assignedto',
  },
  {
    id: 'ticketid ',
    numeric: true,
    disablePadding: true,
    label: 'TicketId',
  },
  {
    id: 'createddate',
    numeric: true,
    disablePadding: true,
    label: 'CreatedDate',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ width: "6.3rem", fontSize: "10px" }}>
      <TableRow style={{ width: '6.3rem' }}>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}

            style={{ fontSize: "12px", width: '6.3rem' }}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"

        >
          {numSelected}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >

        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>

          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function TableComponent() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('equipmentID');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [tableValuesPerPage, settableValuesPerPage] = React.useState(5);

  const [tableValues, setTables] = React.useState([])

  useEffect(() => {
    getcall();
  }, [])

  const getcall = () => {
    axios.get(`http://inspirece.com/eiramobileservice/rest/ticketservice/tickets/userid=852&timezoneoffset=330`).then((res) => {

      if (res.status === 200) {
        console.log(res.data, 'res');
        setTables(res.data)
      }
    }) 
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tableValues.map((n) => n.equipmentname);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, equipmentname) => {
    const selectedIndex = selected.indexOf(equipmentname);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, equipmentname);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log(event, newPage);
    setPage(newPage);
  };

  const handleChangetableValuesPerPage = (event) => {
    settableValuesPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (equipmentname) => selected.indexOf(equipmentname) !== -1;

  const emptytableValues =
    page > 0 ? Math.max(0, (1 + page) * tableValuesPerPage - tableValues.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>

        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, height: "10px" }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableValues.length}
            />

            <TableBody>
              {stableSort(tableValues, getComparator(order, orderBy))
                .slice(page * tableValuesPerPage, page * tableValuesPerPage + tableValuesPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.equipmentname);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  console.log(row);
                  return (

                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.equipmentname)}

                      aria-checked={isItemSelected}

                      tabIndex={-1}
                      key={row.equipmentname}
                      // style={{marginRight: "4rem"}}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >

                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.ticketMode}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.description}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.address}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.category}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.priority}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.assignedto}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.ticketId}</TableCell>
                      <TableCell style={{ align: "center", fontSize: "14px", width: "30px" }}>{row.createdDate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptytableValues > 0 && (
                <TableRow
                  style={{

                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        tableValuesPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableValues.length}
        tableValuesPerPage={tableValuesPerPage}
        page={page}
        onPageChange={handleChangePage}
        ontableValuesPerPageChange={handleChangetableValuesPerPage}
      />
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={rowsPage.length}
          rowsPerPage={rowsPerPage}
          page={page}
          component='div'
          onPageChange={handleChangePage}
          onRowsPerPageChange={(e)=>handleChangeRowsPerPage(e)}
        /> */}

    </Box>

  );
}

export default TableComponent;