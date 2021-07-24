import React from "react";
import { Column, Row } from "./styles/grid";

const Grid = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

Grid.Row = ({ children, width, count, ...restProps }) => {
  return (
    <Row {...restProps} width={width}>
      {children}
    </Row>
  );
};

export default Grid;
