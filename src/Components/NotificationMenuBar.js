import React, { useContext, useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import { StyleContext } from "../Contexts/StyleContext";
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import { TablePaginationActions } from './TablePaginationActions';



export const NotificationMenuBar = () => {
  const [styleContext, setStyleContext] = useContext(StyleContext);

  const style = {
    container: {
      display: "flex",
      justifyContent: "space-around"
    },
    pagination: {
      color: styleContext.theme.palette.textMain.light
    }
  }

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <nav style={{ ...style.container }}>
      <Button variant="contained">
        Select All
      </Button>

      <Button variant="contained">
        Export Selected
      </Button>

      <Button variant="contained">
        Delete Selected
      </Button>
      <TablePagination
      sx={{
        ...style.pagination
      }}
        component="div"
        count={100}
        page={1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </nav>

  );
}

export default NotificationMenuBar;