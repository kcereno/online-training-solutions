import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Set } from "../../../../data/interfaces";

interface Props {
  index: number;
  set: Set;
  deleteSet: () => void;
}

const SetEntry = ({ index, set, deleteSet }: Props) => {
  const handleDeleteClick = () => {
    deleteSet();
  };

  return (
    <div className="d-flex justify-content-center" key={index}>
      <p className="mb-1 d-flex align-items-center">
        <strong className="mx-2">Set {index + 1}:</strong>
        {`${set.weight}lbs for  ${set.reps} reps`}
        <FontAwesomeIcon
          style={{ color: "red", paddingTop: "2px" }}
          className="mx-2"
          icon={faDeleteLeft}
          onClick={handleDeleteClick}
        />
      </p>
    </div>
  );
};

export default SetEntry;
