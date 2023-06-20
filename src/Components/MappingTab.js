import React from 'react'
import './Style.css';
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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AddRole from './AddRole';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';

function createData(rolename, accesspages, edit) {
    return {
        rolename,
        accesspages,
        edit,
    };
}

// const rows = [
//   createData('R12211', 'Admin', 'For Admin Users',  'Active', '09-02-2023 01:45 AM' ),
//   createData('R12211', 'Monitoring', 'For Monitoring...',  'Active', '09-02-2023 01:45 AM'  ),
//   createData('R12211', 'Portofolio Manager', '-',  'Active', '09-02-2023 01:45 AM',),
//   createData('R12211', 'ICECTT', '-',  'In-Active', '09-02-2023 01:45 AM'),
//   createData('R12211', 'Site Lead', 'To be use for..',  'Active', '09-02-2023 01:45 AM'),
//   createData('R12211', 'Team Lead', 'Team Lead',  'Active', '09-02-2023 01:45 AM')
// ];

const rows = [
    { "rolename": "Application Tester", "accesspages": "Dashboard,CustomerView,SiteView,Tickets,New Ticket" },
    { "rolename": "EIRA Asset Management", "accesspages": "Dashboard,SiteView,Tickets,Events,New Ticket,Analysis,Documents Upload,Documents Download,Reports" },
    { "rolename": "EIRA Customer	", "accesspages": "Dashboard,SiteView,Tickets,Events,Analysis,Documents Download,Reports" },
    { "rolename": "EIRA Ticketing	", "accesspages": "Dashboard,Tickets,New Ticket,Documents Upload,Documents Download" },
    { "rolename": "End Customer", "accesspages": "Dashboard,SiteView,Events,Analysis,User Configuration" },
    { "rolename": "ICE Admin", "accesspages": "Dashboard,CustomerView,SiteView,Tickets,Events,New Ticket,Analysis,Documents Upload,Documents Download,Reports,Customer Configuration,Site Configuration,Equipment Configuration,StandardParameter Configuration,Master Upload,User Configuration" },
    { "rolename": "Monitoring", "accesspages": "Dashboard,SiteView,Events,Analysis" },
    { "rolename": "Site Lead", "accesspages": "	Dashboard,Tickets,Reports" },
    { "rolename": "Super admin", "accesspages": "Team Lead" }
];

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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
        id: 'rolename',
        numeric: false,
        disablePadding: false,
        label: 'Role Name',
    },
    {
        id: 'accesspages',
        numeric: false,
        disablePadding: false,
        label: 'Access Pages',
    },
    {
        id: 'edit',
        numeric: false,
        disablePadding: false,
        label: 'Edit',
    },

];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };



    return (

        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        // align={headCell.numeric ? 'left' : 'left'}
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
                <Tooltip title="">
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

function MappingTab() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const navigate = useNavigate
  
    // const [userName, setEmail] = React.useState('')
   
    const handleNavigate = () => {
        console.log("navigate")
        navigate('/addrole')   
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
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
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    // const navigate = useNavigate
  
    // const [userName, setEmail] = React.useState('')
   
    // const handleNavigate = () => {
    //     console.log("navigate")
    //     navigate('/addrole')   
    // }

    return (
        <div className='map-tab'>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {visibleRows.map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell> */}
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>

                                            <TableCell style={{ align: "left", fontSize: "14px" }}>{row.rolename}</TableCell>
                                            <TableCell style={{ align: "left", fontSize: "14px" }}>{row.accesspages}</TableCell>
                                            <TableCell style={{ align: "left", fontSize: "14px" }}>{row.edit}</TableCell>
                                           <Link> <TableCell  > <button style={{
                                                align: "left", fontSize: "14px", backgroundColor: "blue", borderRadius: "15px",
                                                width: "70px", lineHeight: "35px", color: "white" }} onClick={handleNavigate}>  Edit  </button> </TableCell> </Link>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

            </Box>
        </div>
    );
}

export default MappingTab;