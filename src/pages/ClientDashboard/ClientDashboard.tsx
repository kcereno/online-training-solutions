import React from "react";
import { Client } from "../../data/classes";

type Props = {
  client: Client;
};

const ClientDashboard = ({ client }: Props): JSX.Element => {
  return <div>Hello {client.clientInfo.firstName}</div>;
};

export default ClientDashboard;
