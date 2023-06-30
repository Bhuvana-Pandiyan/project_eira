import React from 'react';
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
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils'

function createData(ticketno, sitename, priority, createdtime, category, subject, assignedto, state, status, completiondate, createdby) {
    return {
        ticketno,
        sitename,
        priority,
        createdtime,
        category, subject,
        assignedto,
        state,
        status,
        completiondate,
        createdby,
    };
}

const rows = [
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),
    createData('322222', 'ICE-94563', 'High', '11:45.A.M.', 'Opertions', 'New text...', 'Abhinavsingh', 'open', 'inprogress', '22-03-2023', 'Admin'),

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
        id: 'ticketno',
        numeric: false,
        disablePadding: true,
        label: 'Ticket No',
    },
    {
        id: 'sitename',
        numeric: true,
        disablePadding: true,
        label: 'Site Name',
    },
    {
        id: 'priority',
        numeric: true,
        disablePadding: true,
        label: 'Priority',
    },
    {
        id: 'createdtime',
        numeric: true,
        disablePadding: true,
        label: 'Created Time',
    },
    // {
    //     id: 'category',
    //     numeric: true,
    //     disablePadding: false,
    //     label: 'Category',
    // },
    {
        id: 'subject',
        numeric: true,
        disablePadding: true,
        label: 'Subject',
    },
    {
        id: 'assignedto',
        numeric: true,
        disablePadding: true,
        label: 'Assigned To',
    },
    {
        id: 'state',
        numeric: true,
        disablePadding: true,
        label: 'State',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: true,
        label: 'Status',
    },
    {
        id: 'completiondate',
        numeric: true,
        disablePadding: true,
        label: 'Completion Date',
    },
    {
        id: 'createdby',
        numeric: true,
        disablePadding: true,
        label: 'Created By',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
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
                        style={{ fontSize: "12px" }}
                        align={"center"}
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
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

function AllAlert() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('Site Name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.ticketno);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, ticketno) => {
        const selectedIndex = selected.indexOf(ticketno);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, ticketno);
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

    const isSelected = (ticketno) => selected.indexOf(ticketno) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750, height: "20px"}}
                        aria-labelledby="tableTitle"
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
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.ticketno);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.ticketno)}

                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.ticketno}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell  style={{ align: "right"}}>{row.ticketno}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.sitename}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.priority}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.createdtime}</TableCell>
                                            {/* <TableCell  style={{ align: "right", marginTop: "20px" }}>{row.category}</TableCell> */}
                                            <TableCell  style={{ align: "right"}}>{row.subject}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.assignedto}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.state}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.status}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.completiondate}</TableCell>
                                            <TableCell  style={{ align: "right"}}>{row.createdby}</TableCell>
                                        </TableRow>
                                    );
                                })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='pagination'>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </div>
            </Paper>

        </Box>
    );
}

export default AllAlert;