import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import adminStorageKeys from "../../../../constant/admin-storage-keys";
import { useTable } from "react-table";
import { Button, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { useGlobalFilter, useSortBy } from "react-table";
import styled from "styled-components";
import classes from "./table.module.scss";
import { GlobalFilter } from "./globalFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "moment";
UserTable.propTypes = {};

function UserTable(props) {
  const [users, setUsers] = useState([]);
  const adminToken = localStorage.getItem(adminStorageKeys.TOKEN);
  const url = "http://localhost:5000/user/allusers";
  let axiosConfig = {
    headers: {
      Authorization: adminToken,
    },
  };
  const fetchAllUsers = async () => {
    const response = await axios
      .get(url, axiosConfig)
      .catch((err) => console.log(err));
    if (response) {
      const users = response.data;
      setUsers(users);
    }
  };
  const usersData = useMemo(() => [...users], [users]);

  const usersColumns = useMemo(
    () =>
      users[0]
        ? Object.keys(users[0])
            .filter(
              (key) =>
                key !== "_id" &&
                key !== "username" &&
                key !== "password" &&
                key !== "role" &&
                key !== "jwt" &&
                key !== "__v" &&
                key !== "createdAt" &&
                key !== "updatedAt"
            )
            .map((key) => {
              if (key === "nationalid") {
                return { Header: "ID card", accessor: key };
              } else if (key === "phonenumber") {
                return { Header: "Phone", accessor: key };
              } else if (key === "passportid") {
                return { Header: "Passport", accessor: key };
              } else if (key === "nationality") {
                return { Header: "National", accessor: key };
              } else if (key === "creditcard") {
                return { Header: "Credit Card", accessor: key };
              } else if (key === "creditcardbrand") {
                return { Header: "Issued By", accessor: key };
              } else if (key === "carddate") {
                return {
                  Header: "Date of Card",
                  accessor: (key) => {
                    return Moment(key.carddate).format("MM/DD/YYYY");
                  },
                };
              } else if (key === "dob") {
                return {
                  Header: "Date of Birth",
                  accessor: (key) => {
                    return Moment(key.dob).format("MM/DD/YYYY");
                  },
                };
              }
              return { Header: key, accessor: key };
            })
        : [],
    [users]
  );
  const handleDelete = (value) => {
    let axiosConfig = {
      headers: {
        Authorization: adminToken,
      },
    };
    const newUsers = [...users];
    for (let i = 0; i < newUsers.length; i++) {
      if (newUsers[i].name === value) {
        //check xem có phải admin không
        if (newUsers[i].role === 1) {
          toast.error("Access Denied");
          return;
        }
        //xóa
        const url = `http://localhost:5000/user/deleteuser/${newUsers[i]._id}`;
        axios
          .delete(url, axiosConfig)
          .then((res) => toast.success("Delete Successfully"))
          .catch((err) => toast.error("Something Wrongs"));
      }
    }
    setUsers([...newUsers]);
  };
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <Button onClick={() => alert("Editing: " + row.values.name)}>
            Edit
          </Button>
        ),
      },
      {
        id: "Delete",
        Header: "Delete",
        Cell: ({ row }) => (
          <Button onClick={() => handleDelete(row.values.name)}>Delete</Button>
        ),
      },
    ]);
  };
  const tableInstance = useTable(
    { columns: usersColumns, data: usersData },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;
  useEffect(() => {
    fetchAllUsers();
  }, [users]);
  return (
    <>
      <div className="content-wrapper">
        <div style={{ padding: "10px" }}>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            setGlobalFilter={setGlobalFilter}
            globalFilter={state.globalFilter}
          />
          <table className={classes.table} {...getTableProps()}>
            <thead className={classes.thead}>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr
                    className={classes.trHead}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th
                          className={classes.th}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {
                            // Render the header
                            column.render("Header")
                          }
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ▼"
                              : " ▲"
                            : ""}
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            {/* Apply the table body props */}
            <tbody className={classes.tbody} {...getTableBodyProps()}>
              {
                // Loop over the table rows
                rows.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    <tr className={classes.trBody} {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td className={classes.td} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default UserTable;
