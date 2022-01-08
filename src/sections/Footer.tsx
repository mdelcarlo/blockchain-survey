import React from "react";
import styled from "styled-components";
import { Link, Typography } from "@mui/material";

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  text-align: center;
  background: #ccc;
  width: 100%;
`;

export default () => (
  <Footer>
    <Typography>
      <span>I am </span>
      <Link href="https://www.linkedin.com/in/mdelcarlo/" underline="hover">
        Matias Del Carlo
      </Link>
      <span> and I love the blockchain revolution.</span>
    </Typography>
  </Footer>
);
