import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import classes from "./Home.module.scss";

import Canvas from "../Canvas/Canvas";

function createData(name) {
  return { name };
}

const rows = [
  createData("Button"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

const HomeView = () => {
  const [itemChosen, setItemChosen] = useState(null); //* Store what button was clicked
  const [showCanvas, setShowCanvas] = useState(false); //* Toggles a white screen to display the content

  const clickHandler = (name) => {
    console.log("testing click handler");

    setItemChosen(name);

    setShowCanvas(true);
  };

  return (
    <div className={classes.home}>
      {!showCanvas && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.table__nameHeader}>
                  Name
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.table__name}
                  >
                    <span onClick={() => clickHandler(row.name)}>
                      {row.name}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {showCanvas ? (
        <Canvas setShowCanvas={setShowCanvas} itemChosen={itemChosen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeView;
