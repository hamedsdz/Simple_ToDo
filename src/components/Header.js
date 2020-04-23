import React from "react";
import { Navbar } from "react-bootstrap";
import { Online, Offline } from "react-detect-offline";

export const Header = () => {
  return (
    <>
      <Navbar variant="dark" bg="info">
        <Navbar.Brand>برنامه هام</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Online>آنلاینی</Online>
            <Offline>آفلاینی</Offline>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
