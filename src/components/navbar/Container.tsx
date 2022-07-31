import React, { FC } from "react";
import { Nav } from "./Nav";

export const Container: FC<{}> = () => {
  return (
    <div style={{width:"70px"}}>
      <Nav />
    </div>
  );
};
