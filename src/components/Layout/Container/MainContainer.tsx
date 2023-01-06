import React from "react";
import { Box, Container } from "@mui/material";
import styles from "./MainContainer.module.css";
import { IMainContainerProps } from "./types";

const MainContainer = (props: IMainContainerProps) => {
  return (
    <>
      <Container maxWidth="md" className={styles.mainContainer}>
        <Box sx={{ bgcolor: props.bgColor ?? "#b29ce0", height: "100vh" }}>
          {props.children}
        </Box>
      </Container>
    </>
  );
};

export default MainContainer;
