import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Set } from "../../../../data/interfaces";

interface Props {
  index: number;
  set: Set;
}

const SetEntry = ({ index, set }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <p className="mb-1">
        <strong className="mx-2">Set {index + 1}:</strong>
        {`${set.weight}lbs for  ${set.reps} reps`}{" "}
        <FontAwesomeIcon
          style={{ color: "red" }}
          className="mx-2 align-self-center"
          icon={faDeleteLeft}
        />
      </p>
    </div>
  );
};

export default SetEntry;
