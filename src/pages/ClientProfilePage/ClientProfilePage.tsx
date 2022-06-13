import React from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ALL_CLIENTS } from "../../data/Users/Clients";

const ClientProfilePage = () => {
  const params = useParams();

  const clientId = params.client;

  return (
    <div>
      <Image roundedCircle className="profile-picture" />
      <h1 className="text-white">fsdfsd</h1>
    </div>
  );
};

export default ClientProfilePage;
