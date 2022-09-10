import React from "react";

interface Props {
  width?: number;
}

const Separator = ({ width = 80 }: Props) => {
  return (
    <hr
      style={{
        width: `${width}%`,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "0",
      }}
    />
  );
};

export default Separator;
