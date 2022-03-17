import React from "react";
import style from "./ototo-header.module.css";
import { Heading } from "@chakra-ui/react";
import { Token } from "@chakra-ui/styled-system/src/utils/index";
import * as CSS from "csstype";

interface OtotoHeaderProps {
  children: string;
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">;
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
