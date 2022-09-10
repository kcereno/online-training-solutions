import React from "react";

interface Props {
  width?: number;
  className?: string;
}

const Separator = ({ width = 80, className }: Props) => {
  return (
    <hr
      className={`${className}`}
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
