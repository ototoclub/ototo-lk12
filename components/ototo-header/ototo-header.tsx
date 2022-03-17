import React from "react";
import style from "./ototo-header.module.css";
import { Heading } from "@chakra-ui/react";

interface OtotoHeaderProps {
  children: string;
  fontSize?: string | number;
}

const OtotoHeader = ({ children, fontSize = "6xl" }: OtotoHeaderProps) => {
  return (
    <Heading
      color="primary"
      fontSize={fontSize}
      className={style.heading}
    >
      Sofia Pro
    </Heading>
  );
};

export default OtotoHeader;
