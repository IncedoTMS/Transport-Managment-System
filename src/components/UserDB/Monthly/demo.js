import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

// function createData(
//   month,
//   pickupLocation,
//   pickupTime,
//   dropLocation,
//   managerApproval,
//   status
// ) {
//   return {
//     month,
//     pickupLocation,
//     pickupTime,
//     dropLocation,
//     managerApproval,
//     status,
//   };
// }

// const rows = [
//   createData(
//     "Aug-22",
//     " Gurgaon",
//     "22:00",
//     "248-Udyog Vihar, Phase 4, Gurugram, Haryana",
//     "Approved",
//     "Expired"
//   ),
//   createData(
//     "Sep-22",
//     "Gurgaon",
//     "22:00",
//     "248-Udyog Vihar, Phase 4, Gurugram, Haryana",
//     "Approved",
//     "Active"
//   ),
//   createData(
//     "Oct-22",
//     "Gurgaon",
//     "22:00",
//     "248-Udyog Vihar, Phase 4, Gurugram, Haryana",
//     "Approved",
//     "Active"
//   ),
//   createData(
//     "Nov-22",
//     " Gurgaon",
//     "22:00",
//     "248-Udyog Vihar, Phase 4, Gurugram, Haryana",
//     "Approved",
//     "Active"
//   ),
//   createData(
//     "Dec-22",
//     "Gurgaon",
//     "22:00",
//     "248-Udyog Vihar, Phase 4, Gurugram, Haryana",
//     "Approved",
//     "Active"
//   ),
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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
    id: "sno",
    numeric: true,
    disablePadding: false,
    label: "#",
  },
  {
    id: "month",
    numeric: false,
    disablePadding: false,
    label: "Month",
  },
  {
    id: "pickupLocation",
    numeric: false,
    disablePadding: false,
    label: "Pickup Location",
  },
  {
    id: "pickupTime",
    numeric: true,
    disablePadding: false,
    label: "Pickup Time",
  },
  {
    id: "dropLocation",
    numeric: false,
    disablePadding: false,
    label: "Drop Location",
  },
  {
    id: "managerApproval",
    numeric: false,
    disablePadding: false,
    label: "Manager Approval",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: "#78146a",

          borderBottom: "2px solid white",
          "& th": {
            fontSize: "1.25rem",
            color: "white",
          },
        }}
      >
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            align="center"
            // padding={headCell.disablePadding ? "none" : "normal"}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("month");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = props.data;
  console.log(rows);

  // const rows = [];

  // rows = monthlydata.map((md) => {
  //   md.month,
  //     md.pickupLocation,
  //     md.pickupTime,
  //     md.dropLocation,
  //     md.managerApproval,
  //     md.status;
  // });
  // console.log(rows);
  // const newdata = monthlydata.map((obj) => {
  //   return [obj.month, obj.pickupLocation];
  // });
  // console.log("NEw Data: " + newdata);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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
        selected.slice(selectedIndex + 1)
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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750, fontSize: "1.1rem" }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
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
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const TCELLFONT = "1.125rem";

                  return (
                    <TableRow
                      hover
                      //   onClick={(event) => handleClick(event, row.name)}
                      //   role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ fontSize: TCELLFONT }}
                    >
                      {/* <TableCell
                        padding="checkbox"
                        sx={{ fontSize: TCELLFONT }}
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell> */}
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {index + 1}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.month}
                      </TableCell>

                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.pickupLocation}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.pickupTime}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.dropLocation}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.managerApproval}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.status === "Active" ? (
                          <Chip
                            label={row.status}
                            color="success"
                            variant="outlined"
                            sx={{ fontSize: TCELLFONT }}
                          />
                        ) : (
                          <Chip
                            label={row.status}
                            color="error"
                            variant="outlined"
                            sx={{ fontSize: TCELLFONT }}
                          />
                        )}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: TCELLFONT }}>
                        {row.status === "Expired" ? (
                          <>
                            <Link
                              to={`/dashboard/monthly/edit/${row.id}`}
                              onClick={(event) => event.preventDefault()}
                            >
                              <Button
                                variant="contained"
                                startIcon={
                                  <EditIcon fontSize="large" disabled />
                                }
                                disabled
                              >
                                Edit
                              </Button>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link to={`/dashboard/monthly/edit/${row.id}`}>
                              <Button
                                variant="contained"
                                startIcon={<EditIcon fontSize="large" />}
                              >
                                Edit
                              </Button>
                            </Link>
                          </>
                        )}
                      </TableCell>
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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
