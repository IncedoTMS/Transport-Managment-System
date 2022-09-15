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
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Chip } from "@mui/material";
import "./tables.css";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import zIndex from "@mui/material/styles/zIndex";

const axios = require("axios");

function descendingComparator(a, b, orderBy) {
  console.log("a", a);
  console.log("b", b);
  console.log("orderBy", orderBy);
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
    id: "empId",
    numeric: false,
    disablePadding: true,
    label: "Employee Id",
    sortable: true,
  },
  {
    id: "empName",
    numeric: true,
    disablePadding: false,
    label: "Employee Name",
    sortable: true,
  },
  {
    id: "pickupLocation",
    numeric: true,
    disablePadding: false,
    label: "Pickup Location",
    sortable: false,
  },
  {
    id: "dropLocation",
    numeric: true,
    disablePadding: false,
    label: "Drop Location",
    sortable: false,
  },
  {
    id: "month",
    numeric: true,
    disablePadding: false,
    label: "Date",
    sortable: true,
  },

  {
    id: "managerApproval",
    numeric: true,
    disablePadding: false,
    label: "Manager Approval",
    sortable: false,
  },
  {
    id: "Confirm",
    numeric: true,
    disablePadding: false,
    label: "Status",
    sortable: false,
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
            // backgroundColor: "#78146a",
            backgroundColor: "#1976d2",
  
            borderBottom: "2px solid white",
            "& th": {
              fontSize: "1.25rem",
              color: "white",
            },
          }}
      >
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
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

function Display({ row, loader, apiDataSetter }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isConfirm, setIsconfirm] = React.useState(false);
  const [Dropdown, setDropdown] = React.useState("None");

  const [userData, setUserData] = React.useState({
    empid: "",
    name: "",
    role: "",
    reqdate: "",
    status: "",
  });

  React.useEffect(() => {
    console.log(1);
    loadUser();
  }, [Dropdown]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/monthly/${row.id}`, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    setUserData({ ...result.data, managerApproval: [Dropdown] });
  };

  const sendData = (e) => {
    console.log(userData);
    if (Dropdown != "None")
      axios
        .patch(`http://localhost:3000/monthly/${row.id}`, {managerApproval: [Dropdown]})
        .then((resp) => {
          console.log(resp);
        })
        .catch((e) => {
          console.log(e);
        });

    apiDataSetter([]);
    loader(apiDataSetter);
  };

  return (
    <TableRow role="checkbox" tabIndex={-1} sx={{fontSize: "1.16rem"}} disabled={true}>
      <TableCell
        component="th"
        scope="row"
        padding="none"
        sx={{ fontSize: "1.16rem" }}
        align="center"
      >
        {row.empId}
      </TableCell>
      <TableCell
        sx={{ fontSize: "1.16rem"}}
        align="center"
      >
        {row.empName}
      </TableCell>
      <TableCell
        sx={{ fontSize: "1.16rem"}}
        align="center"
      >
        {row.pickupLocation}
      </TableCell>
      <TableCell
        sx={{ fontSize: "1.16rem"}}
        align="center"
      >
        {row.dropLocation}
      </TableCell>
      <TableCell
        sx={{ fontSize: "1.16rem"}}
        align="center"
      >
        {row.month}
      </TableCell>
      <TableCell sx={{ fontSize: "1.16rem" }} align="center">
        <div class="btn-group">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            
          >
            <Chip
              color="info"
              label={Dropdown == "None" ? row.managerApproval : Dropdown}
              style={{ fontSize: "1.16rem" }}
            />
          </button>
          <ul class="btn-outline-dark dropdown-menu" style={{zIndex:"+2!important", overflow: "visible !important"}} role="menu" boundary="scrollParent">
            <li>
              <a
              href="#"
                class="dropdown-item"
                value="Hold"
                onClick={() => setDropdown("Hold")}
                style={{zIndex:"+2!important"}} 
              >
                Hold
              </a>
            </li>
            <li>
              <a
              href="#"
                class="dropdown-item"
                value="Approved"
                onClick={() => setDropdown("Approved")}
                style={{zIndex:"+2!important"}} 
              >
                Approved
              </a>
            </li>
            <li>
              <a
              href="#"
                class="dropdown-item"
                value="Rejected"
                onClick={() => setDropdown("Rejected")}
                style={{zIndex:"+2!important"}} 
              >
                Rejected
              </a>
            </li>
          </ul>
        </div>
      </TableCell>

      <TableCell
        sx={{ fontSize: "1.16rem", position: "relative" }}
      >

    {row.status==="Expired"?(

      <Chip
                          label={row.status}
                          color="error"
                          variant="outlined"
                          size="small"
                          sx={{ fontSize: "1.16rem" }}
                        />


    ):
(<Chip
          color="success"
          label="Confirm"
          sx={{ fontSize: "1.16rem" }}
          name="status"
          onClick={sendData}
          disabled={(row.managerApproval=="Approved" || row.managerApproval=="Rejected") && Dropdown=="None"}
        />)
        }
      </TableCell>
    </TableRow>
  );
}

export default function CreateMonthly({
  tableData,
  searchData,
  loader,
  apiDataSetter,
  searchInput
}) {
  var rows = [];

  if (searchData.length == 0 ) {

    if(searchInput.length==0)
    {

    tableData.map((data, id) => {
      if(data.status=="Active")
      rows.push(data);
    });
  }

  }
  
  else {
    searchData.map((data, id) => {
      if(data.status=="Active") rows.push(data);
    });
  }

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
    <Box sx={{ width: "97.5%", margin: "auto" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750, fontSize: "1.1rem", minHeight:200 }}
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

                  return (

                    row.status=="Active"?
                    (<Display
                      row={row}
                      loader={loader}
                      apiDataSetter={apiDataSetter}
                    />):
                    (<></>)

                    
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
  );
}
