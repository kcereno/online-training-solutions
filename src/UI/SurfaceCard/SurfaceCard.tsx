import React from "react";
import { Card, Container } from "react-bootstrap";
import "./SurfaceCard.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: object;
  centered?: boolean;
}

const SurfaceCard = ({ children, className, style, centered }: Props) => {
  const isCentered = centered ? "centered" : null;

  return (

      <Card
        className={`${"surface-card-container"} ${className} ${isCentered}`}
        style={style}
      >
        {children}
      </Card>

  );
};

export default SurfaceCard;
