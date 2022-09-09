import React from "react";
import { Card } from "react-bootstrap";
import "./SurfaceCard.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SurfaceCard = ({ children, className }: Props) => {
  return (
    <Card className={`${"surface-card-container"} ${className}`}>
      {children}
    </Card>
  );
};

export default SurfaceCard;
