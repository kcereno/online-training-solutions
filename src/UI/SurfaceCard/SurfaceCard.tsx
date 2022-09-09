import React from "react";
import { Card } from "react-bootstrap";
import "./SurfaceCard.css";

interface Props {
  children: React.ReactNode;
}

const SurfaceCard = ({ children }: Props) => {
  return <Card className="surface-card-container">{children}</Card>;
};

export default SurfaceCard;
