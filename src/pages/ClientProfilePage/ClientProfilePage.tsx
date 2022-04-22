import React from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CLIENTS } from "../../data/CLIENTS";

const ClientProfilePage = () => {
  const params = useParams();

  const clientId = params.client;

  const client = CLIENTS.find((client) => client.clientInfo.id === clientId);
  return (
    <div>
      <Image roundedCircle className="profile-picture" src={client?.clientInfo.profilePicture} />
      <h1 className="text-white">{client?.clientInfo.firstName}</h1>
    </div>
  );
};

export default ClientProfilePage;
